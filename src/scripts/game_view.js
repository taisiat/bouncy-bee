import Game from "./game.js";
const CONSTANTS = {
  LINE_SPACING: 100,
};

class GameView {
  constructor(ctx) {
    this.ctx = ctx;
    this.announcementR = document.getElementById("announcement-red");
    this.announcementW = document.getElementById("announcement-white");
    this.announcementG = document.getElementById("announcement-green");
    this.wasp = document.getElementById("wasp-med");
    this.flower = document.getElementById("flower-med");
    this.beehive = document.getElementById("beehive");
    this.highScore = 0;
    this.bindKeyHandlers();
  }

  bindKeyHandlers() {
    key("i", () => {
      this.iKeyHandler();
    });
    key("w", () => {
      this.leftKeyHandler();
    });
    key("s", () => {
      this.rightKeyHandler();
    });
    key("space", () => {
      this.spaceKeyHandler();
    });
    key("a", () => {
      this.leftKeyHandler();
    });
    key("d", () => {
      this.rightKeyHandler();
    });
    key("up", () => {
      this.leftKeyHandler();
    });
    key("down", () => {
      this.rightKeyHandler();
    });
    key("right", () => {
      this.rightKeyHandler();
    });
    key("left", () => {
      this.leftKeyHandler();
    });
  }

  iKeyHandler() {
    if (this.running) {
      this.pause();
      this.drawInstructions();
    } else {
      this.play();
    }
  }

  spaceKeyHandler() {
    if (this.game && !this.game.bee.launched) {
      this.game.bee.launch();
    } else {
      this.restart();
    }
  }

  leftKeyHandler() {
    if (this.game.bee.launched) {
      this.game.bee.nudge("left");
    } else if (!this.game.bee.launched) {
      this.game.bee.setTrajectory("up");
    }
  }

  rightKeyHandler() {
    if (this.game.bee.launched) {
      this.game.bee.nudge("right");
    } else if (!this.game.bee.launched) {
      this.game.bee.setTrajectory("down");
    }
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.lastTime = 0;
    this.game = new Game();
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
        this.tallyPoints();
        this.drawLosePage();
      } else {
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
    this.ctx.clearRect(0, 0, 1200, 600);
    const pattern = this.ctx.createPattern(this.announcementG, "repeat");
    this.ctx.fillStyle = pattern;
    this.ctx.fillRect(0, 0, 1200, 600);
    const messagePos = [50, 250];
    this.ctx.font = "35pt Delicious Handrawn";
    this.ctx.fillStyle = "black";
    let winMessage =
      this.game.score > 0
        ? `${message} Score: ${this.game.score}`
        : "You avoided wasps, but you also didn't get any points!";
    this.ctx.fillText(winMessage, messagePos[0], messagePos[1]);
    let scoreMessage =
      this.game.score === this.highScore && this.game.score !== 0
        ? "That's a new high score!"
        : "";

    this.ctx.fillText(
      scoreMessage,
      messagePos[0],
      messagePos[1] + CONSTANTS.LINE_SPACING
    );
    this.ctx.drawImage(this.game.bee.beeFrameL0, 700, 150);
  }

  drawLosePage() {
    console.log("lose");
    let message = this.message("lose");
    this.ctx.clearRect(0, 0, 1200, 600);
    const pattern = this.ctx.createPattern(this.announcementR, "repeat");
    this.ctx.fillStyle = pattern;
    this.ctx.fillRect(0, 0, 1200, 600);
    const messagePos = [10, 300];
    this.ctx.font = "30pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("The wasps caught you!", messagePos[0], messagePos[1]);
    this.ctx.fillText(
      `${message}`,
      messagePos[0],
      messagePos[1] + CONSTANTS.LINE_SPACING
    );
    this.ctx.drawImage(this.wasp, 700, 100);
  }

  message(type) {
    const loseMessages = [
      "Bee-tter luck next time!",
      "Looks like you got stung with a loss!",
      "Bee-ginning of success is not here!",
      "Not the bee's knees this time!",
      "Sorry, you didn't make the buzz this time.",
      "You got swatted like a fly and lost!",
    ];
    const winMessages = [
      "Bee-autiful work!",
      "Buzzing with excitement, you're the winner!",
      "You earned your stripes like a bee and won!",
      "You're as busy as a bee and just as successful!",
      "Buzz-tastic!",
      "Hive five for a job well done!",
      "Buzz-tacular effort!",
    ];
    let messages = type === "win" ? winMessages : loseMessages;
    let idx = Math.floor(Math.random() * messages.length);
    return messages[idx];
  }

  drawInstructions(ctx) {
    this.ctx.clearRect(0, 0, 1200, 600);
    const pattern = this.ctx.createPattern(this.announcementW, "repeat");
    this.ctx.fillStyle = pattern || "yellow";
    this.ctx.fillRect(0, 0, 1200, 600);
    const messagePos = [10, 100];
    this.ctx.font = "30pt Delicious Handrawn";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(
      `Help Bouncy Bee collect the most nectar!`,
      messagePos[0],
      messagePos[1]
    );
    this.ctx.fillText(
      `Direct Bouncy Bee like a cannon, and then course correct as it flies. Try to:`,
      messagePos[0] + 100,
      messagePos[1] + 100
    );
    this.ctx.fillText(
      `Visit the most flowers`,
      messagePos[0] + CONSTANTS.LINE_SPACING,
      messagePos[1] + CONSTANTS.LINE_SPACING * 2
    );
    this.ctx.fillText(
      `Avoid the wasps!!!`,
      messagePos[0] + CONSTANTS.LINE_SPACING,
      messagePos[1] + CONSTANTS.LINE_SPACING * 3
    );
    this.ctx.fillText(
      `Land back on the beehive`,
      messagePos[0] + CONSTANTS.LINE_SPACING,
      messagePos[1] + CONSTANTS.LINE_SPACING * 4
    );

    this.ctx.drawImage(this.wasp, 1050, 240, 100, 100);
    this.ctx.drawImage(this.beehive, 550, 260, 150, 150);

    this.ctx.drawImage(this.flower, 700, 290, 300, 300);

    this.ctx.drawImage(this.game.bee.beeFrameL0, 900, 350, 200, 200);
  }
}

export default GameView;
