import MovingObject from "./moving_object";
import Game from "./game";
import * as Util from "./util.js";

class Bee extends MovingObject {
  static RADIUS = 40;
  static BOUNCY = true;
  static COLOR = "yellow";
  static VEL = [0, 0];
  constructor(options = {}) {
    super(options);
    this.color = Bee.COLOR;
    this.radius = Bee.RADIUS;
    this.vel = Util.randomVec(5);
    // this.vel = Bee.VEL;
    this.isBouncy = Bee.BOUNCY;
    this.background = document.getElementById("bee");
  }

  accelerate(power) {
    this.vel[0] = this.vel[0] * power;
    this.vel[1] = this.vel[1] * power;
  }
}

export default Bee;
