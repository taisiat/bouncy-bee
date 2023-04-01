// const MovingObject = require("./moving_object.js");
import MovingObject from "./moving_object";
import Game from "./game";
import * as Util from "./util.js";

class Bee extends MovingObject {
  static RADIUS = 40;

  static COLOR = "yellow";
  constructor(options = {}) {
    super(options);
    this.color = Bee.COLOR;
    this.radius = Bee.RADIUS;
    this.vel = Util.randomVec(5);
    this.bounces = true;
    this.background = document.getElementById("bee");
  }
}

// module.exports = Bee;
export default Bee;
