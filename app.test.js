import {
  capitalize, reverseString, Calculator, analyze, caesarCipher,
} from './app';

test('Capitalize string', () => {
  expect(capitalize('capitalize')).toMatch(/Capitalize/);
});

test('Reverse a string', () => {
  expect(reverseString('reverse')).toMatch(/esrever/);
});

test('Calculator - add 1 to 1 equals 2', () => {
  expect(Calculator.add(1, 1)).toEqual(2);
});

test('Calculator - subtract 1 from 2 equals 1', () => {
  expect(Calculator.subtract(2, 1)).toEqual(1);
});

test('Calculator - divide 2 by 1 equals 2', () => {
  expect(Calculator.divide(2, 1)).toEqual(2);
});

test('Calculator - multiply 2 by 1 equals 2', () => {
  expect(Calculator.multiply(2, 1)).toEqual(2);
});

test('Analyze array and return an object of its average, min, max and length', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});

test('Caesar Cipher - string with a key of 13', () => {
  expect(caesarCipher('test', 13)).toBe('grfg');
});

test('Caesar Cipher - string with mixed case', () => {
  expect(caesarCipher('Test', 13)).toBe('Grfg');
});

test('Caesar Cipher - string with numbers and punctuation', () => {
  expect(caesarCipher('10+2, is twelve!', 13)).toBe('10+2, vf gjryir!');
});
