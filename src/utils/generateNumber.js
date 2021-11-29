function generateNumber() {
  let min = -100;
  let max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default generateNumber;
