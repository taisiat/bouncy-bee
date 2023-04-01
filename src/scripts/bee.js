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

  launch() {
    if (key.shift) {
    } // alternate on velocities
  }

  nudge(direction) {
    const nudgeFactor = direction === "left" ? 0.05 : -0.05;
    const cosA = Math.cos(nudgeFactor);
    const sinA = Math.sin(nudgeFactor);
    const newX = this.vel[0] * cosA + this.vel[1] * sinA;
    const newY = -this.vel[0] * sinA + this.vel[1] * cosA;
    this.vel = [newX, newY];
  }
}

export default Bee;
