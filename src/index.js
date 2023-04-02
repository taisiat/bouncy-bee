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

import SpeedStrip from "../src/scripts/speed_strip";
window.SpeedStrip = SpeedStrip;

let boardbg = document.createElement("img");
boardbg.src = "assets/grass_smallest.jpeg";
boardbg.setAttribute("id", "grass");
boardbg.classList.add("hidden");
document.querySelector("body").appendChild(boardbg);

let beeImg = document.createElement("img");
beeImg.src = "assets/bee_small.png";
beeImg.setAttribute("id", "bee");
beeImg.classList.add("hidden");
document.querySelector("body").appendChild(beeImg);

let waspImg = document.createElement("img");
waspImg.src = "assets/wasp_small.png";
waspImg.setAttribute("id", "wasp");
waspImg.classList.add("hidden");
document.querySelector("body").appendChild(waspImg);

let flowerImg = document.createElement("img");
flowerImg.src = "assets/flower_small.png";
flowerImg.setAttribute("id", "flower");
flowerImg.classList.add("hidden");
document.querySelector("body").appendChild(flowerImg);

let speedstripImg = document.createElement("img");
speedstripImg.src = "assets/speed_small.jpg";
speedstripImg.setAttribute("id", "speedstrip");
speedstripImg.classList.add("hidden");
document.querySelector("body").appendChild(speedstripImg);

let beehiveImg = document.createElement("img");
beehiveImg.src = "assets/beehive_med.png";
beehiveImg.setAttribute("id", "beehive");
beehiveImg.classList.add("hidden");
document.querySelector("body").appendChild(beehiveImg);

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = Game.DIM_Y;
canvasEl.width = Game.DIM_X;

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const gv = new GameView(ctx);
gv.restart();
