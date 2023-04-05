const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
import * as Util from "./util.js";

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

  move(timeDelta) {
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = this.vel[0] * velocityScale,
      offsetY = this.vel[1] * velocityScale;
    let newPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

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
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.drawImage(
      this.background,
      this.pos[0] - this.radius,
      this.pos[1] - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  }

  isCollidedWith(otherObject) {
    let collisionDistance = this.radius + otherObject.radius;
    let actualDistance = Util.pointDistance(this.pos, otherObject.pos);
    return collisionDistance >= actualDistance;
  }

  remove() {
    this.game.remove(this);
  }
}

export default MovingObject;
