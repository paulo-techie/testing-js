const capitalize = (string) => string.substring(0, 1).toUpperCase() + string.substring(1);

const reverseString = (string) => string.split('').reverse().join('');

const Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => x / y,
  multiply: (x, y) => x * y,
}

const analyze = (array) => ({
  average: array.reduce((acc, each) => acc + each) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});

const caesarCipher = (string, key) => {
  let secret = '';
  string.split('').forEach(char => {
    const stringCode = parseInt(string.charCodeAt(string.indexOf(char))) + key;
    if (stringCode > 90 && stringCode < 103)
      secret += String.fromCharCode(64 + (stringCode % 90));
    else if (stringCode > 122 && stringCode <= 135)
      secret += String.fromCharCode(96 + (stringCode % 122));
    else if (stringCode < (65 + key) || stringCode > (122 + key))
      secret += char;   // make exception for non-alphabets
    else if (stringCode > (90 + key) && stringCode < (97 + key))
      secret += char;   // make exception for non-alphabets
    else
      secret += String.fromCharCode(stringCode);
  });
  return secret;
}

export { capitalize, reverseString, Calculator, analyze, caesarCipher }