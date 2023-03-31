// Utility code, especially vector math stuff.
export function randomVec(length) {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}

export function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}

export function wrap(coord, max) {
  let x = coord % max;
  if (x < 0) x += max;
  return x;
}
