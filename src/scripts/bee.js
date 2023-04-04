import MovingObject from "./moving_object";
import Game from "./game";
import * as Util from "./util.js";

const CONSTANTS = {
  NUDGE: 0.1,
  // DECEL: 0.999,
  DECELFACTOR: 0.005,
  ACCEL: 1.05,
  START_SCALE: 1,
  MIN_BEE_LAUNCH_SPEED: 0.25,
};

class Bee extends MovingObject {
  static RADIUS = 40;
  static BOUNCY = true;
  static COLOR = "yellow";
  static START_VEL = [5, 5];
  static VEL = [0, 0];
  constructor(options = {}) {
    super(options);
    this.slide_factor = 0;
    this.slider_increase = true;
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
    this.beeFrame0 = document.getElementById("bee_left_0");
    this.beeFrame1 = document.getElementById("bee_left_1");

    this.animatedBeeTimer = 0;
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
  }

  drawTrajectory(ctx) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(
      this.pos[0] + Bee.START_VEL[0] * 10,
      this.pos[1] + Bee.START_VEL[1] * 10,
      10,
      0,
      2 * Math.PI,
      true
    );
    ctx.fill();
    // triangle
    // let pointerDirection = [
    //   this.pos[0] + Bee.START_VEL[0] * 50,
    //   this.pos[1] + Bee.START_VEL[1] * 50,
    // ];
    // let arrowPoints = Util.calculateTriangleCoord(this.pos, pointerDirection);
    // ctx.beginPath();
    // console.log(pointerDirection[0], pointerDirection[1], "point1");
    // ctx.moveTo(pointerDirection[0], pointerDirection[1]);
    // console.log(arrowPoints[0], arrowPoints[1], "point2");

    // ctx.moveTo(arrowPoints[0], arrowPoints[1]);
    // // ctx.lineTo(100, 100);
    // // ctx.lineTo(arrowPoints[1][0], arrowPoints[1][1]);
    // arrowPoints[0], arrowPoints[1];
    // ctx.lineTo(100, 100);
    // ctx.closePath();
    // ctx.fillStyle = "red";

    // ctx.fill();
  }

  slideScale() {
    // if (this.slide_factor > 1) {
    //   this.slide_factor = 0;
    // }
    // this.slide_factor += 0.01;
    // console.log(this.speed, "speed raw");
    // this.speed = CONSTANTS.START_SCALE * this.slide_factor;
    if (this.slide_factor > 1) {
      this.slider_increase = false;
    }
    if (this.slide_factor < 0) {
      this.slider_increase = true;
    }
    if (this.slider_increase) {
      this.slide_factor += 0.01;
    } else {
      this.slide_factor -= 0.01;
    }
    this.speed =
      CONSTANTS.START_SCALE * this.slide_factor +
      CONSTANTS.MIN_BEE_LAUNCH_SPEED;
  }

  drawScale(ctx) {
    // ctx.clearRect(30, 380, 100, 10);
    // ctx.fillStyle = "yellow";
    // ctx.rect(30, 380, 100, 10);
    // ctx.fill();
    let slider = 100 * this.slide_factor;
    ctx.fillStyle = "green";
    ctx.rect(20, 380, Math.floor(slider) * 1.2, 10);
    // ctx.rect(30, 380, 50, 10);
    console.log(slider, "slider");
    ctx.fill();
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

  drawAnimatedBee(ctx) {
    let framesPerAnimation = 10;
    let beeFrame;
    if (this.animatedBeeTimer <= framesPerAnimation) {
      beeFrame = this.beeFrame0;
    } else if (
      this.animatedBeeTimer > framesPerAnimation &&
      this.animatedBeeTimer <= 2 * framesPerAnimation
    ) {
      beeFrame = this.beeFrame1;
    }
    // let beeFrame = `beeFrame${frameNum}`;
    // let beeFrame = `this.beeFrame${frameNum}`;

    ctx.drawImage(
      // Bee[beeFrame],
      beeFrame,
      this.pos[0] - this.radius,
      this.pos[1] - this.radius,
      this.radius * 2,
      this.radius * 2
    );
    this.animatedBeeTimer = (this.animatedBeeTimer + 1) % 20;
  }
}

export default Bee;
