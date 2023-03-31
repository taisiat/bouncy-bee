class Game {
  constructor() {}

  step() {} //Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.

  draw(ctx) {}
}
//Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
