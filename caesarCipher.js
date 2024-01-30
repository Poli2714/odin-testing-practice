const shiftCharCode = (charCode, key) => {
  if (charCode >= 65 && charCode <= 90) {
    let newCharCode = charCode + key;
    if (newCharCode > 90) newCharCode = (newCharCode % 90) + 64;

    return newCharCode;
  }

  if (charCode >= 97 && charCode <= 122) {
    let newCharCode = charCode + key;
    if (newCharCode > 122) newCharCode = (newCharCode % 122) + 96;

    return newCharCode;
  }

  return charCode;
};

const shiftCodes = (text, key, fn) =>
  text.split('').map((_, i) => {
    const charCode = text.charCodeAt(i);
    return fn(charCode, key);
  });

const validateKey = key => {
  let newKey = Number(key);
  if (!Number.isInteger(newKey)) throw new Error('Please enter a valid number');
  if (newKey >= 26) newKey = newKey % 26;

  return newKey;
};

function caesarCipher(text, key) {
  if (typeof text !== 'string') return text;

  const validKey = validateKey(key);
  const shiftedCharCodes = shiftCodes(text, validKey, shiftCharCode);

  return String.fromCharCode(...shiftedCharCodes);
}

export default caesarCipher;
