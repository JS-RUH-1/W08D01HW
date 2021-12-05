const {add,filter} = require('./App');

test('add 1 + 2 +5 to equal 8', () => {
  expect(add(1, 2, 5)).toBe(8);
});

test('Test function multiple parameters', () => {
    expect(filter("")).toBe("Unknown");
    expect(filter("_ares")).toBe("ares")
    expect(filter("0123456789tt")).toBe("0123456789")
    expect(filter("_ares ares")).toBe("aresares")
  });