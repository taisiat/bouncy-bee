import Game from "./game.js";

class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
    this.bee = this.game.bee;
    this.running = false;
    this.restart();
  }

  // start() {
  //   setInterval(() => {
  //     this.game.step();
  //     this.game.draw(this.ctx);
  //   }, 20);
  // }

  bindKeyHandlers() {
    key("a", () => {
      this.bee.nudge("left");
    });
    key("d", () => {
      this.bee.nudge("right");
    });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.game = new Game();

    this.animate();
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.drawScore();
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
  drawScore() {
    const scorePos = [10, 60];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`Score: ${this.game.score}`, scorePos[0], scorePos[1]);
  }
}

export default GameView;
