import Game from "./game";

import MovingObject from "./moving_object";

class SpeedStrip extends MovingObject {
  static RADIUS = 30;
  static COLOR = "black";
  static VEL = [0, 0];
  constructor(options = {}) {
    super();
    this.color = SpeedStrip.COLOR;
    this.radius = SpeedStrip.RADIUS;
    this.vel = SpeedStrip.VEL;
    this.pos = options.pos;
    this.game = options.game;
    this.bounces = false;
    this.background = document.getElementById("speedstrip");
  }
}
// module.exports = SpeedStrip;
export default SpeedStrip;
