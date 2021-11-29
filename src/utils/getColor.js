function getColor(number, maxNumber, maxNegativeNumber) {
  const green = { r: 65, g: 188, b: 156 };
  const red = { r: 191, g: 11, b: 27 };
  const min = { r: 21, g: 24, b: 32 };
  const isNegative = number < 0;
  const max = isNegative ? red : green;

  const numberPercent = (
    Math.abs(number) / Math.abs(isNegative ? maxNegativeNumber : maxNumber)
  ).toFixed(1);

  const difference = {
    r: max.r - min.r,
    g: max.g - min.g,
    b: max.b - min.b
  };

  const color = {
    r: difference.r * numberPercent + min.r,
    g: difference.g * numberPercent + min.g,
    b: difference.b * numberPercent + min.b
  };

  return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

export default getColor;
