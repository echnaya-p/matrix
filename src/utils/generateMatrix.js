import generateNumber from "./generateNumber";

function generateMatrix() {
  const matrix = [];

  for (let i = 0; i <= 168; i++) {
    matrix.push(generateNumber());
  }

  return matrix;
}

export default generateMatrix;
