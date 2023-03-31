// const MovingObject = require("../src/scripts/moving_object.js");
import MovingObject from "../src/scripts/moving_object.js";
window.MovingObject = MovingObject;

import GameView from "../src/scripts/game_view.js";
window.GameView = GameView;

import Game from "../src/scripts/game.js";
window.Game = Game;

import Bee from "../src/scripts/bee.js";
window.Bee = Bee;

import Wasp from "../src/scripts/wasp.js";
window.Wasp = Wasp;

import Flower from "../src/scripts/flower.js";
window.Flower = Flower;

import Beehive from "../src/scripts/beehive.js";
window.Beehive = Beehive;

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = Game.DIM_Y;
canvasEl.width = Game.DIM_X;

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const gv = new GameView(ctx);
gv.start();
