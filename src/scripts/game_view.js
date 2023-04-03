import Game from "./game.js";

class GameView {
  constructor(ctx) {
    // this.game = new Game();
    this.ctx = ctx;
    // this.dimensions = { width: 1200, height: 600 };
    // this.bee = this.game.bee;
    // this.running = false;
    this.highScore = 0;
    this.bindKeyHandlers();
    // this.restart();
    // this.drawInstructions();
  }

  bindKeyHandlers() {
    key("i", () => {
      this.pause();
      this.drawInstructions();
    });
    key("o", () => {
      this.play();
    });
    key("w", () => {
      this.game.bee.setTrajectory("up");
    });
    key("s", () => {
      this.game.bee.setTrajectory("down");
    });
    key("x", () => {
      this.game.bee.launch();
    });
    key("space", () => {
      this.restart();
    });
    key("a", () => {
      this.game.bee.nudge("left");
    });
    key("d", () => {
      this.game.bee.nudge("right");
    });
    // if (this.game.bee.launched) {
    //   key("a", () => {
    //     this.game.bee.nudge("left");
    //   });
    //   key("d", () => {
    //     this.game.bee.nudge("right");
    //   });
    // } else {
    //   // set trajectory and velocity from starting point
    // }
  }

  restart() {
    // this.bindKeyHandlers();
    this.running = false;
    this.score = 0;
    this.lastTime = 0;
    this.game = new Game();
    // requestAnimationFrame(this.animate.bind(this));
    // this.animate(this.lastTime);
    this.play(this.lastTime);
  }

  play(time) {
    this.running = true;
    this.animate(time);
  }

  pause() {
    this.running = false;
    this.animate();
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.drawScore();
    this.lastTime = time;

    if (!this.running) {
      this.drawInstructions();
    } else if (!this.game.gameOver()) {
      requestAnimationFrame(this.animate.bind(this));
    } else {
      if (this.game.bee.caught) {
        // console.log(this.game.bee.caught, "caught");
        // console.log(this.game.bee.landed, "landed");
        this.tallyPoints();
        this.drawLosePage();
      } else {
        // console.log(this.game.bee.caught, "caught");
        // console.log(this.game.bee.landed, "landed");
        this.tallyPoints();

        this.drawWinPage();
      }
    }
  }

  tallyPoints() {
    this.game.addPoints();
    this.highScore = Math.max(this.highScore, this.game.score);
    document.getElementById(
      "score-banner"
    ).innerHTML = `Your top score: ${this.highScore}`;
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
    const messagePos = [10, 300];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(
      `${message} Score: ${this.game.score}`,
      messagePos[0],
      messagePos[1]
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
    const messagePos = [10, 300];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(
      `The wasps caught you! ${message}`,
      messagePos[0],
      messagePos[1]
    );
  }
  message(type) {
    const loseMessages = [
      "Bee-tter luck next time!",
      "Looks like you got stung with a loss!",
      "Bee-ginning of success is not here, try again!",
      "Not the bee's knees this time, try harder next time!",
      "Sorry, you didn't make the buzz this time.",
      "You got swatted like a fly and lost!",
    ];
    const winMessages = [
      "Bee-autiful work!",
      "Buzzing with excitement, you're the winner!",
      "You really earned your stripes like a bee and won!",
      "You're as busy as a bee and just as successful!",
      "Buzz-tastic!",
      "Hive five for a job well done!",
      "Buzz-tacular effort!",
    ];
    let messages = type === "win" ? winMessages : loseMessages;
    let idx = Math.floor(Math.random() * messages.length);
    return messages[idx];
  }

  drawInstructions() {
    console.log("instructions");

    // this.ctx.clearRect(0, 0, this.game.DIM_X, this.game.DIM_Y);
    this.ctx.clearRect(0, 0, 1200, 600);
    // const pattern = ctx.createPattern(this.background, "repeat");
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(0, 0, 1200, 600);
    const messagePos = [10, 100];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(
      `Help Bouncy Bee collect the most nectar!`,
      messagePos[0],
      messagePos[1]
    );
    this.ctx.fillText(`Objectives:`, messagePos[0] + 100, messagePos[1] + 100);
    this.ctx.fillText(
      `Visit the most flowers!`,
      messagePos[0] + 100,
      messagePos[1] + 200
    );
    this.ctx.fillText(
      `Avoid the wasps!`,
      messagePos[0] + 100,
      messagePos[1] + 300
    );
    this.ctx.fillText(
      `Mega extra points if you land back on the beehive!`,
      messagePos[0] + 100,
      messagePos[1] + 400
    );
  }
}

export default GameView;
