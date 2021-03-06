function degreesToRads(angleInDegrees) {
  return (angleInDegrees / 180) * Math.PI;
}

function polarCoordinatesToCartesian(length, angle, x0 = 0, y0 = 0) {
  const result = { x: 0, y: 0 };
  const angleRads = degreesToRads(angle);

  result.x = x0 + length * Math.cos(angleRads);
  result.y = y0 - length * Math.sin(angleRads);

  return result;
}

function calculateCircleLength(radius) {
  return 2 * Math.PI * radius;
}

function calculateAngleFromArcLength(arcLength, radius) {
  return 360 * (arcLength / calculateCircleLength(radius));
}

export {
  degreesToRads, polarCoordinatesToCartesian, calculateAngleFromArcLength, calculateCircleLength,
};
