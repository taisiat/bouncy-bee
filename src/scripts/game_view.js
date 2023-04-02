import Game from "./game.js";

class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
    this.bee = this.game.bee;
    this.running = false;

    this.start();
  }

  // start() {
  //   setInterval(() => {
  //     this.game.step();
  //     this.game.draw(this.ctx);
  //   }, 20);
  // }

  bindKeyHandlers() {
    // if (this.game.bee.launched) {
    key("a", () => {
      this.game.bee.nudge("left");
    });
    key("d", () => {
      this.game.bee.nudge("right");
    });
    // }
    // else {
    //set trajectory and velocity from starting point
    // }
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  restart() {
    this.game = new Game();
    this.running = false;
    this.score = 0;
    this.animate();
    this.bindKeyHandlers();
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.drawScore();
    this.lastTime = time;

    if (!this.game.gameOver()) {
      requestAnimationFrame(this.animate.bind(this));
    } else {
      this.game.addPoints();
      alert(this.game.score); // show score and option to restart
      this.restart();
    }
  }
  drawScore() {
    const scorePos = [10, 60];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`Score: ${this.game.score}`, scorePos[0], scorePos[1]);
  }
}

export default GameView;
