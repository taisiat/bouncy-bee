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
    this.radius = BeehiveSparkle.RADIUS;
    this.game = options.game;
    this.sparkleTimer = 0;
    this.sparklePosition = this.sparklePos();
  }

  drawSparkle(ctx) {
    if (this.sparkleTimer > BeehiveSparkle.PERSISTENCE) {
      this.game.remove(this);
    }
    ctx.fillStyle = this.color;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      ctx.lineTo(
        this.sparklePosition[0] +
          this.radius * Math.cos(((2 * Math.PI) / 6) * i),
        this.sparklePosition[1] +
          this.radius * Math.sin(((2 * Math.PI) / 6) * i)
      );
    }
    ctx.closePath();
    ctx.fill();
    this.sparkleTimer += 1;
  }

  sparklePos() {
    let sparklePos = [];
    let posRadius = CONSTANTS.SPARKLE_DIST * Math.sqrt(Math.random());
    let theta = Math.random() * 2 * Math.PI;
    sparklePos.push(
      this.game.beehive.pos[0] + posRadius * Math.cos(theta),
      this.game.beehive.pos[1] + posRadius * Math.sin(theta)
    );
    return sparklePos;
  }
}

export default BeehiveSparkle;
