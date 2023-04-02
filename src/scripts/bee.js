import MovingObject from "./moving_object";
import Game from "./game";
import * as Util from "./util.js";

const CONSTANTS = {
  NUDGE: 0.05,
  DECEL: 0.999,
  DECELFACTOR: 1,
  ACCEL: 1.05,
  LANDVEL: 0.05,
};

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

  accelerate() {
    this.vel[0] = this.vel[0] * CONSTANTS.ACCEL;
    this.vel[1] = this.vel[1] * CONSTANTS.ACCEL;
  }

  decelerate() {
    // this.vel[0] *= CONSTANTS.DECEL;
    // this.vel[1] *= CONSTANTS.DECEL;
    if (this.vel[0] < 0) {
      this.vel[0] += 0.01;
    } else {
      this.vel[0] -= 0.01;
    }
    if (this.vel[1] < 0) {
      this.vel[0] += 0.01;
    } else {
      this.vel[1] -= 0.01;
    }
    if (
      Math.abs(this.vel[0]) < CONSTANTS.LANDVEL &&
      Math.abs(this.vel[1]) < CONSTANTS.LANDVEL
    )
      alert("end of motion");
  }

  launch() {
    if (key.shift) {
    } // alternate on velocities
  }

  nudge(direction) {
    const nudgeFactor =
      direction === "left" ? CONSTANTS.NUDGE : -CONSTANTS.NUDGE;
    const cosA = Math.cos(nudgeFactor);
    const sinA = Math.sin(nudgeFactor);
    const newX = this.vel[0] * cosA + this.vel[1] * sinA;
    const newY = -this.vel[0] * sinA + this.vel[1] * cosA;
    this.vel = [newX, newY];
  }
}

export default Bee;
