import caesarCipher from './caesarCipher';

describe('Caesar Cipher', () => {
  test('return empty string if passed empty text', () =>
    expect(caesarCipher('', 2)).toEqual(''));

  test('throws error if given key is not an integer', () => {
    expect(() => caesarCipher('hey', 'bye')).toThrow(Error);
    expect(() => caesarCipher('test', 2.4)).toThrow(
      'Please enter a valid number'
    );
  });

  test('shifts if the key is a string but can be converted to a number', () =>
    expect(caesarCipher('hat', '2')).toEqual('jcv'));

  test('returns original text if key is 0', () =>
    expect(caesarCipher('test', 0)).toEqual('test'));

  test('shifts one word', () =>
    expect(caesarCipher('hello', 2)).toEqual('jgnnq'));

  test('shifts a text with number', () =>
    expect(caesarCipher("I'm 628 years old", 4)).toEqual("M'q 628 cievw sph"));

  test('shifts a text with punctuation', () =>
    expect(caesarCipher('hello world!!', 12)).toEqual('tqxxa iadxp!!'));

  test('shifts z to a', () =>
    expect(caesarCipher('Zebra Was Buzzed', 1)).toEqual('Afcsb Xbt Cvaafe'));
});
