// const MovingObject = require("../src/scripts/moving_object.js");
import MovingObject from "../src/scripts/moving_object.js";
window.MovingObject = MovingObject;

import GameView from "../src/scripts/game_view.js";
window.GameView = GameView;

import Game from "../src/scripts/game.js";
window.Game = Game;

import Bee from "../src/scripts/bee.js";
window.Bee = Bee;

const canvasEle = document.getElementById("game-canvas");
const ctx = canvasEle.getContext("2d");

const mo = new Bee({
  pos: [30, 30],
  vel: [10, 10],
  //   radius: 50,
  //   color: "red",
});
mo.draw(ctx);
