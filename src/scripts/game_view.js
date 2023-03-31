import Game from "./game.js";

class GameView {
  constructor(ctx) {
    this.game = new Game();
    this.ctx = ctx;
  }

  start() {
    setInterval(() => {
      this.game.step();
      this.game.draw(this.ctx);
    }, 20);
  }
}

// module.exports = GameView;
export default GameView;

//Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game.prototype.step.
