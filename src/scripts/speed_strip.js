import MovingObject from "./moving_object";

class SpeedStrip extends MovingObject {
  static RADIUS = 30;
  static COLOR = "black";
  static VEL = [0, 0];
  static BOUNCY = false;

  constructor(options = {}) {
    super();
    this.color = SpeedStrip.COLOR;
    this.radius = SpeedStrip.RADIUS;
    this.vel = SpeedStrip.VEL;
    this.pos = options.pos;
    this.game = options.game;
    this.isBouncy = SpeedStrip.BOUNCY;
    this.background = document.getElementById("speedstrip");
  }

  press() {
    this.background = document.getElementById("speedstrip-pressed");
  }

  unpress() {
    this.background = document.getElementById("speedstrip");
  }
}
export default SpeedStrip;
