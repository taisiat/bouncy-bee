import Wasp from "./wasp.js";
import Flower from "./flower.js";
import Bee from "./bee.js";
import Beehive from "./beehive.js";
import SpeedStrip from "./speed_strip";
import Pollen from "./pollen.js";
import BeehiveSparkle from "./beehive_sparkle.js";
import * as Util from "./util.js";

const CONSTANTS = {
  BEEHIVEBONUS: 100,
  FLOWERPOINT: 1,
  EMPTY_REGION: 0.15,
  MIN_EDGE_DISTANCE: 40,
  WASP_LOCATION_ADJ: 0.25,
};

class Game {
  static DIM_X = 1200;
  static DIM_Y = 600;

  static NUM_WASPS = 1;
  static NUM_FLOWERS = 15;
  static NUM_SPEEDSTRIPS = 1;

  constructor(options) {
    this.xDim = options.xDim;
    this.yDim = options.yDim;
    this.score = 0;
    this.wasps = [];
    this.flowers = [];
    this.speedStrips = [];
    this.pollens = [];
    this.beehiveSparkles = [];
    this.bee = this.addBee();
    this.beehive = this.addBeehive();
    this.background = document.getElementById("grass");
    while (this.wasps.length < Game.NUM_WASPS) {
      this.wasps.push(this.addWasps());
    }
    // while (this.flowers.length < Game.NUM_FLOWERS) {
    //   this.flowers.push(this.addFlowers());
    // }
    this.addFlowers();
    while (this.speedStrips.length < Game.NUM_SPEEDSTRIPS) {
      this.speedStrips.push(this.addSpeedStrips());
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);
    const pattern = ctx.createPattern(this.background, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, this.xDim, this.yDim);
    this.flowers.forEach((flower) => flower.draw(ctx));
    this.beehive.draw(ctx);
    this.beehiveSparkles.forEach((sparkle) => sparkle.drawSparkle(ctx));
    this.speedStrips.forEach((speedStrip) => {
      speedStrip.draw(ctx);
    });
    this.wasps.forEach((wasp) => wasp.draw(ctx));
    if (!this.bee.launched) {
      this.bee.drawTrajectory(ctx);
      this.bee.drawScale(ctx);
    }
    this.bee.drawAnimatedBee(ctx);
    this.pollens.forEach((pollen) => pollen.drawPollen(ctx));
  }

  moveObjects(timeDelta) {
    this.wasps.forEach((wasp) => wasp.move(timeDelta));
    this.bee.move(timeDelta);
  }

  wrap(pos) {
    return [Util.wrap(pos[0], this.xDim), Util.wrap(pos[1], this.yDim)];
  }

  bounce(pos, radius) {
    return [
      Util.bounce(pos[0], this.xDim, radius),
      Util.bounce(pos[1], this.yDim, radius),
    ];
  }

  step(timeDelta) {
    this.moveObjects(timeDelta);
    this.checkCollisions();
    if (!this.bee.launched) this.bee.slideScale();
  }

  allNonBeeObjects() {
    return [].concat(
      this.flowers,
      [this.beehive],
      this.speedStrips,
      this.wasps
    );
  }

  checkCollisions() {
    let allNonBeeObjects = this.allNonBeeObjects();
    this.bee.notPollinate();
    this.speedStrips.forEach((speedStrip) => {
      speedStrip.unpress();
    });
    for (let i = 0; i < allNonBeeObjects.length; i++) {
      const object = allNonBeeObjects[i];

      if (object.isCollidedWith(this.bee)) {
        if (object instanceof Wasp) {
          this.bee.capture();
        }
        if (object instanceof Flower) {
          this.addPoints();
          this.bee.pollinate();
          this.pollens.push(this.addPollens());
        }
        if (object instanceof SpeedStrip) {
          this.bee.accelerate();
          object.press();
        }
        if (object instanceof Beehive && this.bee.landed) {
          this.bee.landOnBeehive();
        }
      }
    }
  }

  addPoints() {
    if (this.bee.caught) this.score = 0;
    if (this.bee.landed && this.beehive.isCollidedWith(this.bee))
      this.score += CONSTANTS.BEEHIVEBONUS;
    if (!this.gameOver()) this.score += CONSTANTS.FLOWERPOINT;
  }

  gameOver() {
    return this.bee.landed || this.bee.caught;
  }

  addWasps() {
    return new Wasp({ pos: this.randomPosition("wasp"), game: this });
  }

  addFlowers() {
    // return new Flower({ pos: this.randomPosition(), game: this });
    let positions = this.flowerPosGenerator();
    positions.forEach((pos) => {
      let newFlower = new Flower({ pos: pos, game: this });
      this.flowers.push(newFlower);
    });
  }

  addPollens() {
    return new Pollen({ game: this });
  }

  addBeehiveSparkles() {
    return new BeehiveSparkle({ game: this });
  }

  addBeehive() {
    return new Beehive({
      pos: [80, this.yDim * 0.5],
      game: this,
    });
  }

  addSpeedStrips() {
    return new SpeedStrip({ pos: this.randomPosition(), game: this });
  }

  addBee() {
    return new Bee({ pos: [80, this.yDim * 0.5], game: this });
  }

  randomPosition(waspFlag) {
    let waspAdj = 0;
    if (waspFlag) {
      waspAdj = CONSTANTS.WASP_LOCATION_ADJ;
    }
    let randomPos = [
      Math.floor(
        Math.random() * ((1 - CONSTANTS.EMPTY_REGION - waspAdj) * this.xDim) +
          (CONSTANTS.EMPTY_REGION + waspAdj) * this.xDim
      ),
      Math.floor(Math.random() * this.yDim),
    ];
    randomPos.forEach((coord, i) => {
      if (coord < CONSTANTS.MIN_EDGE_DISTANCE) {
        randomPos[i] += CONSTANTS.MIN_EDGE_DISTANCE;
      }
      if (
        (i === 0 && coord > this.xDim - CONSTANTS.MIN_EDGE_DISTANCE) ||
        (i === 1 && coord > this.yDim - CONSTANTS.MIN_EDGE_DISTANCE)
      ) {
        {
          randomPos[i] -= CONSTANTS.MIN_EDGE_DISTANCE;
        }
      }
    });
    return randomPos;
  }

  flowerPosGenerator() {
    let positions = [];
    let minDistance = 80;
    while (positions.length < Game.NUM_FLOWERS) {
      let newPos = this.randomPosition();
      let spreadOut = true;
      for (let i = 0; i < positions.length; i++) {
        if (Util.pointDistance(newPos, positions[i]) < minDistance) {
          spreadOut = false;
        }
      }
      if (spreadOut) positions.push(newPos);
    }
    return positions;
  }

  remove(object) {
    if (object instanceof Wasp) {
      this.wasps.splice(this.wasps.indexOf(object), 1);
    }
    if (object instanceof Pollen) {
      this.pollens.splice(this.pollens.indexOf(object), 1);
    }
    if (object instanceof BeehiveSparkle) {
      this.beehiveSparkles.splice(this.beehiveSparkles.indexOf(object), 1);
    }
  }
}

export default Game;
