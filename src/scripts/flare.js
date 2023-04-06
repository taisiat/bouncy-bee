import * as Util from "./util.js";

const CONSTANTS = {
  RAND_COLORS_YELLOW: ["#ffff4b", "#ffff01", "#ffffb9", "#ffffff"],
  RAND_COLORS_ALL: [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ],
};

class Flare {
  static RADIUS = 7;
  static PERSISTENCE = 30;
  static DIST = 100;

  constructor(options = {}) {
    let colors = CONSTANTS.RAND_COLORS_ALL;
    let randomColorIdx = Math.floor(Math.random() * CONSTANTS.colors.length);
    this.color = colors[randomColorIdx];
    this.game = options.game;
    this.timer = 0;
    this.pos = this.generatePos();
    this.centerpoint = this.game.bee.pos;
    this.radius = Flare.RADIUS;
    this.persistence = Flare.PERSISTENCE;
    this.distribution = Flare.DIST;
  }

  draw(ctx) {
    if (this.timer > this.radius) {
      this.game.remove(this);
    }
    let points = Util.generateHexagonPoints(this.pos, this.centerpoint);

    ctx.fillStyle = this.color;
    ctx.beginPath();
    points.forEach((pos) => {
      ctx.lineTo(pos[0], pos[1]);
    });
    ctx.closePath();
    ctx.fill();

    this.timer += 1;
  }

  generatePos() {
    let posCorrection = 0;
    return Util.randomPosAroundCenterpoint(
      this.centerpoint,
      this.distribution,
      posCorrection
    );
  }
}

export default Flare;
