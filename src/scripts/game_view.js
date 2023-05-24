import Game from "./game.js";

const CONSTANTS = {
  LINE_SPACING: 100,
  LOSE_MSG: [
    "Bee-tter luck next time!",
    "Looks like you got stung with a loss!",
    "Bee-ginning of success is not here!",
    "Not the bee's knees this time!",
    "Sorry, you didn't make the buzz this time.",
    "You got swatted like a fly and lost!",
    "Bee-ware, losing is a sticky situation!",
    "Wasp that a loss? Yes it wasp!",
  ],
  WIN_MSG: [
    "Bee-autiful work!",
    "Buzzing with excitement, you're the winner!",
    "You earned your stripes like a bee and won!",
    "You're as busy as a bee and just as successful!",
    "Buzz-tastic!",
    "Hive five for a job well done!",
    "Buzz-tacular effort!",
    "You've stung the competition and emerged a winner!",
    "Wasp that a WIN? Yes it wasp!",
  ],
};

class GameView {
  static CANVAS_DIM_X = 1200;
  static CANVAS_DIM_Y = 600;

  constructor(ctx) {
    this.ctx = ctx;
    this.announcementR = document.getElementById("announcement-red");
    this.announcementW = document.getElementById("announcement-white");
    this.announcementG = document.getElementById("announcement-green");
    this.wasp1 = document.getElementById("wasp-left-flying");
    this.wasp2 = document.getElementById("wasp-left-sting");
    this.flower = document.getElementById("flower-med");
    this.beehive = document.getElementById("beehive");
    this.launchMechanic = document.getElementById("launch-mechanic");
    this.flyMechanic = document.getElementById("fly-mechanic");
    this.highScore = 0;
    this.bindKeyHandlers();
    this.directions = {
      UP: "up",
      DOWN: "down",
      LEFT: "left",
      RIGHT: "right",
    };
    this.messageType = {
      WIN: "win",
      LOSE: "lose",
    };
  }

  bindKeyHandlers() {
    key("i", () => {
      this.iKeyHandler();
    });
    key("w", () => {
      this.wKeyHandler();
    });
    key("s", () => {
      this.sKeyHandler();
    });
    key("space", () => {
      this.spaceKeyHandler();
    });
    key("a", () => {
      this.aKeyHandler();
    });
    key("d", () => {
      this.dKeyHandler();
    });
    key("up", () => {
      this.wKeyHandler();
    });
    key("down", () => {
      this.sKeyHandler();
    });
    key("right", () => {
      this.dKeyHandler();
    });
    key("left", () => {
      this.aKeyHandler();
    });
  }

  spaceKeyHandler() {
    if (this.game && !this.game.bee.launched) {
      this.game.bee.launch();
    } else {
      this.restart();
    }
  }

  aKeyHandler() {
    let nudgeDirection = {
      UP: "left",
      DOWN: "right",
      LEFT: "",
      RIGHT: "",
    };
    let beeDirection = this.game.bee.beeDirection();
    if (this.game.bee.launched) {
      this.game.bee.nudge(nudgeDirection[beeDirection]);
    } else if (!this.game.bee.launched) {
      this.game.bee.setTrajectory(this.directions.UP);
    }
  }

  wKeyHandler() {
    let nudgeDirection = {
      UP: "",
      DOWN: "",
      LEFT: "right",
      RIGHT: "left",
    };
    let beeDirection = this.game.bee.beeDirection();

    if (this.game.bee.launched) {
      this.game.bee.nudge(nudgeDirection[beeDirection]);
    } else if (!this.game.bee.launched) {
      this.game.bee.setTrajectory(this.directions.UP);
    }
  }

  sKeyHandler() {
    let nudgeDirection = {
      UP: "",
      DOWN: "",
      LEFT: "left",
      RIGHT: "right",
    };
    let beeDirection = this.game.bee.beeDirection();

    if (this.game.bee.launched) {
      this.game.bee.nudge(nudgeDirection[beeDirection]);
    } else if (!this.game.bee.launched) {
      this.game.bee.setTrajectory(this.directions.DOWN);
    }
  }

  dKeyHandler() {
    let nudgeDirection = {
      UP: "right",
      DOWN: "left",
      LEFT: "",
      RIGHT: "",
    };
    let beeDirection = this.game.bee.beeDirection();

    if (this.game.bee.launched) {
      this.game.bee.nudge(nudgeDirection[beeDirection]);
    } else if (!this.game.bee.launched) {
      this.game.bee.setTrajectory(this.directions.DOWN);
    }
  }

  iKeyHandler() {
    if (this.running) {
      this.pause();
      this.drawInstructions();
    } else {
      this.play(this.lastTime);
    }
  }

  restart() {
    this.running = false;
    this.score = 0;
    this.lastTime = 0;
    this.game = new Game({
      xDim: GameView.CANVAS_DIM_X,
      yDim: GameView.CANVAS_DIM_Y,
    });
    this.play(this.lastTime);
  }

  play(time) {
    this.running = true;
    this.animate(time);
  }

  pause() {
    this.running = false;
    this.animate(this.lastTime);
  }

  animate(time) {
    if (this.running) {
      if (!this.lastTime) {
        this.lastTime = time;
      }
      const timeDelta = time - this.lastTime;
      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      this.drawScore();
    } else {
      this.drawInstructions();
    }

    if (!this.game.gameOver()) {
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
    this.lastTime = time;
  }

  tallyPoints() {
    this.game.addPoints();
    this.highScore = Math.max(this.highScore, this.game.score);
    document.getElementById(
      "score-banner"
    ).innerHTML = `Your top score: ${this.highScore}`;
  }

  drawScore() {
    const scorePos = [10, 50];
    this.ctx.font = "40pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText(`Score: ${this.game.score}`, scorePos[0], scorePos[1]);
  }

  drawWinPage() {
    this.ctx.clearRect(0, 0, GameView.CANVAS_DIM_X, GameView.CANVAS_DIM_Y);
    const pattern = this.ctx.createPattern(this.announcementG, "repeat");
    this.ctx.fillStyle = pattern;
    this.ctx.fillRect(0, 0, GameView.CANVAS_DIM_X, GameView.CANVAS_DIM_Y);
    const messagePos = [40, 220];
    this.ctx.font = "35pt Delicious Handrawn";
    this.ctx.fillStyle = "black";

    let message = this.message(this.messageType.WIN);
    let winMessage =
      this.game.score > 0 ? message : "You avoided wasps, but got 0 points :(";
    let beeLandMsg = this.game.bee.beehiveLand
      ? "You landed on the beehive - score!"
      : "";

    this.ctx.fillText(winMessage, messagePos[0], messagePos[1]);
    this.ctx.fillText(
      `Score: ${this.game.score}! ${beeLandMsg}`,
      messagePos[0],
      messagePos[1] + CONSTANTS.LINE_SPACING
    );

    let scoreMessage =
      this.game.score === this.highScore && this.game.score !== 0
        ? "That's a new high score!"
        : "";
    this.ctx.fillText(
      scoreMessage,
      messagePos[0],
      messagePos[1] + 2 * CONSTANTS.LINE_SPACING
    );

    this.ctx.drawImage(this.game.bee.beeFrameL0, 700, 150);
  }

  drawLosePage() {
    this.ctx.clearRect(0, 0, GameView.CANVAS_DIM_X, GameView.CANVAS_DIM_Y);
    const pattern = this.ctx.createPattern(this.announcementR, "repeat");
    this.ctx.fillStyle = pattern;
    this.ctx.fillRect(0, 0, GameView.CANVAS_DIM_X, GameView.CANVAS_DIM_Y);
    const messagePos = [40, 80];
    this.ctx.font = "30pt Delicious Handrawn";
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("The wasps caught you!", messagePos[0], messagePos[1]);
    let message = this.message(this.messageType.LOSE);
    this.ctx.fillText(
      message,
      messagePos[0],
      messagePos[1] + CONSTANTS.LINE_SPACING
    );

    let waspSize = 500;
    this.ctx.drawImage(
      this.wasp1,
      0,
      0,
      776,
      867,
      700,
      100,
      (waspSize / 867) * 776,
      waspSize
    );

    this.ctx.fillText(
      "PRESS and HOLD the keys to control the bee!",
      messagePos[0],
      messagePos[1] + 2 * CONSTANTS.LINE_SPACING
    );
    this.ctx.drawImage(this.flyMechanic, messagePos[0], 325, 320, 240);
  }

  message(type) {
    let messages =
      type === this.messageType.WIN ? CONSTANTS.WIN_MSG : CONSTANTS.LOSE_MSG;
    let idx = Math.floor(Math.random() * messages.length);
    return messages[idx];
  }

  drawInstructions() {
    this.ctx.clearRect(0, 0, GameView.CANVAS_DIM_X, GameView.CANVAS_DIM_Y);
    const pattern = this.ctx.createPattern(this.announcementW, "repeat");
    this.ctx.fillStyle = pattern || "yellow";
    this.ctx.fillRect(0, 0, GameView.CANVAS_DIM_X, GameView.CANVAS_DIM_Y);
    const messagePos = [40, 100];
    this.ctx.font = "25pt Delicious Handrawn";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(
      "Help Bouncy Bee collect the most nectar!",
      messagePos[0],
      messagePos[1]
    );
    this.ctx.fillText(
      "Launch Bouncy Bee like a cannon AND nudge it as it flies. Try to:",
      messagePos[0] + 60,
      messagePos[1] + 100
    );
    this.ctx.fillText(
      "1. Visit the most flowers - they give you points and health",
      messagePos[0] + CONSTANTS.LINE_SPACING,
      messagePos[1] + CONSTANTS.LINE_SPACING * 2
    );
    this.ctx.fillText(
      "2. Avoid the wasps!!!",
      messagePos[0] + CONSTANTS.LINE_SPACING,
      messagePos[1] + CONSTANTS.LINE_SPACING * 3
    );
    this.ctx.fillText(
      "3. Land (slide to a stop) on the beehive for extra points",
      messagePos[0] + CONSTANTS.LINE_SPACING,
      messagePos[1] + CONSTANTS.LINE_SPACING * 4
    );

    this.ctx.drawImage(this.launchMechanic, 860, 0, 340, 340);
    this.ctx.drawImage(this.flyMechanic, 860, 350, 340, 250);
  }

  drawWaitPage() {
    this.ctx.clearRect(0, 0, GameView.CANVAS_DIM_X, GameView.CANVAS_DIM_Y);
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(0, 0, GameView.CANVAS_DIM_X, GameView.CANVAS_DIM_Y);
  }

  startGame() {
    let welcomeScreen = document.getElementById("welcome-screen");
    welcomeScreen.classList.add("hidden");
    let gameScreen = document.getElementById("game-canvas");
    gameScreen.classList.remove("hidden");
    this.restart();
  }
}

export default GameView;
