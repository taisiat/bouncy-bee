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

  const xDistance = Math.abs(pos1[0] - pos2[0]);
  const yDistance = Math.abs(pos1[1] - pos2[1]);
  const pointDistance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
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
  let knownPointsAngleDeg = (Math.atan(yDistance / xDistance) * 180) / Math.PI;
  console.log(knownPointsAngleDeg, "known pt angle");
  let inverseAngleDeg = 90 - knownPointsAngleDeg;
  let desiredSharpnessDeg = 30;
  let pointerLength = pointDistance * 0.1;
  let y =
    pointerLength *
    Math.cos(((desiredSharpnessDeg + inverseAngleDeg) * Math.PI) / 180);
  let x =
    pointerLength *
    Math.sin(((desiredSharpnessDeg + inverseAngleDeg) * Math.PI) / 180);
  let xAdj = pos1[0] <= pos2[0] ? x : -x;
  let yAdj = pos1[1] <= pos2[1] ? -y : y;
  return [pos2[0] - xAdj, pos2[1] + yAdj];
  // let z = Math.sqrt(
  //   pointerLength ** 2 +
  //     pointerLength ** 2 * Math.tan(inverseAngleDeg) ** 2
  // );
  //   (𝛼+(𝑥−𝛼)cos𝜃−(𝑦−𝛽)sin𝜃,𝛽+(𝑥−𝛼)sin𝜃+(𝑦−𝛽)cos𝜃)
  //   return [pos1[0] + (pos2[0]-pos1[0])*Math.cos(desiredPointerAngleDeg) - (pos2[1]-pos1[1])*Math.sin(desiredPointerAngleDeg),
  // pos1[1]+(pos2[1]-pos1[0])
  // ]
  // return [
  //   pos2[0] - z * Math.sin(desiredPointerAngleDeg),
  //   pos2[1] - z * Math.cos(desiredPointerAngleDeg),
  // ];
}

export function calculateOtherTriangleCoord(pos1, pos2) {
  const xDistance = Math.abs(pos1[0] - pos2[0]);
  const yDistance = Math.abs(pos1[1] - pos2[1]);
  const pointDistance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
  let knownPointsAngleDeg = (Math.atan(yDistance / xDistance) * 180) / Math.PI;
  console.log(knownPointsAngleDeg, "known pt angle");
  let inverseAngleDeg = 90 - knownPointsAngleDeg;
  let desiredSharpnessDeg = 30;
  let pointerLength = pointDistance * 0.1;
  let y =
    pointerLength *
    Math.cos(((inverseAngleDeg - desiredSharpnessDeg) * Math.PI) / 180);
  let x =
    pointerLength *
    Math.sin(((inverseAngleDeg - desiredSharpnessDeg) * Math.PI) / 180);
  let xAdj = pos1[0] <= pos2[0] ? x : -x;
  let yAdj = pos1[1] <= pos2[1] ? -y : y;
  return [pos2[0] - xAdj, pos2[1] + yAdj];
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
