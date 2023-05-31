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

let announcementGImg = document.createElement("img");
announcementGImg.src = "assets/announcement_g.jpeg";
announcementGImg.setAttribute("id", "announcement-green");
announcementGImg.classList.add("hidden");
document.querySelector("body").appendChild(announcementGImg);

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = GameView.CANVAS_DIM_Y;
canvasEl.width = GameView.CANVAS_DIM_X;

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", (event) => {
  const gv = new GameView(ctx);
  gv.drawWaitPage();
  // document.addEventListener("click", (event) => {
  //   gv.startGame();
  // });
  document.addEventListener("keydown", (event) => {
    if (event.key === "b" || event.key === "B") {
      gv.startGame();
    }
  });
});
