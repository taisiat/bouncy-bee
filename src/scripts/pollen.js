const CONSTANTS = {
  RAND_COLORS: [
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
  POLLEN_DIST: 90,
};

class Pollen {
  static RADIUS = 10;
  static PERSISTENCE = 10;

  constructor(options = {}) {
    let randomColorIdx = Math.floor(
      Math.random() * CONSTANTS.RAND_COLORS.length
    );
    this.color = CONSTANTS.RAND_COLORS[randomColorIdx];
    this.radius = Pollen.RADIUS;
    this.game = options.game;
    this.pollenTimer = 0;
    this.pollenPosition = this.pollenPos();
  }

  drawPollen(ctx) {
    if (this.pollenTimer > Pollen.PERSISTENCE) {
      this.game.remove(this);
    }
    ctx.fillStyle = this.color;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      ctx.lineTo(
        this.pollenPosition[0] +
          this.radius * Math.cos(((2 * Math.PI) / 6) * i),
        this.pollenPosition[1] + this.radius * Math.sin(((2 * Math.PI) / 6) * i)
      );
    }
    ctx.closePath();
    ctx.fill();
    this.pollenTimer += 1;
  }

  pollenPos() {
    let pollenPos = [];
    [0, 1].forEach((coord) => {
      coord = Math.floor(
        Math.random() * CONSTANTS.POLLEN_DIST + this.game.bee.pos[coord] - 43
      );
      pollenPos.push(coord);
    });
    return pollenPos;
  }
}

export default Pollen;
