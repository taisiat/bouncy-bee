// const MovingObject = require("./moving_object.js");
import MovingObject from "./moving_object.js";

// import Game from "./game";

import * as Util from "./util.js";

class Wasp extends MovingObject {
  static RADIUS = 40;
  static COLOR = "red";
  constructor(options = {}) {
    super(options);
    this.color = Wasp.COLOR;
    this.radius = Wasp.RADIUS;
    this.vel = Util.randomVec(0.5);
    this.bounces = true;
  }
}

// module.exports = Wasp;
export default Wasp;
