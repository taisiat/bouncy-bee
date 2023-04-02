import Game from "./game.js";

class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
    this.bee = this.game.bee;
    // this.lastTime = 0;
  }

  start() {
    setInterval(() => {
      this.game.step();
      this.game.draw(this.ctx);
    }, 20);
  }

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

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

export default GameView;
