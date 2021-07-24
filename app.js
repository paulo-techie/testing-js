const capitalize = (string) => string.substring(0, 1).toUpperCase() + string.substring(1);

const reverseString = (string) => string.split('').reverse().join('');

const Calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  divide: (x, y) => x / y,
  multiply: (x, y) => x * y,
};

const analyze = (array) => ({
  average: array.reduce((acc, each) => acc + each) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});

const caesarCipher = (str, key) => {
  let secret = '';
  str.split('').forEach((char) => {
    const x = parseInt(str.charCodeAt(str.indexOf(char)), 10) + key;
    if (x > 90 && x < 103) secret += String.fromCharCode(64 + (x % 90));
    else if (x > 122 && x <= 135) secret += String.fromCharCode(96 + (x % 122));
    else if (x < (65 + key) || x > (122 + key)) secret += char; // make exception for non-alphabets
    else if (x > (90 + key) && x < (97 + key)) secret += char; // make exception for non-alphabets
    else secret += String.fromCharCode(x);
  });
  return secret;
};

export {
  capitalize, reverseString, Calculator, analyze, caesarCipher,
};
