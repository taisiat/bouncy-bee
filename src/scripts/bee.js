import MovingObject from "./moving_object";
import Game from "./game";
import * as Util from "./util.js";

const CONSTANTS = {
  NUDGE: 0.05,
  DECEL: 0.999,
  DECELFACTOR: 0.001,
  ACCEL: 1.05,
  START_SCALE: 1,
  // LANDVEL: 0.05,
};

class Bee extends MovingObject {
  static RADIUS = 40;
  static BOUNCY = true;
  static COLOR = "yellow";
  static START_VEL = [1, 1];
  static VEL = [0, 0];
  constructor(options = {}) {
    super(options);
    this.slide_factor = 0;
    this.speed = 0;
    this.color = Bee.COLOR;
    this.radius = Bee.RADIUS;
    // this.vel = Util.randomVec(3);
    this.vel = Bee.VEL;
    this.isBouncy = Bee.BOUNCY;
    this.background = document.getElementById("bee");
    this.landed = false;
    this.launched = false;
    this.caught = false;
    // this.slideScale();
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
      Math.abs(this.vel[0]) + Math.abs(this.vel[1]) <= CONSTANTS.DECELFACTOR &&
      this.launched
    ) {
      this.vel = [0, 0];
      this.landed = true;
    }
  }

  setTrajectory(direction) {
    const nudgeFactor = direction === "up" ? CONSTANTS.NUDGE : -CONSTANTS.NUDGE;
    const cosA = Math.cos(nudgeFactor);
    const sinA = Math.sin(nudgeFactor);
    const newX = Bee.START_VEL[0] * cosA + Bee.START_VEL[1] * sinA;
    const newY = -Bee.START_VEL[0] * sinA + Bee.START_VEL[1] * cosA;
    Bee.START_VEL = [newX, newY];
    // console.log(Bee.START_VEL, "start vel");
    // this.drawTrajectory();
  }

  drawTrajectory(ctx) {
    // const pattern = ctx.createPattern(this.background, "repeat");
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(
      this.pos[0] + Bee.START_VEL[0] * 50,
      this.pos[1] + Bee.START_VEL[1] * 50,
      10,
      0,
      2 * Math.PI,
      true
    );
    ctx.fill();
    //triangle
    // ctx.beginPath();
    // ctx.moveTo(
    //   this.pos[0] + Bee.START_VEL[0] * 50,
    //   this.pos[1] + Bee.START_VEL[1] * 50
    // );
    // ctx.lineTo(
    //   this.pos[0] + Bee.START_VEL[0] * 50 + 5,
    //   this.pos[1] + Bee.START_VEL[1] * 50 + 5
    // );
    // ctx.lineTo(
    //   this.pos[0] + Bee.START_VEL[0] * 50 - 15,
    //   this.pos[1] + Bee.START_VEL[1] * 50 - 15
    // );
    // ctx.fill();
  }

  slideScale() {
    if (this.slide_factor === 1) {
      this.slide_factor = 0;
    }
    this.slide_factor += 0.01;
    this.speed = CONSTANTS.START_SCALE * this.slide_factor;
  }

  launch() {
    this.vel = Util.scale(Bee.START_VEL, this.speed);
    console.log(
      Bee.START_VEL,
      "vel",
      this.speed,
      "speed",
      this.vel,
      "vel final"
    );
    this.launched = true;
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
