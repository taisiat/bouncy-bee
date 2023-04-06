import MovingObject from "./moving_object.js";
import * as Util from "./util.js";

class Wasp extends MovingObject {
  static RADIUS = 30;
  static BOUNCY = true;
  static SPEED = 0.4;
  static BEE_STING_DISTANCE = 150;
  static FRAME_HEIGHT = 867;
  static FRAME_WIDTH = 776;

  static COLOR = "red";
  constructor(options = {}) {
    super(options);
    this.color = Wasp.COLOR;
    this.radius = Wasp.RADIUS;
    this.vel = Util.randomVec(Wasp.SPEED);
    this.isBouncy = Wasp.BOUNCY;
    this.background = document.getElementById("wasp");
    this.waspFlyLeft = document.getElementById("wasp-left-flying");
    this.waspFlyRight = document.getElementById("wasp-right-flying");
    this.waspStingLeft = document.getElementById("wasp-left-sting");
    this.waspStingRight = document.getElementById("wasp-right-sting");
    this.spriteFrameCounter = 0;
  }

  draw(ctx) {
    let sourcePos = this.pickFrame();
    let sprite = this.pickSprite();

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.drawImage(
      sprite,
      sourcePos[0],
      sourcePos[1],
      Wasp.FRAME_WIDTH,
      Wasp.FRAME_HEIGHT,
      this.pos[0] - this.radius,
      this.pos[1] - this.radius,
      this.radius * 2 + 10,
      this.radius * 2 + 10
    );
  }

  pickSprite() {
    if (this.distanceToBee() <= Wasp.BEE_STING_DISTANCE) {
      if (this.beeToRight()) {
        return this.waspStingRight;
      } else {
        return this.waspStingLeft;
      }
    } else {
      if (this.vel[0] >= 0) {
        return this.waspFlyRight;
      } else {
        return this.waspFlyLeft;
      }
    }
  }

  distanceToBee() {
    let distance = Util.pointDistance(this.game.bee.pos, this.pos);
    return distance;
  }

  beeToRight() {
    let beeX = this.game.bee.pos[0];
    return beeX >= this.pos[0];
  }

  pickFrame() {
    let stepsPerFrame = 3;
    let spriteGridDimension = 4;
    let frameH = 0;
    let frameW = 0;
    let rowAnimationLoop = stepsPerFrame * spriteGridDimension;
    let fullAnimationLoop = stepsPerFrame * spriteGridDimension ** 2;

    let row = Math.floor(this.spriteFrameCounter / rowAnimationLoop);
    frameH = row * Wasp.FRAME_HEIGHT;

    let column = Math.floor(
      (this.spriteFrameCounter % rowAnimationLoop) / stepsPerFrame
    );
    frameW = column * Wasp.FRAME_WIDTH;

    this.spriteFrameCounter = (this.spriteFrameCounter + 1) % fullAnimationLoop;
    return [frameW, frameH];
  }
}

export default Wasp;
