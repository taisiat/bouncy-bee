import MovingObject from "./moving_object";

class Beehive extends MovingObject {
  static RADIUS = 80;
  static COLOR = "white";
  static VEL = [0, 0];
  static POS = [80, 300];
  static BOUNCY = false;

  constructor(options = {}) {
    super();
    this.color = Beehive.COLOR;
    this.radius = Beehive.RADIUS;
    this.vel = Beehive.VEL;
    this.pos = Beehive.POS;
    this.game = options.game;
    this.isBouncy = Beehive.BOUNCY;
    this.background = document.getElementById("beehive");
  }
}

export default Beehive;
