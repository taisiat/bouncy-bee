/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_scripts_moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/scripts/moving_object.js */ \"./src/scripts/moving_object.js\");\n/* harmony import */ var _src_scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/scripts/game_view.js */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _src_scripts_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _src_scripts_bee_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/scripts/bee.js */ \"./src/scripts/bee.js\");\n// const MovingObject = require(\"../src/scripts/moving_object.js\");\n\nwindow.MovingObject = _src_scripts_moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nwindow.GameView = _src_scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nwindow.Game = _src_scripts_game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\nwindow.Bee = _src_scripts_bee_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nconst canvasEle = document.getElementById(\"game-canvas\");\nconst ctx = canvasEle.getContext(\"2d\");\nconst mo = new _src_scripts_bee_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n  pos: [30, 30],\n  vel: [10, 10]\n  //   radius: 50,\n  //   color: \"red\",\n});\n\nmo.draw(ctx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUMyRDtBQUMzREMsTUFBTSxDQUFDRCxZQUFZLEdBQUdBLHFFQUFZO0FBRWlCO0FBQ25EQyxNQUFNLENBQUNDLFFBQVEsR0FBR0EsaUVBQVE7QUFFZ0I7QUFDMUNELE1BQU0sQ0FBQ0UsSUFBSSxHQUFHQSw0REFBSTtBQUVzQjtBQUN4Q0YsTUFBTSxDQUFDRyxHQUFHLEdBQUdBLDJEQUFHO0FBRWhCLE1BQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ3hELE1BQU1DLEdBQUcsR0FBR0gsU0FBUyxDQUFDSSxVQUFVLENBQUMsSUFBSSxDQUFDO0FBRXRDLE1BQU1DLEVBQUUsR0FBRyxJQUFJTiwyREFBRyxDQUFDO0VBQ2pCTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBQ2JDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0VBQ1o7RUFDQTtBQUNGLENBQUMsQ0FBQzs7QUFDRkYsRUFBRSxDQUFDRyxJQUFJLENBQUNMLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdW5jeS1iZWUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBNb3ZpbmdPYmplY3QgPSByZXF1aXJlKFwiLi4vc3JjL3NjcmlwdHMvbW92aW5nX29iamVjdC5qc1wiKTtcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanNcIjtcbndpbmRvdy5Nb3ZpbmdPYmplY3QgPSBNb3ZpbmdPYmplY3Q7XG5cbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCI7XG53aW5kb3cuR2FtZVZpZXcgPSBHYW1lVmlldztcblxuaW1wb3J0IEdhbWUgZnJvbSBcIi4uL3NyYy9zY3JpcHRzL2dhbWUuanNcIjtcbndpbmRvdy5HYW1lID0gR2FtZTtcblxuaW1wb3J0IEJlZSBmcm9tIFwiLi4vc3JjL3NjcmlwdHMvYmVlLmpzXCI7XG53aW5kb3cuQmVlID0gQmVlO1xuXG5jb25zdCBjYW52YXNFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzRWxlLmdldENvbnRleHQoXCIyZFwiKTtcblxuY29uc3QgbW8gPSBuZXcgQmVlKHtcbiAgcG9zOiBbMzAsIDMwXSxcbiAgdmVsOiBbMTAsIDEwXSxcbiAgLy8gICByYWRpdXM6IDUwLFxuICAvLyAgIGNvbG9yOiBcInJlZFwiLFxufSk7XG5tby5kcmF3KGN0eCk7XG4iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0Iiwid2luZG93IiwiR2FtZVZpZXciLCJHYW1lIiwiQmVlIiwiY2FudmFzRWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJtbyIsInBvcyIsInZlbCIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bee.js":
/*!****************************!*\
  !*** ./src/scripts/bee.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/scripts/util.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n// const MovingObject = require(\"./moving_object.js\");\n\n\nclass Bee extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    super(options);\n    this.color = Bee.COLOR;\n    this.radius = Bee.RADIUS;\n    this.vel = _util_js__WEBPACK_IMPORTED_MODULE_1__.randomVec(5);\n  }\n}\n\n// module.exports = Bee;\n_defineProperty(Bee, \"RADIUS\", 40);\n_defineProperty(Bee, \"COLOR\", \"yellow\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bee);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iZWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDMkM7QUFDVDtBQUVsQyxNQUFNRSxHQUFHLFNBQVNGLHNEQUFZLENBQUM7RUFHN0JHLFdBQVdBLENBQUEsRUFBZTtJQUFBLElBQWRDLE9BQU8sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO0lBQ3RCLEtBQUssQ0FBQ0QsT0FBTyxDQUFDO0lBQ2QsSUFBSSxDQUFDSSxLQUFLLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR1IsR0FBRyxDQUFDUyxNQUFNO0lBQ3hCLElBQUksQ0FBQ0MsR0FBRyxHQUFHWCwrQ0FBYyxDQUFDLENBQUMsQ0FBQztFQUM5QjtBQUNGOztBQUVBO0FBQUFhLGVBQUEsQ0FYTVosR0FBRyxZQUNTLEVBQUU7QUFBQVksZUFBQSxDQURkWixHQUFHLFdBRVEsUUFBUTtBQVV6QiwrREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdW5jeS1iZWUvLi9zcmMvc2NyaXB0cy9iZWUuanM/ZGIzNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBNb3ZpbmdPYmplY3QgPSByZXF1aXJlKFwiLi9tb3Zpbmdfb2JqZWN0LmpzXCIpO1xuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuL3V0aWwuanNcIjtcblxuY2xhc3MgQmVlIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgc3RhdGljIFJBRElVUyA9IDQwO1xuICBzdGF0aWMgQ09MT1IgPSBcInllbGxvd1wiO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgICB0aGlzLmNvbG9yID0gQmVlLkNPTE9SO1xuICAgIHRoaXMucmFkaXVzID0gQmVlLlJBRElVUztcbiAgICB0aGlzLnZlbCA9IFV0aWwucmFuZG9tVmVjKDUpO1xuICB9XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gQmVlO1xuZXhwb3J0IGRlZmF1bHQgQmVlO1xuIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlV0aWwiLCJCZWUiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjb2xvciIsIkNPTE9SIiwicmFkaXVzIiwiUkFESVVTIiwidmVsIiwicmFuZG9tVmVjIiwiX2RlZmluZVByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/bee.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor() {}\n  step() {} //Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.\n\n  draw(ctx) {}\n}\n\n// module.exports = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//Keeps track of dimensions of the space; wraps objects around when they drift off the screen.//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDVEMsV0FBV0EsQ0FBQSxFQUFHLENBQUM7RUFFZkMsSUFBSUEsQ0FBQSxFQUFHLENBQUMsQ0FBQyxDQUFDOztFQUVWQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUUsQ0FBQztBQUNiOztBQUVBO0FBQ0EsK0RBQWVKLElBQUksRUFBQzs7QUFFcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3VuY3ktYmVlLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RlcCgpIHt9IC8vR2FtZS5wcm90b3R5cGUuc3RlcCBtZXRob2QgY2FsbHMgR2FtZS5wcm90b3R5cGUubW92ZSBvbiBhbGwgdGhlIG9iamVjdHMsIGFuZCBHYW1lLnByb3RvdHlwZS5jaGVja0NvbGxpc2lvbnMgY2hlY2tzIGZvciBjb2xsaWRpbmcgb2JqZWN0cy5cblxuICBkcmF3KGN0eCkge31cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuZXhwb3J0IGRlZmF1bHQgR2FtZTtcblxuLy9LZWVwcyB0cmFjayBvZiBkaW1lbnNpb25zIG9mIHRoZSBzcGFjZTsgd3JhcHMgb2JqZWN0cyBhcm91bmQgd2hlbiB0aGV5IGRyaWZ0IG9mZiB0aGUgc2NyZWVuLlxuIl0sIm5hbWVzIjpbIkdhbWUiLCJjb25zdHJ1Y3RvciIsInN0ZXAiLCJkcmF3IiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameView {\n  constructor() {}\n}\n\n// module.exports = GameView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);\n\n//Stores a Game instance.\n// Stores a canvas context to draw the game into.\n// Installs key listeners to move the ship and fire bullets.\n// Installs a timer to call Game.prototype.step.//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFFBQVEsQ0FBQztFQUNiQyxXQUFXQSxDQUFBLEVBQUcsQ0FBQztBQUNqQjs7QUFFQTtBQUNBLCtEQUFlRCxRQUFRLEVBQUM7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm91bmN5LWJlZS8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVWaWV3IHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IEdhbWVWaWV3O1xuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7XG5cbi8vU3RvcmVzIGEgR2FtZSBpbnN0YW5jZS5cbi8vIFN0b3JlcyBhIGNhbnZhcyBjb250ZXh0IHRvIGRyYXcgdGhlIGdhbWUgaW50by5cbi8vIEluc3RhbGxzIGtleSBsaXN0ZW5lcnMgdG8gbW92ZSB0aGUgc2hpcCBhbmQgZmlyZSBidWxsZXRzLlxuLy8gSW5zdGFsbHMgYSB0aW1lciB0byBjYWxsIEdhbWUucHJvdG90eXBlLnN0ZXAuXG4iXSwibmFtZXMiOlsiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/scripts/game.js\");\n// Base class for anything that moves.\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\nclass MovingObject {\n  constructor() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    // this.game = options.game;\n    // this.isWrappable = true;\n  }\n\n  move(timeDelta) {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n    this.pos = this.game.wrap(this.pos);\n    return this.pos;\n\n    // const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n    //   offsetX = this.vel[0] * velocityScale,\n    //   offsetY = this.vel[1] * velocityScale;\n\n    // this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n    // if (this.game.isOutOfBounds(this.pos)) {\n    //   if (this.isWrappable) {\n    //     this.pos = this.game.wrap(this.pos);\n    //   } else {\n    //     this.remove();\n    //   }\n    // }\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n    ctx.fill();\n  }\n  isCollidedWith(otherMovingObject) {\n    let x1 = this.pos[0];\n    let y1 = this.pos[1];\n    let x2 = otherObject.pos[0];\n    let y2 = otherObject.pos[1];\n    let rad = this.radius + otherObject.radius;\n    let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);\n    return rad >= dist;\n  }\n  collideWith(otherObject) {}\n}\n\n// module.exports = MovingObject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDNkI7QUFFN0IsTUFBTUMsdUJBQXVCLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFFekMsTUFBTUMsWUFBWSxDQUFDO0VBQ2pCQyxXQUFXQSxDQUFBLEVBQWU7SUFBQSxJQUFkQyxPQUFPLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNHLEdBQUcsR0FBR0osT0FBTyxDQUFDSSxHQUFHO0lBQ3RCLElBQUksQ0FBQ0MsR0FBRyxHQUFHTCxPQUFPLENBQUNLLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdOLE9BQU8sQ0FBQ00sTUFBTTtJQUM1QixJQUFJLENBQUNDLEtBQUssR0FBR1AsT0FBTyxDQUFDTyxLQUFLO0lBQzFCO0lBQ0E7RUFDRjs7RUFFQUMsSUFBSUEsQ0FBQ0MsU0FBUyxFQUFFO0lBQ2QsSUFBSSxDQUFDTCxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxJQUFJLENBQUNELEdBQUcsR0FBRyxJQUFJLENBQUNNLElBQUksQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ1AsR0FBRyxDQUFDO0lBQ25DLE9BQU8sSUFBSSxDQUFDQSxHQUFHOztJQUVmO0lBQ0E7SUFDQTs7SUFFQTs7SUFFQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNGOztFQUVBUSxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7SUFDUkEsR0FBRyxDQUFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDUCxLQUFLO0lBQzFCTSxHQUFHLENBQUNFLFNBQVMsRUFBRTtJQUNmRixHQUFHLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNaLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHVyxJQUFJLENBQUNDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDcEVMLEdBQUcsQ0FBQ00sSUFBSSxFQUFFO0VBQ1o7RUFFQUMsY0FBY0EsQ0FBQ0MsaUJBQWlCLEVBQUU7SUFDaEMsSUFBSUMsRUFBRSxHQUFHLElBQUksQ0FBQ2xCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEIsSUFBSW1CLEVBQUUsR0FBRyxJQUFJLENBQUNuQixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLElBQUlvQixFQUFFLEdBQUdDLFdBQVcsQ0FBQ3JCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsSUFBSXNCLEVBQUUsR0FBR0QsV0FBVyxDQUFDckIsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFJdUIsR0FBRyxHQUFHLElBQUksQ0FBQ3JCLE1BQU0sR0FBR21CLFdBQVcsQ0FBQ25CLE1BQU07SUFFMUMsSUFBSXNCLElBQUksR0FBR1gsSUFBSSxDQUFDWSxJQUFJLENBQUMsQ0FBQ0wsRUFBRSxHQUFHRixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUNJLEVBQUUsR0FBR0gsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVyRCxPQUFPSSxHQUFHLElBQUlDLElBQUk7RUFDcEI7RUFFQUUsV0FBV0EsQ0FBQ0wsV0FBVyxFQUFFLENBQUM7QUFDNUI7O0FBRUE7QUFDQSwrREFBZTNCLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3VuY3ktYmVlLy4vc3JjL3NjcmlwdHMvbW92aW5nX29iamVjdC5qcz9jMjAxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJhc2UgY2xhc3MgZm9yIGFueXRoaW5nIHRoYXQgbW92ZXMuXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCI7XG5cbmNvbnN0IE5PUk1BTF9GUkFNRV9USU1FX0RFTFRBID0gMTAwMCAvIDYwO1xuXG5jbGFzcyBNb3ZpbmdPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWw7XG4gICAgdGhpcy5yYWRpdXMgPSBvcHRpb25zLnJhZGl1cztcbiAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAvLyB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gICAgLy8gdGhpcy5pc1dyYXBwYWJsZSA9IHRydWU7XG4gIH1cblxuICBtb3ZlKHRpbWVEZWx0YSkge1xuICAgIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgdGhpcy52ZWxbMF0sIHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV1dO1xuICAgIHRoaXMucG9zID0gdGhpcy5nYW1lLndyYXAodGhpcy5wb3MpO1xuICAgIHJldHVybiB0aGlzLnBvcztcblxuICAgIC8vIGNvbnN0IHZlbG9jaXR5U2NhbGUgPSB0aW1lRGVsdGEgLyBOT1JNQUxfRlJBTUVfVElNRV9ERUxUQSxcbiAgICAvLyAgIG9mZnNldFggPSB0aGlzLnZlbFswXSAqIHZlbG9jaXR5U2NhbGUsXG4gICAgLy8gICBvZmZzZXRZID0gdGhpcy52ZWxbMV0gKiB2ZWxvY2l0eVNjYWxlO1xuXG4gICAgLy8gdGhpcy5wb3MgPSBbdGhpcy5wb3NbMF0gKyBvZmZzZXRYLCB0aGlzLnBvc1sxXSArIG9mZnNldFldO1xuXG4gICAgLy8gaWYgKHRoaXMuZ2FtZS5pc091dE9mQm91bmRzKHRoaXMucG9zKSkge1xuICAgIC8vICAgaWYgKHRoaXMuaXNXcmFwcGFibGUpIHtcbiAgICAvLyAgICAgdGhpcy5wb3MgPSB0aGlzLmdhbWUud3JhcCh0aGlzLnBvcyk7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEksIHRydWUpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBpc0NvbGxpZGVkV2l0aChvdGhlck1vdmluZ09iamVjdCkge1xuICAgIGxldCB4MSA9IHRoaXMucG9zWzBdO1xuICAgIGxldCB5MSA9IHRoaXMucG9zWzFdO1xuICAgIGxldCB4MiA9IG90aGVyT2JqZWN0LnBvc1swXTtcbiAgICBsZXQgeTIgPSBvdGhlck9iamVjdC5wb3NbMV07XG4gICAgbGV0IHJhZCA9IHRoaXMucmFkaXVzICsgb3RoZXJPYmplY3QucmFkaXVzO1xuXG4gICAgbGV0IGRpc3QgPSBNYXRoLnNxcnQoKHgyIC0geDEpICoqIDIgKyAoeTIgLSB5MSkgKiogMik7XG5cbiAgICByZXR1cm4gcmFkID49IGRpc3Q7XG4gIH1cblxuICBjb2xsaWRlV2l0aChvdGhlck9iamVjdCkge31cbn1cblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBNb3ZpbmdPYmplY3Q7XG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7XG4iXSwibmFtZXMiOlsiR2FtZSIsIk5PUk1BTF9GUkFNRV9USU1FX0RFTFRBIiwiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9zIiwidmVsIiwicmFkaXVzIiwiY29sb3IiLCJtb3ZlIiwidGltZURlbHRhIiwiZ2FtZSIsIndyYXAiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImlzQ29sbGlkZWRXaXRoIiwib3RoZXJNb3ZpbmdPYmplY3QiLCJ4MSIsInkxIiwieDIiLCJvdGhlck9iamVjdCIsInkyIiwicmFkIiwiZGlzdCIsInNxcnQiLCJjb2xsaWRlV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomVec\": function() { return /* binding */ randomVec; },\n/* harmony export */   \"scale\": function() { return /* binding */ scale; }\n/* harmony export */ });\n// Utility code, especially vector math stuff.\nfunction randomVec(length) {\n  const deg = 2 * Math.PI * Math.random();\n  return scale([Math.sin(deg), Math.cos(deg)], length);\n}\nfunction scale(vec, m) {\n  return [vec[0] * m, vec[1] * m];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDTyxTQUFTQSxTQUFTQSxDQUFDQyxNQUFNLEVBQUU7RUFDaEMsTUFBTUMsR0FBRyxHQUFHLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxFQUFFLEdBQUdELElBQUksQ0FBQ0UsTUFBTSxFQUFFO0VBQ3ZDLE9BQU9DLEtBQUssQ0FBQyxDQUFDSCxJQUFJLENBQUNJLEdBQUcsQ0FBQ0wsR0FBRyxDQUFDLEVBQUVDLElBQUksQ0FBQ0ssR0FBRyxDQUFDTixHQUFHLENBQUMsQ0FBQyxFQUFFRCxNQUFNLENBQUM7QUFDdEQ7QUFFTyxTQUFTSyxLQUFLQSxDQUFDRyxHQUFHLEVBQUVDLENBQUMsRUFBRTtFQUM1QixPQUFPLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0MsQ0FBQyxFQUFFRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUMsQ0FBQztBQUNqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvdW5jeS1iZWUvLi9zcmMvc2NyaXB0cy91dGlsLmpzPzY5NGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVXRpbGl0eSBjb2RlLCBlc3BlY2lhbGx5IHZlY3RvciBtYXRoIHN0dWZmLlxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVZlYyhsZW5ndGgpIHtcbiAgY29uc3QgZGVnID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICByZXR1cm4gc2NhbGUoW01hdGguc2luKGRlZyksIE1hdGguY29zKGRlZyldLCBsZW5ndGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUodmVjLCBtKSB7XG4gIHJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XG59XG4iXSwibmFtZXMiOlsicmFuZG9tVmVjIiwibGVuZ3RoIiwiZGVnIiwiTWF0aCIsIlBJIiwicmFuZG9tIiwic2NhbGUiLCJzaW4iLCJjb3MiLCJ2ZWMiLCJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib3VuY3ktYmVlLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;