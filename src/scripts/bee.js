import MovingObject from "./moving_object";
import Game from "./game";
import * as Util from "./util.js";

const CONSTANTS = {
  NUDGE: 0.1,
  // DECEL: 0.999,
  DECELFACTOR: 0.005,
  ACCEL: 1.03,
  START_SCALE: 1,
  MIN_BEE_LAUNCH_SPEED: 0.25,
  POLLEN_DIST: 50,
  RAND_COLORS: [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ],
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
    this.pollinating = false;
    this.beeFrameL0 = document.getElementById("bee-left-0");
    this.beeFrameL1 = document.getElementById("bee-left-1");
    this.beeFrameL2 = document.getElementById("bee-left-2");
    this.beeFrameL3 = document.getElementById("bee-left-3");
    this.beeFrameR0 = document.getElementById("bee-right-0");
    this.beeFrameR1 = document.getElementById("bee-right-1");
    this.beeFrameR2 = document.getElementById("bee-right-2");
    this.beeFrameR3 = document.getElementById("bee-right-3");
    this.beeFrameU0 = document.getElementById("bee-up-0");
    this.beeFrameU1 = document.getElementById("bee-up-1");
    this.beeFrameU2 = document.getElementById("bee-up-2");
    this.beeFrameU3 = document.getElementById("bee-up-3");
    this.beeFrameD0 = document.getElementById("bee-down-0");
    this.beeFrameD1 = document.getElementById("bee-down-1");
    this.beeFrameD2 = document.getElementById("bee-down-2");
    this.beeFrameD3 = document.getElementById("bee-down-3");

    this.animatedBeeTimer = 0;
    this.pollenTimer = 0;
    this.pollenPosition = [0, 0];
  }

  notPollinate() {
    this.pollinating = false;
  }
  pollinate() {
    this.pollinating = true;
  }

  drawPollen(ctx) {
    if (this.pollenTimer % 10 === 0) {
      this.pollenPosition = this.pollenPos();
    }
    console.log(this.pollenTimer, "timer");
    let randomColorIdx = Math.floor(
      Math.random() * CONSTANTS.RAND_COLORS.length
    );
    // pollenPosition = this.pollenPos();
    ctx.fillStyle = CONSTANTS.RAND_COLORS[randomColorIdx];
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      ctx.lineTo(
        this.pollenPosition[0] + 10 * Math.cos(((2 * Math.PI) / 6) * i),
        this.pollenPosition[1] + 10 * Math.sin(((2 * Math.PI) / 6) * i)
      );
    }
    ctx.closePath();
    ctx.fill();
    this.pollenTimer += 1;
  }

  pollenPos() {
    let pollenPos = [];
    [0, 1].forEach((coord) => {
      coord = Math.floor(
        Math.random() * CONSTANTS.POLLEN_DIST + this.pos[coord] - 15
      );
      pollenPos.push(coord);
    });
    return pollenPos;
  }

  accelerate() {
    this.vel[0] *= CONSTANTS.ACCEL;
    this.vel[1] *= CONSTANTS.ACCEL;
  }

  decelerate() {
    this.vel.forEach((velocity, i) => {
      if (velocity === 0 || Math.abs(velocity) < CONSTANTS.DECELFACTOR) {
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
    // console.log(this.vel, "vel");
  }

  setTrajectory(direction) {
    const nudgeFactor = direction === "up" ? CONSTANTS.NUDGE : -CONSTANTS.NUDGE;
    const cosA = Math.cos(nudgeFactor);
    const sinA = Math.sin(nudgeFactor);
    const newX = Bee.START_VEL[0] * cosA + Bee.START_VEL[1] * sinA;
    const newY = -Bee.START_VEL[0] * sinA + Bee.START_VEL[1] * cosA;
    Bee.START_VEL = [newX, newY];
  }

  drawTrajectory(ctx) {
    let pointerDirection = [
      this.pos[0] + Bee.START_VEL[0] * 15,
      this.pos[1] + Bee.START_VEL[1] * 15,
    ];
    let arrowPoints = Util.calculateTriangleCoord(this.pos, pointerDirection);
    ctx.beginPath();
    ctx.moveTo(pointerDirection[0], pointerDirection[1]);
    ctx.lineTo(arrowPoints[0][0], arrowPoints[0][1]);
    ctx.lineTo(arrowPoints[1][0], arrowPoints[1][1]);
    ctx.closePath();
    ctx.fillStyle = "gold";
    ctx.fill();
  }

  slideScale() {
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
    let slider = 100 * this.slide_factor;
    ctx.fillStyle = "gold";
    ctx.rect(20, 380, Math.floor(slider) * 1.2, 10);
    ctx.fill();
  }

  launch() {
    this.vel = Util.scale(Bee.START_VEL, this.speed);
    this.launched = true;
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

  capture() {
    this.caught = true;
  }

  drawAnimatedBee(ctx) {
    let framesPerAnimation = 3;
    let beeFrame;
    if (Math.abs(this.vel[0]) >= Math.abs(this.vel[1])) {
      if (this.vel[0] >= 0) {
        if (this.animatedBeeTimer <= framesPerAnimation) {
          beeFrame = this.beeFrameR0;
        } else if (
          this.animatedBeeTimer > framesPerAnimation &&
          this.animatedBeeTimer <= 2 * framesPerAnimation
        ) {
          beeFrame = this.beeFrameR1;
        } else if (
          this.animatedBeeTimer > 2 * framesPerAnimation &&
          this.animatedBeeTimer <= 3 * framesPerAnimation
        ) {
          beeFrame = this.beeFrameR2;
        } else if (this.animatedBeeTimer > 3 * framesPerAnimation) {
          beeFrame = this.beeFrameR3;
        }
      } else {
        if (this.animatedBeeTimer <= framesPerAnimation) {
          beeFrame = this.beeFrameL0;
        } else if (
          this.animatedBeeTimer > framesPerAnimation &&
          this.animatedBeeTimer <= 2 * framesPerAnimation
        ) {
          beeFrame = this.beeFrameL1;
        } else if (
          this.animatedBeeTimer > 2 * framesPerAnimation &&
          this.animatedBeeTimer <= 3 * framesPerAnimation
        ) {
          beeFrame = this.beeFrameL2;
        } else if (this.animatedBeeTimer > 3 * framesPerAnimation) {
          beeFrame = this.beeFrameL3;
        }
      }
    } else {
      if (this.vel[1] <= 0) {
        if (this.animatedBeeTimer <= framesPerAnimation) {
          beeFrame = this.beeFrameU0;
        } else if (
          this.animatedBeeTimer > framesPerAnimation &&
          this.animatedBeeTimer <= 2 * framesPerAnimation
        ) {
          beeFrame = this.beeFrameU1;
        } else if (
          this.animatedBeeTimer > 2 * framesPerAnimation &&
          this.animatedBeeTimer <= 3 * framesPerAnimation
        ) {
          beeFrame = this.beeFrameU2;
        } else if (this.animatedBeeTimer > 3 * framesPerAnimation) {
          beeFrame = this.beeFrameU3;
        }
      } else {
        if (this.animatedBeeTimer <= framesPerAnimation) {
          beeFrame = this.beeFrameD0;
        } else if (
          this.animatedBeeTimer > framesPerAnimation &&
          this.animatedBeeTimer <= 2 * framesPerAnimation
        ) {
          beeFrame = this.beeFrameD1;
        } else if (
          this.animatedBeeTimer > 2 * framesPerAnimation &&
          this.animatedBeeTimer <= 3 * framesPerAnimation
        ) {
          beeFrame = this.beeFrameD2;
        } else if (this.animatedBeeTimer > 3 * framesPerAnimation) {
          beeFrame = this.beeFrameD3;
        }
      }
    }

    ctx.drawImage(
      beeFrame,
      this.pos[0] - this.radius,
      this.pos[1] - this.radius - 5,
      this.radius * 2,
      this.radius * 2
    );
    this.animatedBeeTimer =
      (this.animatedBeeTimer + 1) % (4 * framesPerAnimation);
  }
}

export default Bee;
