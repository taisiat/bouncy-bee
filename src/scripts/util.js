export function randomVec(length) {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}

export function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}

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
