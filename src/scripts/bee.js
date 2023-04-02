import MovingObject from "./moving_object";
import Game from "./game";
import * as Util from "./util.js";

const CONSTANTS = {
  NUDGE: 0.05,
  DECEL: 0.999,
  DECELFACTOR: 0.001,
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
    this.vel = Util.randomVec(3);
    // this.vel = Bee.VEL;
    this.isBouncy = Bee.BOUNCY;
    this.background = document.getElementById("bee");
    this.landed = false;
    this.launched = false;
    this.caught = false;
  }

  accelerate() {
    this.vel[0] *= CONSTANTS.ACCEL;
    this.vel[1] *= CONSTANTS.ACCEL;
  }

  decelerate() {
    this.vel.forEach((velocity, i) => {
      if (velocity === 0) {
        this.vel[i] = 0;
      } else if (velocity < 0) {
        this.vel[i] += CONSTANTS.DECELFACTOR;
      } else {
        this.vel[i] -= CONSTANTS.DECELFACTOR;
      }
    });
    if (
      Math.abs(this.vel[0]) + Math.abs(this.vel[1]) <=
      CONSTANTS.DECELFACTOR
    ) {
      this.vel = [0, 0];
      this.landed = true;
    }
  }

  launch() {
    if (key.shift) {
    } // alternate on velocities
  }

  nudge(direction) {
    const nudgeFactor =
      direction === "left" ? CONSTANTS.NUDGE : -CONSTANTS.NUDGE;
    console.log("nudge here");
    const cosA = Math.cos(nudgeFactor);
    const sinA = Math.sin(nudgeFactor);
    const newX = this.vel[0] * cosA + this.vel[1] * sinA;
    const newY = -this.vel[0] * sinA + this.vel[1] * cosA;
    this.vel = [newX, newY];
    console.log(this.vel, "vel");
  }

  capture() {
    this.caught = true;
  }
}

export default Bee;
