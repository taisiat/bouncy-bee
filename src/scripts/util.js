export function randomVec(length) {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}

export function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}

export function calculateTriangleCoord(pos1, pos2) {
  const xDistance = Math.abs(pos1[0] - pos2[0]);
  const yDistance = Math.abs(pos1[1] - pos2[1]);
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
    let xAdj = pos1[0] <= pos2[0] ? x : -x;
    let yAdj = pos1[1] <= pos2[1] ? -y : y;
    newPoints.push([pos2[0] - xAdj, pos2[1] + yAdj]);
  });
  return newPoints;
}

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
