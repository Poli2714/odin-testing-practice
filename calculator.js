export default function Calculator() {
  const add = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number')
      throw new Error('Please enter a valid number');
    return num1 + num2;
  };

  const subtract = (num1, num2) => num1 - num2;

  const divide = (num1, num2) => {
    if (num2 === 0) throw new Error('You cannot divide by 0');
    return num1 / num2;
  };

  const multiply = (num1, num2) => num1 * num2;

  return { add, subtract, divide, multiply };
}
