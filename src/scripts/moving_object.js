// Base class for anything that moves.

class MovingObject {
  constructor(options = {}) {}

  move() {}

  draw(ctx) {}

  isCollidedWith(otherMovingObject) {}
}
