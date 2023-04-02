import Game from "./game.js";

class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
    // this.bee = this.game.bee;
    this.running = false;
    this.bindKeyHandlers();
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
    // this.bindKeyHandlers();
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
      if (this.game.bee.caught) {
        console.log(this.game.bee.caught, "caught");
        console.log(this.game.bee.landed, "landed");
        this.drawLosePage();
      } else {
        console.log(this.game.bee.caught, "caught");
        console.log(this.game.bee.landed, "landed");

        this.drawWinPage();
      }
      // alert(this.game.score);
      // show score and option to restart
      // this.restart();
    }
  }
  drawScore() {
    const scorePos = [10, 60];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`Score: ${this.game.score}`, scorePos[0], scorePos[1]);
  }

  drawWinPage() {
    console.log("win");
    let message = this.message("win");

    // this.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
    this.ctx.clearRect(0, 0, 1200, 600);
    // const pattern = ctx.createPattern(this.background, "repeat");
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 1200, 600);
    const scorePos = [10, 300];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(
      `${message} Score: ${this.game.score}`,
      scorePos[0],
      scorePos[1]
    );
  }

  drawLosePage() {
    console.log("lose");
    let message = this.message("lose");
    // this.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
    this.ctx.clearRect(0, 0, 1200, 600);
    // const pattern = ctx.createPattern(this.background, "repeat");
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, 1200, 600);
    const scorePos = [10, 300];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(
      `The wasps caught you! ${message}`,
      scorePos[0],
      scorePos[1]
    );
  }
  message(type) {
    const loseMessages = [
      "Bee-tter luck next time!",
      "Looks like you got stung with a loss!",
      "Bee-ginning of success is not here, try again!",
      "Not the bee's knees this time, try harder next time!",
    ];
    const winMessages = [
      "Bee-autiful work!",
      "Buzz-tastic!",
      "Hive five for a job well done!",
      "Buzz-tacular effort!",
    ];
    let messages = type === "win" ? winMessages : loseMessages;
    let idx = Math.floor(Math.random() * messages.length);
    return messages[idx];
  }

  winMessage() {
    const messages = [
      "Bee-autiful work!",
      "Buzz-tastic!",
      "Hive five for a job well done!",
      "Buzz-tacular effort!",
    ];
    let idx = Math.floor(Math.random() * messages.length);
    return messages[idx];
  }
}

export default GameView;
