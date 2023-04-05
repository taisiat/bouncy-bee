import MovingObject from "./moving_object";

class Beehive extends MovingObject {
  static RADIUS = 80;
  static COLOR = "white";
  static VEL = [0, 0];
  static POS = [80, 300];
  static BOUNCY = false;
  static SPARKLE_TARGET = 20;

  constructor(options = {}) {
    super();
    this.color = Beehive.COLOR;
    this.radius = Beehive.RADIUS;
    this.vel = Beehive.VEL;
    this.pos = Beehive.POS;
    this.game = options.game;
    this.isBouncy = Beehive.BOUNCY;
    this.background = document.getElementById("beehive");
    this.sparkles = [];
  }

  sparkle() {
    //   if (this.sparkles.length < Beehive.SPARKLE_TARGET) {
    //     let sparkles_count_to_generate = Math.floor(Math.random() * this.sparkles.length)
    //   }
    //   while (sparkles_count_to_generate > 0) {
    //     this.sparkles.push()
    console.log("sparkle");
    //   }
  }

  // addSparkle(){
  //   return new Sparkle({ game: this.game });
  // }
}

export default Beehive;
