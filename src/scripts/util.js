export function randomVec(length) {
  const deg = 2 * Math.PI * Math.random();
  return scale([Math.sin(deg), Math.cos(deg)], length);
}

export function scale(vec, m) {
  return [vec[0] * m, vec[1] * m];
}

export function calculateTriangleCoord(pos1, pos2) {
  // let angle = 89;
  // const radians = (angle * Math.PI) / 180;

  const xDistance = pos1[0] - pos2[0];
  const yDistance = pos1[1] - pos2[1];
  // const pointDistance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
  // const xNew1 =
  //   pos2[0] +
  //   pointDistance * Math.cos(radians + Math.atan2(yDistance, xDistance));
  // const yNew1 =
  //   pos2[1] +
  //   pointDistance * Math.cos(radians + Math.atan2(yDistance, xDistance));

  // const xDistNewPoint =
  //   Math.cos(alpha) * xDistance - Math.sin(alpha) * yDistance;
  // const yDistNewPoint =
  //   Math.sin(alpha) * xDistance + Math.cos(alpha) * yDistance;
  // const xNewPoint1 = pos2[0] - xDistNewPoint;
  // const yNewPoint1 = pos2[1] + yDistNewPoint;
  // const xNewPoint2 = pos2[0] - xDistNewPoint;
  // const yNewPoint2 = pos2[1] - yDistNewPoint;
  // return [
  //   [xNew1, yNew1],
  //   [0, 0],
  // // ];
  // console.log([xNew1, yNew1]);
  // return [xNew1, yNew1];
  let knownPointsAngle = Math.atan2(yDistance / xDistance);
  let desiredPointerAngle = 90 - knownPointsAngle;
  let pointerLength = 30;
  let z = Math.sqrt(
    pointerLength ** 2 + pointerLength ** 2 * Math.atan2(desiredPointerAngle)
  );
  return [
    pos2[0] - z * Math.sin(desiredPointerAngle),
    pos2[1] - z * Math.cos(desiredPointerAngle),
  ];
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
