import Wasp from "./wasp.js";
import Flower from "./flower.js";
import Bee from "./bee.js";
import Beehive from "./beehive.js";
import SpeedStrip from "./speed_strip";
import * as Util from "./util.js";

class Game {
  static DIM_X = 1200;
  static DIM_Y = 600;
  //   static FPS = 32;

  static NUM_WASPS = 3;
  static NUM_FLOWERS = 10;
  static NUM_SPEEDSTRIPS = 1;

  constructor() {
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
    this.bee.draw(ctx);
  }
  moveObjects(delta) {
    this.wasps.forEach((wasp) => wasp.move(delta));
    this.bee.move(delta);
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

  // isAtEdge(pos, radius) {
  //   let xPos = pos[0];
  //   let yPos = pos[1];
  //   return (
  //     xPos === radius ||
  //     yPos === radius ||
  //     xPos === Game.DIM_X - radius ||
  //     yPos === Game.DIM_Y - radius
  //   );
  // }

  step() {
    this.moveObjects();
    this.checkCollisions();
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
          this.gameOver();
        }
        if (object instanceof Flower) {
          this.addPoints();
        }
        if (object instanceof SpeedStrip) {
          this.bee.accelerate();
        }
        if (object instanceof Beehive) {
          console.log("nothing interesting");
        }
      }
    }
  }

  gameOver() {
    console.log("game over");
  }

  addPoints() {
    console.log("points!");
  }

  addWasps() {
    return new Wasp({ pos: this.randomPosition(), game: this });
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
  randomPosition() {
    return [
      Math.floor(Math.random() * (0.75 * Game.DIM_X) + 0.25 * Game.DIM_X),
      Math.floor(Math.random() * Game.DIM_Y),
    ];
  }

  remove(object) {
    if (object instanceof Wasp) {
      this.wasps.splice(this.wasps.indexOf(object), 1);
    }
  }
}

export default Game;
