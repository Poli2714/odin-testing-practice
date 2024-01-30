import analyzeArray, { calcAverage } from './analyzeArray';

describe('Analyze array', () => {
  test('throws error if the argument is not an array', () =>
    expect(() => analyzeArray('text')).toThrow(Error));

  test('returns 0 if the given array is empty', () =>
    expect(analyzeArray([])).toEqual(0));

  test('throws error if the given array has non-number elements', () =>
    expect(() => analyzeArray([0, 1, 'hey'])).toThrow(Error));

  test('if convertable, converts strings to numbers and analyzes the array', () =>
    expect(analyzeArray(['1', '2', 3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    }));

  test('calculates average', () =>
    expect(calcAverage([10, 32, 54])).toEqual(32));

  test('calculates average with decimal', () =>
    expect(calcAverage([1, 2, 3, 4])).toEqual(2.5));

  test('calculates average with toFixed(2) after decimal', () =>
    expect(calcAverage([3, 4, 3])).toEqual(3.33));

  test('analyzes array', () =>
    expect(analyzeArray(['5', 43, 1, 98, -2, -14, 171])).toEqual({
      average: 43.14,
      min: -14,
      max: 171,
      length: 7,
    }));
});
