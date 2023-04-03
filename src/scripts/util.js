export function randomVec(length) {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}

export function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}

// export function beeVec(vec, userInput) {
//   const deg = 2 * Math.PI * userInput;
//   return [Math.sin(deg), Math.cos(deg)];
// }

export function wrap(coord, max) {
  let x = coord % max;
  if (x < 0) x += max;
  return x;
}

export function bounce(coord, max, radius) {
  if (coord < radius) {
    return radius;
  } else if (coord > max - radius) {
    return max - radius;
  } else {
    return coord;
  }
}
