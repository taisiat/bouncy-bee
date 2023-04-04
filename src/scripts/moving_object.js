import * as Util from "./util.js";

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {
  constructor(options = {}) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.isBouncy = options.isBouncy;
    this.background = options.background;
  }

  move() {
    // const velocityScale =
    //     timeDelta || NORMAL_FRAME_TIME_DELTA / NORMAL_FRAME_TIME_DELTA,
    //   offsetX = this.vel[0] * velocityScale,
    //   offsetY = this.vel[1] * velocityScale;

    // this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    // let newPos = this.pos;
    let newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.isBouncy) {
      let bouncedPos = this.game.bounce(newPos, this.radius);
      if (bouncedPos[0] !== newPos[0]) {
        this.vel[0] = -this.vel[0];
      }
      if (bouncedPos[1] !== newPos[1]) {
        this.vel[1] = -this.vel[1];
      }
      this.pos = bouncedPos;
    } else {
      this.pos = this.game.wrap(newPos);
    }
    if (this instanceof Bee) {
      this.decelerate();
    }
    return this.pos;
  }

  draw(ctx) {
    // const pattern = ctx.createPattern(this.background, "repeat");
    // ctx.fillStyle = pattern || this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.drawImage(
      this.background,
      this.pos[0] - this.radius,
      this.pos[1] - this.radius,
      this.radius * 2,
      this.radius * 2
    );
    // if (this instanceof Flower && this.dance) {
    //   ctx.lineWidth = 5;
    //   ctx.strokeStyle = "black";
    //   ctx.stroke();
    // }
  }

  isCollidedWith(otherObject) {
    let x1 = this.pos[0];
    let y1 = this.pos[1];
    let x2 = otherObject.pos[0];
    let y2 = otherObject.pos[1];
    let collisionDistance = this.radius + otherObject.radius;

    let actualDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return collisionDistance >= actualDistance;
  }

  collideWith(otherObject) {}

  remove() {
    this.game.remove(this);
  }
}

export default MovingObject;
