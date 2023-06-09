import * as Util from "./util.js";

const CONSTANTS = {
  RAND_COLORS: ["#ffff4b", "#ffff01", "#ffffb9", "#ffffff"],
  SPARKLE_DIST: 100,
};

class BeehiveSparkle {
  static RADIUS = 7;
  static PERSISTENCE = 30;

  constructor(options = {}) {
    let randomColorIdx = Math.floor(
      Math.random() * CONSTANTS.RAND_COLORS.length
    );
    this.color = CONSTANTS.RAND_COLORS[randomColorIdx];
    this.game = options.game;
    this.sparkleTimer = 0;
    this.sparklePosition = this.sparklePos();
    this.points = Util.generateHexagonPoints(
      this.sparklePosition,
      BeehiveSparkle.RADIUS
    );
  }

  drawSparkle(ctx) {
    if (this.sparkleTimer > BeehiveSparkle.PERSISTENCE) {
      this.game.remove(this);
    }

    ctx.fillStyle = this.color;
    ctx.beginPath();
    this.points.forEach((pos) => {
      ctx.lineTo(pos[0], pos[1]);
    });
    ctx.closePath();
    ctx.fill();

    this.sparkleTimer += 1;
  }

  sparklePos() {
    let posCorrection = 0;
    return Util.randomPosAroundCenterpoint(
      this.game.beehive.pos,
      CONSTANTS.SPARKLE_DIST,
      posCorrection
    );
  }
}

export default BeehiveSparkle;
