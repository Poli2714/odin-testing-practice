import reverseString from './reverseString';

describe('reverseString', () => {
  test('returns empty string', () => expect(reverseString('')).toEqual(''));

  test('trims and reverses string', () =>
    expect(reverseString('  testing whitespace')).toEqual(
      'ecapsetihw gnitset'
    ));

  test('reverses a single string', () =>
    expect(reverseString('hello')).toEqual('olleh'));

  test('reverses multiple strings', () =>
    expect(reverseString('hello world!!!')).toEqual('!!!dlrow olleh'));

  test('reverses strings and numbers', () =>
    expect(reverseString('1try string 2 with numbers 3')).toEqual(
      '3 srebmun htiw 2 gnirts yrt1'
    ));

  test('reverses a sentence', () =>
    expect(reverseString('Writing test is awesome.')).toEqual(
      '.emosewa si tset gnitirW'
    ));
});
