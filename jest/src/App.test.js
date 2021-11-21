import { Sum, Filter } from "./App";

test("should return the sum of args", () => {
  expect(Sum(1, 2, 55, -1)).toBe(57);
});
test("should return 0", () => {
  expect(Sum()).toBe(0);
});

test("should return Unknown", () => {
  expect(Filter()).toBe("Unknown");
});

test("should return the first ten", () => {
  expect(Filter("_abcdefghijklmn")).toBe("abcdefghij");
});
test("should return with out _", () => {
  expect(Filter("_Abdullah")).toBe("Abdullah");
});

test("should return with out space", () => {
  expect(Filter("     Spaces     ")).toBe("Spaces");
});
