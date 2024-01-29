import Calculator from './calculator';

describe('calculate', () => {
  const calculator = Calculator();

  test('throws error if not number', () => {
    expect(() => calculator.add('1', 1)).toThrow('Please enter a valid number');
    expect(() => calculator.add('hello', 2)).toThrow(Error);
  });

  test('adds 4 + 5 to equal 9', () => expect(calculator.add(4, 5)).toEqual(9));

  test('subtracts 1076 - 598 to equal 478', () =>
    expect(calculator.subtract(1076, 598)).toEqual(478));

  test('divides 12 / 3 to equal 4', () =>
    expect(calculator.divide(12, 3)).toEqual(4));

  test('divides 12 / 5 to equal 2.4', () =>
    expect(calculator.divide(12, 5)).toEqual(2.4));

  test('divides 3 / 0 to throw error', () =>
    expect(() => calculator.divide(3, 0)).toThrow(Error));

  test('multiplies 5 * 3 to equal 15', () =>
    expect(calculator.multiply(5, 3)).toEqual(15));

  test('multiplies 0 * 11 to equal 0', () =>
    expect(calculator.multiply(0, 11)).toEqual(0));
});
