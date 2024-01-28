import capitalize from './capitalize';

describe('capitalizeString', () => {
  test('capitalizes string', () =>
    expect(capitalize('hello')).toEqual('Hello'));

  test('capitalize string', () =>
    expect(capitalize('my name is Elgun')).toEqual('My name is Elgun'));

  test('starts with whitespace', () =>
    expect(capitalize(' with whitespace')).toEqual('With whitespace'));

  test('starts with number', () =>
    expect(capitalize('12hello')).toEqual('12hello'));
});
