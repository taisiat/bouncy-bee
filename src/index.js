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

let flowerMImg = document.createElement("img");
flowerMImg.src = "assets/flower_med.png";
flowerMImg.setAttribute("id", "flower-med");
flowerMImg.classList.add("hidden");
document.querySelector("body").appendChild(flowerMImg);

let speedstripImg = document.createElement("img");
speedstripImg.src = "assets/speed_small.png";
speedstripImg.setAttribute("id", "speedstrip");
speedstripImg.classList.add("hidden");
document.querySelector("body").appendChild(speedstripImg);

let speedstripPressedImg = document.createElement("img");
speedstripPressedImg.src = "assets/speed_small_pressed.png";
speedstripPressedImg.setAttribute("id", "speedstrip-pressed");
speedstripPressedImg.classList.add("hidden");
document.querySelector("body").appendChild(speedstripPressedImg);

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
//bees left
let beeLeft0 = document.createElement("img");
beeLeft0.src = "assets/bee/keyframes/__side_view_bee_fly_000.png";
beeLeft0.setAttribute("id", "bee-left-0");
beeLeft0.classList.add("hidden");
document.querySelector("body").appendChild(beeLeft0);

let beeLeft1 = document.createElement("img");
beeLeft1.src = "assets/bee/keyframes/__side_view_bee_fly_001.png";
beeLeft1.setAttribute("id", "bee-left-1");
beeLeft1.classList.add("hidden");
document.querySelector("body").appendChild(beeLeft1);

let beeLeft2 = document.createElement("img");
beeLeft2.src = "assets/bee/keyframes/__side_view_bee_fly_002.png";
beeLeft2.setAttribute("id", "bee-left-2");
beeLeft2.classList.add("hidden");
document.querySelector("body").appendChild(beeLeft2);

let beeLeft3 = document.createElement("img");
beeLeft3.src = "assets/bee/keyframes/__side_view_bee_fly_001.png";
beeLeft3.setAttribute("id", "bee-left-3");
beeLeft3.classList.add("hidden");
document.querySelector("body").appendChild(beeLeft3);
// bees right
let beeRight0 = document.createElement("img");
beeRight0.src = "assets/bee/keyframes/__side_view_bee_fly_r_000.png";
beeRight0.setAttribute("id", "bee-right-0");
beeRight0.classList.add("hidden");
document.querySelector("body").appendChild(beeRight0);

let beeRight1 = document.createElement("img");
beeRight1.src = "assets/bee/keyframes/__side_view_bee_fly_r_001.png";
beeRight1.setAttribute("id", "bee-right-1");
beeRight1.classList.add("hidden");
document.querySelector("body").appendChild(beeRight1);

let beeRight2 = document.createElement("img");
beeRight2.src = "assets/bee/keyframes/__side_view_bee_fly_r_002.png";
beeRight2.setAttribute("id", "bee-right-2");
beeRight2.classList.add("hidden");
document.querySelector("body").appendChild(beeRight2);

let beeRight3 = document.createElement("img");
beeRight3.src = "assets/bee/keyframes/__side_view_bee_fly_r_001.png";
beeRight3.setAttribute("id", "bee-right-3");
beeRight3.classList.add("hidden");
document.querySelector("body").appendChild(beeRight3);
//bee up
let beeUp0 = document.createElement("img");
beeUp0.src = "assets/bee/keyframes/__top_view_bee_fly_000.png";
beeUp0.setAttribute("id", "bee-up-0");
beeUp0.classList.add("hidden");
document.querySelector("body").appendChild(beeUp0);

let beeUp1 = document.createElement("img");
beeUp1.src = "assets/bee/keyframes/__top_view_bee_fly_001.png";
beeUp1.setAttribute("id", "bee-up-1");
beeUp1.classList.add("hidden");
document.querySelector("body").appendChild(beeUp1);

let beeUp2 = document.createElement("img");
beeUp2.src = "assets/bee/keyframes/__top_view_bee_fly_002.png";
beeUp2.setAttribute("id", "bee-up-2");
beeUp2.classList.add("hidden");
document.querySelector("body").appendChild(beeUp2);

let beeUp3 = document.createElement("img");
beeUp3.src = "assets/bee/keyframes/__top_view_bee_fly_003.png";
beeUp3.setAttribute("id", "bee-up-3");
beeUp3.classList.add("hidden");
document.querySelector("body").appendChild(beeUp3);
//bee down
let beeDown0 = document.createElement("img");
beeDown0.src = "assets/bee/keyframes/__top_view_bee_fly_d_000.png";
beeDown0.setAttribute("id", "bee-down-0");
beeDown0.classList.add("hidden");
document.querySelector("body").appendChild(beeDown0);

let beeDown1 = document.createElement("img");
beeDown1.src = "assets/bee/keyframes/__top_view_bee_fly_d_001.png";
beeDown1.setAttribute("id", "bee-down-1");
beeDown1.classList.add("hidden");
document.querySelector("body").appendChild(beeDown1);

let beeDown2 = document.createElement("img");
beeDown2.src = "assets/bee/keyframes/__top_view_bee_fly_d_002.png";
beeDown2.setAttribute("id", "bee-down-2");
beeDown2.classList.add("hidden");
document.querySelector("body").appendChild(beeDown2);

let beeDown3 = document.createElement("img");
beeDown3.src = "assets/bee/keyframes/__top_view_bee_fly_d_003.png";
beeDown3.setAttribute("id", "bee-down-3");
beeDown3.classList.add("hidden");
document.querySelector("body").appendChild(beeDown3);

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = Game.DIM_Y;
canvasEl.width = Game.DIM_X;

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", (event) => {
  const gv = new GameView(ctx);
  gv.drawInstructions();
});
// const gv = new GameView(ctx);
// gv.drawInstructions();
