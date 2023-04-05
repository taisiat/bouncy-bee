import MovingObject from "./moving_object.js";
import * as Util from "./util.js";

class Wasp extends MovingObject {
  static RADIUS = 30;
  static BOUNCY = true;
  static SPEED = 0.4;
  static BeeStingDistance = 300;

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
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.drawImage(
      this.pickSprite(),
      this.pos[0] - this.radius,
      this.pos[1] - this.radius,
      this.radius * 2,
      this.radius * 2
    );
  }

  pickSprite() {
    if (this.vel[0] >= 0) {
      if (this.distanceToBee() <= Wasp.BeeStingDistance) {
        return this.waspStingRight;
      } else {
        return this.waspFlyRight;
      }
    } else {
      if (this.distanceToBee() <= Wasp.BeeStingDistance) {
        return this.waspStingLeft;
      } else {
        return this.waspFlyLeft;
      }
    }
  }

  distanceToBee() {
    let beeX = this.game.bee.pos[0];
    let beeY = this.game.bee.pos[1];
    return Math.sqrt((this.pos[0] - beeX) ** 2 + (this.pos[1] - beeY) ** 2);
  }
}

export default Wasp;
