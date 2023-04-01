// Base class for anything that moves.
// import Game from "./game.js";
import * as Util from "./util.js";

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {
  constructor(options = {}) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    // this.isWrappable = true;
    this.isBouncy = options.isBouncy;
    this.background = options.background;
  }

  move() {
    let newPos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.isBouncy) {
      let bouncedPos = this.game.bounce(newPos, this.radius);
      //   if (bouncedPos[0] !== newPos[0] || bouncedPos[1] !== newPos[1]) {
      if (bouncedPos[0] !== newPos[0]) {
        this.vel[0] = -this.vel[0];
      }
      if (bouncedPos[1] !== newPos[1]) {
        this.vel[1] = -this.vel[1];
      }
      // this.vel = [-this.vel[0], -this.vel[1]];
      // this.vel = [5, 5];
      //     this.vel = [
      //       bouncedPos[0] - newPos[0] || this.vel[0],
      //       bouncedPos[1] - newPos[1] || this.vel[1],
      //     ];
      //   }
      this.pos = bouncedPos;
    } else {
      this.pos = this.game.wrap(newPos);
    }
    // this.pos = newPos;
    // this.pos = this.game.wrap(newPos);
    // return this.pos;

    // const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
    //   offsetX = this.vel[0] * velocityScale,
    //   offsetY = this.vel[1] * velocityScale;

    // this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    // if (this.game.isAtEdge(newPos, this.radius)) {
    //   if (this.bounces) {
    //     // return (this.pos = this.game.wrap(this.pos));
    //     this.pos = [300, 300];
    //   } else {
    //     this.remove();
    //   }
    // } else {
    //   this.pos = this.game.wrap(newPos);
    //   //   this.pos = newPos;
    //   //   return this.pos;
    // }
    return this.pos;
  }

  draw(ctx) {
    const pattern = ctx.createPattern(this.background, "repeat");
    ctx.fillStyle = pattern || this.color;
    // ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.fill();
  }

  isCollidedWith(otherMovingObject) {
    let x1 = this.pos[0];
    let y1 = this.pos[1];
    let x2 = otherObject.pos[0];
    let y2 = otherObject.pos[1];
    let rad = this.radius + otherObject.radius;

    let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return rad >= dist;
  }

  collideWith(otherObject) {}

  remove() {
    this.game.remove(this);
  }
}

// module.exports = MovingObject;
export default MovingObject;
