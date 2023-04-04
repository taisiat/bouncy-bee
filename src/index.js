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

let waspMedImg = document.createElement("img");
waspMedImg.src = "assets/wasp_med.png";
waspMedImg.setAttribute("id", "wasp-med");
waspMedImg.classList.add("hidden");
document.querySelector("body").appendChild(waspMedImg);

let flowerImg = document.createElement("img");
flowerImg.src = "assets/flower_small.png";
flowerImg.setAttribute("id", "flower");
flowerImg.classList.add("hidden");
document.querySelector("body").appendChild(flowerImg);

let speedstripImg = document.createElement("img");
speedstripImg.src = "assets/speed_small.png";
speedstripImg.setAttribute("id", "speedstrip");
speedstripImg.classList.add("hidden");
document.querySelector("body").appendChild(speedstripImg);

let beehiveImg = document.createElement("img");
beehiveImg.src = "assets/beehive_med_transparent.png";
beehiveImg.setAttribute("id", "beehive");
beehiveImg.classList.add("hidden");
document.querySelector("body").appendChild(beehiveImg);

let announcementRImg = document.createElement("img");
announcementRImg.src = "assets/announcement_r.jpg";
announcementRImg.setAttribute("id", "announcement-red");
announcementRImg.classList.add("hidden");
document.querySelector("body").appendChild(announcementRImg);

let announcementWImg = document.createElement("img");
announcementWImg.src = "assets/announcement_w.jpg";
announcementWImg.setAttribute("id", "announcement-white");
announcementWImg.classList.add("hidden");
document.querySelector("body").appendChild(announcementWImg);

let announcementGImg = document.createElement("img");
announcementGImg.src = "assets/announcement_g.jpeg";
announcementGImg.setAttribute("id", "announcement-green");
announcementGImg.classList.add("hidden");
document.querySelector("body").appendChild(announcementGImg);

let beeLeft0 = document.createElement("img");
beeLeft0.src = "assets/bee/keyframes/__side_view_bee_fly_000.png";
beeLeft0.setAttribute("id", "bee_left_0");
beeLeft0.classList.add("hidden");
document.querySelector("body").appendChild(beeLeft0);

let beeLeft1 = document.createElement("img");
beeLeft1.src = "assets/bee/keyframes/__side_view_bee_fly_001.png";
beeLeft1.setAttribute("id", "bee_left_1");
beeLeft1.classList.add("hidden");
document.querySelector("body").appendChild(beeLeft1);

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = Game.DIM_Y;
canvasEl.width = Game.DIM_X;

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const gv = new GameView(ctx);
gv.drawInstructions();
