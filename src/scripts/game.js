import Wasp from "./wasp.js";
import Flower from "./flower.js";
import Bee from "./bee.js";
import Beehive from "./beehive.js";
// import MovingObject from "./moving_object.js";
import SpeedStrip from "./speed_strip";

class Game {
  static DIM_X = 1200;
  static DIM_Y = 600;
  static NUM_WASPS = 4;
  static NUM_FLOWERS = 10;
  static NUM_SPEEDSTRIPS = 2;

  constructor() {
    this.wasps = [];
    this.flowers = [];
    this.speedStrips = [];
    this.bee = this.addBee();
    this.beehive = this.addBeehive();
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

  step() {} //Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.wasps.forEach((wasp) => wasp.draw(ctx));
    this.flowers.forEach((flower) => flower.draw(ctx));
    this.bee.draw(ctx);
    this.beehive.draw(ctx);
    this.speedStrips.forEach((speedStrip) => speedStrip.draw(ctx));
  }

  addWasps() {
    return new Wasp({ pos: this.randomPosition(), game: this });
  }
  addFlowers() {
    return new Flower({ pos: this.randomPosition(), game: this });
  }
  addBee() {
    return new Bee({ pos: [200, 300], game: this });
  }

  addBeehive() {
    return new Beehive({ pos: [100, 300], game: this });
  }

  addSpeedStrips() {
    return new SpeedStrip({ pos: this.randomPosition(), game: this });
  }

  moveObjects() {
    this.wasps.forEach((wasp) => wasp.move());
    this.bee.move();
  }

  randomPosition() {
    let x_pox = Math.floor(Math.random() * Game.DIM_X);
    return [
      x_pox > Game.DIM_X * 0.25 ? x_pox : Game.DIM_X * 0.25,
      Math.floor(Math.random() * Game.DIM_Y),
    ];
  }
}

// module.exports = Game;
export default Game;

//Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
