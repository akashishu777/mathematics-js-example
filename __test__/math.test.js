const { add, substract, multiply, divide, sqr } = require('../index');

test('Adding 1 + 1 equals 2', () => {
  expect(add(1, 1)).toBe(2)
});

test('Substract 5 - 1 equals 4', () => {
  expect(substract(5, 1)).toBe(4)
});

test('multiply 5 * 5 equals 25', () => {
  expect(multiply(5, 5)).toBe(25)
});

test('divide 10 / 2 equals 5', () => {
  expect(divide(10, 2)).toBe(5)
});

test('sqr 5 equals 25', () => {
  expect(sqr(5)).toBe(25)
});