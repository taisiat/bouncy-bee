import Wasp from "./wasp.js";
import Flower from "./flower.js";
import Bee from "./bee.js";
import Beehive from "./beehive.js";
import SpeedStrip from "./speed_strip";
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

  static NUM_WASPS = 3;
  static NUM_FLOWERS = 10;
  static NUM_SPEEDSTRIPS = 1;

  constructor() {
    this.score = 0;
    this.wasps = [];
    this.flowers = [];
    this.speedStrips = [];
    this.bee = this.addBee();
    this.beehive = this.addBeehive();
    this.background = document.getElementById("grass");
    while (this.wasps.length < Game.NUM_WASPS) {
      this.wasps.push(this.addWasps());
    }
    while (this.flowers.length < Game.NUM_FLOWERS) {
      this.flowers.push(this.addFlowers());
    }
    while (this.speedStrips.length < Game.NUM_SPEEDSTRIPS) {
      this.speedStrips.push(this.addSpeedStrips());
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    const pattern = ctx.createPattern(this.background, "repeat");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.flowers.forEach((flower) => flower.draw(ctx));
    this.beehive.draw(ctx);
    this.speedStrips.forEach((speedStrip) => speedStrip.draw(ctx));
    this.wasps.forEach((wasp) => wasp.draw(ctx));
    // this.bee.draw(ctx);
    if (!this.bee.launched) {
      this.bee.drawTrajectory(ctx);
      this.bee.drawScale(ctx);
    }
    this.bee.drawAnimatedBee(ctx);
  }
  moveObjects() {
    this.wasps.forEach((wasp) => wasp.move());
    this.bee.move();
  }

  wrap(pos) {
    return [Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)];
  }

  bounce(pos, radius) {
    return [
      Util.bounce(pos[0], Game.DIM_X, radius),
      Util.bounce(pos[1], Game.DIM_Y, radius),
    ];
  }

  step() {
    this.moveObjects();
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
    for (let i = 0; i < allNonBeeObjects.length; i++) {
      const object = allNonBeeObjects[i];

      if (object.isCollidedWith(this.bee)) {
        if (object instanceof Wasp) {
          this.bee.capture();
        }
        if (object instanceof Flower) {
          this.addPoints();
        }
        if (object instanceof SpeedStrip) {
          this.bee.accelerate();
        }
        if (object instanceof Beehive) {
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

  setBeeTrajectory() {}

  addWasps() {
    return new Wasp({ pos: this.randomPosition("wasp"), game: this });
  }
  addFlowers() {
    return new Flower({ pos: this.randomPosition(), game: this });
  }

  addBeehive() {
    return new Beehive({
      pos: [80, Game.DIM_Y * 0.5],
      game: this,
    });
  }

  addSpeedStrips() {
    return new SpeedStrip({ pos: this.randomPosition(), game: this });
  }

  addBee() {
    return new Bee({ pos: [80, Game.DIM_Y * 0.5], game: this });
  }
  randomPosition(waspFlag) {
    let waspAdj = 0;
    if (waspFlag) {
      waspAdj = CONSTANTS.WASP_LOCATION_ADJ;
    }
    let randomPos = [
      Math.floor(
        Math.random() * ((1 - CONSTANTS.EMPTY_REGION - waspAdj) * Game.DIM_X) +
          (CONSTANTS.EMPTY_REGION + waspAdj) * Game.DIM_X
      ),
      Math.floor(Math.random() * Game.DIM_Y),
    ];
    randomPos.forEach((coord, i) => {
      if (coord < CONSTANTS.MIN_EDGE_DISTANCE) {
        randomPos[i] += CONSTANTS.MIN_EDGE_DISTANCE;
      }
      if (
        (i === 0 && coord > Game.DIM_X - CONSTANTS.MIN_EDGE_DISTANCE) ||
        (i === 1 && coord > Game.DIM_Y - CONSTANTS.MIN_EDGE_DISTANCE)
      ) {
        {
          randomPos[i] -= CONSTANTS.MIN_EDGE_DISTANCE;
        }
      }
    });
    return randomPos;
  }

  remove(object) {
    if (object instanceof Wasp) {
      this.wasps.splice(this.wasps.indexOf(object), 1);
    }
  }
}

export default Game;
