import MovingObject from "./moving_object";
import * as Util from "./util.js";

const CONSTANTS = {
  NUDGE: 0.2,
  DECELFACTOR: 0.007,
  ACCEL: 1.03,
  START_SCALE: 1,
  MIN_BEE_LAUNCH_SPEED: 0.75,
  RETURN_TO_HIVE_VEL: 4,
  MAX_VEL: 15,
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
    this.vel = Bee.VEL;
    this.isBouncy = Bee.BOUNCY;
    this.radius = Bee.RADIUS;
    this.landed = false;
    this.launched = false;
    this.caught = false;
    this.beehiveLand = false;
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
    this.beeLeftFrames = [
      this.beeFrameL0,
      this.beeFrameL1,
      this.beeFrameL2,
      this.beeFrameL3,
    ];
    this.beeRightFrames = [
      this.beeFrameR0,
      this.beeFrameR1,
      this.beeFrameR2,
      this.beeFrameR3,
    ];
    this.beeUpFrames = [
      this.beeFrameU0,
      this.beeFrameU1,
      this.beeFrameU2,
      this.beeFrameU3,
    ];
    this.beeDownFrames = [
      this.beeFrameD0,
      this.beeFrameD1,
      this.beeFrameD2,
      this.beeFrameD3,
    ];

    this.animatedBeeTimer = 0;
    this.framesPerAnimation = 3;

    this.directions = {
      UP: "up",
      DOWN: "down",
      LEFT: "left",
      RIGHT: "right",
    };
  }

  landOnBeehive() {
    this.beehiveLand = true;
  }

  notLandOnBeehive() {
    this.beehiveLand = false;
  }

  notPollinate() {
    this.pollinating = false;
  }
  pollinate() {
    this.pollinating = true;
  }

  accelerate() {
    let largerVel =
      Math.abs(this.vel[0]) >= Math.abs(this.vel[1])
        ? this.vel[0]
        : this.vel[1];

    if (Math.abs(largerVel) * CONSTANTS.ACCEL > CONSTANTS.MAX_VEL) {
      let scaleFactor = CONSTANTS.MAX_VEL / Math.abs(largerVel);
      if (largerVel === this.vel[0]) {
        this.vel[0] = this.vel[0] > 0 ? CONSTANTS.MAX_VEL : -CONSTANTS.MAX_VEL;
        this.vel[1] *= scaleFactor;
      } else {
        this.vel[1] = this.vel[1] > 0 ? CONSTANTS.MAX_VEL : -CONSTANTS.MAX_VEL;
        this.vel[0] *= scaleFactor;
      }
    } else {
      this.vel[0] *= CONSTANTS.ACCEL;
      this.vel[1] *= CONSTANTS.ACCEL;
    }
    this.game.speedStrips.forEach((speedStrip) => {
      speedStrip.press();
    });
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
    if (
      Math.abs(this.vel[0]) + Math.abs(this.vel[1]) <=
        CONSTANTS.RETURN_TO_HIVE_VEL &&
      this.launched
    ) {
      this.game.beehiveSparkles.push(this.game.addBeehiveSparkles());
    }
  }

  setTrajectory(direction) {
    let nudgeFactor = 0;
    if (direction === this.directions.UP) {
      nudgeFactor = CONSTANTS.NUDGE;
    } else if (direction === this.directions.DOWN) {
      nudgeFactor = -CONSTANTS.NUDGE;
    }
    const cosA = Math.cos(nudgeFactor);
    const sinA = Math.sin(nudgeFactor);
    const newX = Bee.START_VEL[0] * cosA + Bee.START_VEL[1] * sinA;
    const newY = -Bee.START_VEL[0] * sinA + Bee.START_VEL[1] * cosA;
    Bee.START_VEL = [newX, newY];
  }

  drawTrajectory(ctx) {
    let pointerDist = 15;
    let pointerDirection = [
      this.pos[0] + Bee.START_VEL[0] * pointerDist,
      this.pos[1] + Bee.START_VEL[1] * pointerDist,
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
    let slideStep = 0.01;
    if (this.slide_factor > 1) {
      this.slider_increase = false;
    }
    if (this.slide_factor < 0) {
      this.slider_increase = true;
    }
    if (this.slider_increase) {
      this.slide_factor += slideStep;
    } else {
      this.slide_factor -= slideStep;
    }
    this.speed =
      CONSTANTS.START_SCALE * this.slide_factor +
      CONSTANTS.MIN_BEE_LAUNCH_SPEED;
  }

  drawScale(ctx) {
    let slider = 100 * this.slide_factor;
    ctx.fillStyle = "gold";
    let sliderLocation = [20, 380];
    let sliderSizeScale = 1.2;
    let sliderH = 10;
    ctx.rect(
      sliderLocation[0],
      sliderLocation[1],
      Math.floor(slider) * sliderSizeScale,
      sliderH
    );
    ctx.fill();
  }

  launch() {
    this.vel = Util.scale(Bee.START_VEL, this.speed);
    this.launched = true;
  }

  nudge(direction) {
    let nudgeFactor = 0;
    if (direction === this.directions.LEFT) {
      nudgeFactor = CONSTANTS.NUDGE;
    } else if (direction === this.directions.RIGHT) {
      nudgeFactor = -CONSTANTS.NUDGE;
    }
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
    let offset = 5;
    ctx.drawImage(
      this.pickFrame(),
      this.pos[0] - Bee.RADIUS,
      this.pos[1] - Bee.RADIUS - offset,
      Bee.RADIUS * 2,
      Bee.RADIUS * 2
    );
    this.animatedBeeTimer =
      (this.animatedBeeTimer + 1) %
      (this.beeRightFrames.length * this.framesPerAnimation);
  }

  pickFrame() {
    let animationSequence = this.beeRightFrames;
    let beeFrameIdx = Math.floor(
      this.animatedBeeTimer / this.framesPerAnimation
    );
    let beeDirection = this.beeDirection();
    let mapping = {
      right: this.beeRightFrames,
      left: this.beeLeftFrames,
      up: this.beeUpFrames,
      down: this.beeDownFrames,
    };
    animationSequence = mapping[beeDirection];

    return animationSequence[beeFrameIdx];
  }

  beeDirection() {
    let velocityPreLaunch = this.launched ? this.vel : Bee.START_VEL;

    if (Math.abs(velocityPreLaunch[0]) >= Math.abs(velocityPreLaunch[1])) {
      if (velocityPreLaunch[0] >= 0) {
        return this.directions.RIGHT;
      } else {
        return this.directions.LEFT;
      }
    } else {
      if (velocityPreLaunch[1] <= 0) {
        return this.directions.UP;
      } else {
        return this.directions.DOWN;
      }
    }
  }
}

export default Bee;
