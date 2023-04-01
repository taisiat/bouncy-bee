import Game from "./game";
import MovingObject from "./moving_object";

class Flower extends MovingObject {
  static RADIUS = 50;
  static COLOR = "pink";
  static VEL = [0, 0];
  static BOUNCY = false;

  constructor(options = {}) {
    super();
    this.color = Flower.COLOR;
    this.radius = Flower.RADIUS;
    this.vel = Flower.VEL;
    this.pos = options.pos;
    this.game = options.game;
    this.isBouncy = Flower.BOUNCY;
    this.background = document.getElementById("flower");
  }
}

// module.exports = Flower;
export default Flower;
