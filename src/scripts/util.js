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

export function pointDistance(point1, point2) {
  return Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
}

export function randomPosAroundCenterpoint(centerpoint, distance, correction) {
  let posRadius = distance * Math.sqrt(Math.random());
  let angleInRad = Math.random() * 2 * Math.PI;
  return [
    centerpoint[0] + posRadius * Math.cos(angleInRad) + correction,
    centerpoint[1] + posRadius * Math.sin(angleInRad) + correction,
  ];
}

export function generateHexagonPoints(centerpoint, radius) {
  let points = [];
  for (let i = 0; i < 6; i++) {
    let xPos = centerpoint[0] + radius * Math.cos(((2 * Math.PI) / 6) * i);
    let yPos = centerpoint[1] + radius * Math.sin(((2 * Math.PI) / 6) * i);
    points.push([xPos, yPos]);
  }
  return points;
}
