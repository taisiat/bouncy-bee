# bouncy-bee

_Javascript game akin to cannon shooter, pool, Asteroids, and shuffleboard_

### Background

BouncyBee is a single-page game where cannon shooter meets pool and shuffleboard and Asteroids. The player launches a bee from a static spot, and the bee then bounces around the gameboard before decelerating to a stop. While the bee flies, the player has a chance to nudge its trajectory to collect points and avoid enemies.

The player earns points when the bee flies across (pollinates!) flowers, and gets extra points if the bee lands back at the beehive. The player loses if the bee depletes its health fully, which happens when it runs into the wasps that move across the gameboard.

Play it here! <a href="https://taisiat.github.io/bouncy-bee/">https://taisiat.github.io/bouncy-bee/</a>

See my <a href="https://github.com/taisiat">github</a> and <a href="https://www.linkedin.com/in/taisiakaraseva/">LinkedIn</a>

### Functionality & MVPs

In BouncyBee, users are able to:

- Set initial bee direction and speed, akin to cannon shooter
- Nudge the bee's flight trajectory as it bounces and accelerates/decelerates around the game area, akin to asteroids and pool
- 'Power up' bee's speed and experience deceleration, akin to shuffleboard
- Start, pause, and reset the game, while maintaining the browser session's high score
- Experience delightful visual feedback based on the bee's position, speed, and direction

### Technologies, Libraries, APIs

This project is implemented with the following technologies:

- The `Canvas API` to render the game board, with `requestAnimationFrame` and time delta correction behind the scenes to correct for play speed across devices
- `Webpack` and `Babel` to bundle and transpile the source `JavaScript` code
- `npm` to manage project dependencies
- `SCSS` and `HTML` to generate the webpage around the game play area and the welcome screen
- `Keymaster` to bind keys to methods

### Implementation Highlights

#### Pollen Sparkles

When the player flies the bee over flowers, pollen sparkles appear:

![Pollen sparkles](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWE0Y2Q3YzhmYTE3NTQzNDVmM2NiNGYzZDMyN2ZmMTg3ZWUzOGE5MCZjdD1n/WM5tVM48rAMbIxJZj7/giphy.gif)

Pollen sparkles are extra delightful because their color and position is randomized, and they have a few frames of persistence, making them slightly lag in the bee's pollination wake.

Pollen sparkles are implemented as a `Pollen` class, with each sparkle being an instance. Bee <> flower collision detection in the `Game` class activates new pollen sparkle creation.

When each pollen sparkle is created, its position is set with a call to `Pollen.pollenPos()`, which leverages a math helper method in a math utilities file:

<h5 a><strong><code>pollen.js</code></strong></h5>

```JavaScript
  pollenPos() {
    let posCorrection = 0;
    return Util.randomPosAroundCenterpoint(
      this.game.bee.pos,
      CONSTANTS.POLLEN_DIST,
      posCorrection
    );
  }
```

The math helper function generates a random position radially around the given centerpoint using Math.cos() and Math.sin(), rather than 'squarely' using Math.random() on the centerpoint directly. This enables pollen sparkles to appear in a pleasant circular area around the bee.

<h5 a><strong><code>util.js</code></strong></h5>

```JavaScript
export function randomPosAroundCenterpoint(centerpoint, distance, correction) {
  let posRadius = distance * Math.sqrt(Math.random());
  let angleInRad = Math.random() * 2 * Math.PI;
  return [
    centerpoint[0] + posRadius * Math.cos(angleInRad) + correction,
    centerpoint[1] + posRadius * Math.sin(angleInRad) + correction,
  ];
}
```

The `Pollen` class sets pollen sparkle `color` by picking a random HEX code from an array during instance construction.

A math helper, `Util.generateHexagonPoints(this.pollenPosition,Pollen.RADIUS)`, is called during instance construction to generate the hexagon point coordinates (`points`) that shape the pollen sparkle (this is a bee themed game after all!).

The `Pollen` class then draws pollen in 2 steps. 1: check that the pollen sparkle is 'younger' than a certain number of frames, else delete the pollen sparkle instance. 2: Draw the hexagon as a `Canvas API` path shape using the pre-determined `points` and `color`.

<h5 a><strong><code>pollen.js</code></strong></h5>

```JavaScript
drawPollen(ctx) {
    if (this.pollenTimer > Pollen.PERSISTENCE) {
      this.game.remove(this);
    }

    ctx.fillStyle = this.color;
    ctx.beginPath();
    this.points.forEach((pos) => {
      ctx.lineTo(pos[0], pos[1]);
    });
    ctx.closePath();
    ctx.fill();

    this.pollenTimer += 1;
  }
```

#### Cannon Shoot Mechanic

The game begins with the bee at the beehive, and the player must set a direction and launch speed - like in cannon shooters. Direction adjusts based on the player's keyboard inputs, and speed slides on its own and is 'locked in' based on player's timing of bee launch:

![Cannon shoot stage](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTJlZDgzMzI2NDI5M2Q0NjNhYjFkNzU3NjU2NzJmMmMzN2M0MzEyNCZjdD1n/3nDtoaJTZLZpb1yEHR/giphy.gif)

To set direction, the `GameView` class listens to inputs from ASDW and arrow keys. It also checks if the bee is launched, and fires off different methods conditionally:

<h5 a><strong><code>game_view.js, left/up handler example</code></strong></h5>

```JavaScript
  leftKeyHandler() {
    if (this.game.bee.launched) {
      this.game.bee.nudge("left");
    } else if (!this.game.bee.launched) {
      this.game.bee.setTrajectory("up");
    }
  }
```

If the bee is not yet launched, then `Bee.setTrajectory(direction)` is activated, and nudges `Bee.START_VEL`. This velocity is a placeholder whose value overrides bee's `vel` once the bee is set in motion. Bee's `vel` is what dictates actual bee position during gameplay.

<h5 a><strong><code>bee.js</code></strong></h5>

```JavaScript
  setTrajectory(direction) {
    const nudgeFactor = direction === "up" ?  CONSTANTS.NUDGE : -CONSTANTS.NUDGE;

    const cosA = Math.cos(nudgeFactor);
    const sinA = Math.sin(nudgeFactor);

    const newX = Bee.START_VEL[0] * cosA + Bee.START_VEL[1] * sinA;
    const newY = -Bee.START_VEL[0] * sinA + Bee.START_VEL[1] * cosA;

    Bee.START_VEL = [newX, newY];
  }
```

To draw the arrow representing the selected direction, `Bee.drawTrajectory(ctx)` extrapolates the arrow tip from the current Bee position and the nudged `Bee.START_VEL` value, and calls the math helper `Util.calculateTriangleCoord(this.pos, pointerDirection)` to calculate where the 2 other triangle points are. This helper does this using the angle between the bee position and the arrow tip. This ensures the arrow moves in a circle and always points outward!

<h5 a><strong><code>util.js</code></strong></h5>

```JavaScript
export function calculateTriangleCoord(originPos, pointerTipPos) {
  const xDistance = Math.abs(originPos[0] - pointerTipPos[0]);
  const yDistance = Math.abs(originPos[1] - pointerTipPos[1]);
  const pointDistance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
  let knownPointsAngleDeg = (Math.atan(yDistance / xDistance) * 180) / Math.PI;
  let inverseAngleDeg = 90 - knownPointsAngleDeg;
  let desiredSharpnessDeg = 30;
  let pointerLength = pointDistance * 0.2;
  let newPoints = [];
  [1, -1].forEach((factor) => {
    let y =
      pointerLength *
      Math.cos(
        ((inverseAngleDeg + factor * desiredSharpnessDeg) * Math.PI) / 180
      );
    let x =
      pointerLength *
      Math.sin(
        ((inverseAngleDeg + factor * desiredSharpnessDeg) * Math.PI) / 180
      );
    let xAdj = originPos[0] <= pointerTipPos[0] ? x : -x;
    let yAdj = originPos[1] <= pointerTipPos[1] ? -y : y;
    newPoints.push([pointerTipPos[0] - xAdj, pointerTipPos[1] + yAdj]);
  });
  return newPoints;
}
```

Meanwhile the speed setter, `Bee.slideScale()`, increments `slideStep` up or down with each game step and updates the Bee's `speed` value by that factor. The slider is then drawn as a rectangle of variable width by `Bee.drawScale(ctx)`, based on the current `speed` value.

When the player activates launch with the space bar, the current game step's Bee `speed` and `Bee.START_VEL` values are locked in. A math helper method calculates the final velocity, and the Bee `vel` is updated to the resultant velocity value. Bee launches!

<h5 a><strong><code>bee.js</code></strong></h5>

```JavaScript
  launch() {
    this.vel = Util.scale(Bee.START_VEL, this.speed);
    this.launched = true;
  }
```

Each time the game steps forward, the `Game` class checks if the bee is launched or not, and stops drawing the slider and arrow if the bee is no longer in cannon launch mode. This makes for a cleaner interface that shows these visuals only when they are relevant.

#### Other Features

Take a look at the source files for implementation of other notable features:

- Bee acceleration and deceleration mechanics, including how bee speed triggers beehive sparkles and how top speed is capped. See `Bee` class.
- Bee and wasp sprite sheet parsing, both with traditional one-image sprite sheets and multi-file sprite frames. See `Bee` and `Wasp` classes.
- Bounce mechanics. See `util.js`.
- requestAnimationFrame with time deltas for consistent game speed. See `GameView` and `MovingObject` game classes.
- Gameboard setup with randomized yet fenced positions for wasps, flowers, and speed strips. Note that flowers spawn at positions that never overlap other flowers. See `Game` class.
- Customized win/lose screens with changing messages based on game outcomes. See `GameView` class.

### Future Features

Upcoming improvements include:

- Add additional levels with different assortments of enemies and point-giving objects
- Add additional areas of altered physics, such as wormholes

### Asset Attribution

- Keymaster by <a href="https://github.com/madrobby/keymaster">madrobby</a>
- Witty content by <a href="https://chat.openai.com/chat">ChatGPT</a>

- Color array by <a href="https://gist.github.com/mucar/3898821">mucar</a>

- Character sprites by Robert Brooks and Olga Romero Lopez
- Images:

  - Background image by <a href="https://www.freepik.com/free-vector/gradient-hexagonal-background_13900570.htm#query=honeycomb&position=6&from_view=keyword&track=sph">Freepik</a>
  - <a href="https://www.freepik.com/free-vector/seamless-textured-grass-natural-grass-pattern_11930799.htm#query=grass%20field%20from%20above&position=7&from_view=search&track=ais">Background image by babysofja</a> on Freepik
  - Background image by <a href="https://pixabay.com/users/chenspec-7784448/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5270962">Chen</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5270962">Pixabay</a>
  - <a href="https://www.freepik.com/free-vector/directional-arrow-sign-icons-set-design_9727765.htm#query=right%20arrows&position=0&from_view=search&track=ais">SpeedStrip image by starline</a> on Freepik
  - Flower graphic by <a href="https://openai.com/product/dall-e-2">DALL-E</a>
