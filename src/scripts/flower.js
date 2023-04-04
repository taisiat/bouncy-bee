import MovingObject from "./moving_object";

class Flower extends MovingObject {
  static RADIUS = 40;
  static COLOR = "pink";
  static VEL = [0, 0];
  static BOUNCY = false;

  constructor(options = {}) {
    super();
    this.color = Flower.COLOR;
    this.radius = Flower.RADIUS;
    this.vel = Flower.VEL;
    this.pos = options.pos;
    this.game = options.game;
    this.isBouncy = Flower.BOUNCY;
    this.background = document.getElementById("flower");
    // this.dance = false;
  }

  // dance() {
  //   this.dance = true;
  //   ctx.fillStyle = this.color;
  //   ctx.beginPath();
  //   ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  //   ctx.fill();
  //   // ctx.drawImage(
  //   //   this.background,
  //   //   this.pos[0] - this.radius,
  //   //   this.pos[1] - this.radius,
  //   //   this.radius * 2,
  //   //   this.radius * 2
  //   // );
  // }
}

export default Flower;
