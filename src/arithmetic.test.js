import {
  add,
  subtract,
  multiply,
  divide,
  square,
  cube,
  power,
  mod,
} from './arithmetic.js';

test('add returns the sum of two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract returns the difference of two numbers', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('multiply returns the result of multiplying two numbers', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('divide returns the result of dividing two numbers', () => {
  expect(divide(1, 2)).toBe(0.5);
});

test('square returns the result of squaring the number', () => {
  expect(square(2)).toBe(4);
});

test('cube returns the result of cubing the number', () => {
  expect(cube(2)).toBe(8);
});

test('power returns the result of raising a number by another number', () => {
  expect(power(3, 2)).toBe(9);
});

test('mod returns the remainder of dividing two numbers', () => {
  expect(mod(10, 2)).toBe(0);
});
