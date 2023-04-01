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
    return this.pos;
  }

  draw(ctx) {
    const pattern = ctx.createPattern(this.background, "repeat");
    ctx.fillStyle = pattern || this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.drawImage(
      this.background,
      this.pos[0] - this.radius,
      this.pos[1] - this.radius
    );
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
