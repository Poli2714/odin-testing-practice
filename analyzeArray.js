const convertToNumArr = arr => arr.map(elem => Number(elem));

const calcSum = arr => arr.reduce((prev, cur) => prev + cur, 0);

function calcAverage(arr) {
  const len = arr.length;
  const sum = calcSum(arr);
  let average = sum / len;

  if (sum % len !== 0) {
    let average = String(sum / len);
    const dotIndex = average.indexOf('.');
    const tail = average.slice(dotIndex + 1);
    if (tail.length > 2) return Number(Number(average).toFixed(2));
  }

  return average;
}

function analyzeArray(arr) {
  if (!Array.isArray(arr)) throw new Error('Please enter an array of numbers');
  if (arr.length === 0) return 0;
  const newArr = convertToNumArr(arr);
  if (newArr.some(elem => typeof elem !== 'number' || Number.isNaN(elem)))
    throw new Error();

  const average = calcAverage(newArr);
  const min = Math.min(...newArr);
  const max = Math.max(...newArr);
  const length = newArr.length;

  return { average, min, max, length };
}

export { calcAverage };
export default analyzeArray;
