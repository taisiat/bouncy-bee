# bouncy-bee

_Javascript game akin to cannon shooter, shuffleboard, pool, and Asteroids_

### Background

Play it here: <a href="https://taisiat.github.io/bouncy-bee/">https://taisiat.github.io/bouncy-bee/</a>

BouncyBee is a single-page game where cannon shooter meets pool and shuffleboard and Asteroids. The player launches a bee from a static spot, and the bee then bounces around the gameboard before decelerating to a stop. While the bee flies, the player has a chance to nudge its trajectory to collect points and avoid enemies.

The player earns points when the bee flies across (pollinates!) flowers, and gets extra points if the bee lands back at the beehive. The player loses if the bee runs into wasps, which move across the gameboard.

### Functionality & MVPs

In BouncyBee, users are able to:

- Set initial bee direction and speed, akin to cannon shooter
- Nudge the bee's flight trajectory as it bounces and accelerates/decelerates around the game area, akin to asteroids and pool and shuffleboard
- Start, pause, and reset the game, while maintaining the browser session's high score
- Experience delightful visual feedback based on the bee's position, speed, and trajectory

### Technologies, Libraries, APIs

This project is implemented with the following technologies:

- The `Canvas API` to render the game board
- `Webpack` and `Babel` to bundle and transpile the source `JavaScript` code
- `npm` to manage project dependencies
- `SCSS` and `HTML` to generate the webpage around the game play area

### Implementation Highlights

WIP
![Pollen sparkles](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

pollen sparkles - pollen class where each pollen is an instance with a randomized color and position
position is radial around bee position
calls to Util jsli

### Future Features

Upcoming improvements include:

- Add a health bar to the bee to make wasp collisions non-fatal
- Add additional levels with different assortments of enemies and point-giving objects
- Add additional areas of altered physics, such as worm holes

### Asset Attribution

- Background image by <a href="https://www.freepik.com/free-vector/gradient-hexagonal-background_13900570.htm#query=honeycomb&position=6&from_view=keyword&track=sph">Freepik</a>

- <a href="https://www.freepik.com/free-vector/seamless-textured-grass-natural-grass-pattern_11930799.htm#query=grass%20field%20from%20above&position=7&from_view=search&track=ais">Background image by babysofja</a> on Freepik

- Background image by <a href="https://pixabay.com/users/chenspec-7784448/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5270962">Chen</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=5270962">Pixabay</a>

- <a href="https://www.freepik.com/free-vector/directional-arrow-sign-icons-set-design_9727765.htm#query=right%20arrows&position=0&from_view=search&track=ais">SpeedStrip image by starline</a> on Freepik

- Flower graphic by <a href="https://openai.com/product/dall-e-2">DALL-E</a>

- Witty content by <a href="https://chat.openai.com/chat">ChatGPT</a>

- Color array by <a href="https://gist.github.com/mucar/3898821">mucar</a>

- Keymaster by <a href="https://github.com/madrobby/keymaster">madrobby</a>

- Character sprites by Robert Brooks and Olga Romero Lopez
