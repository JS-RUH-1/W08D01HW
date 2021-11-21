import { sum } from "./App";
import { str } from "./App";
import { numReduce } from "./App";

test("test sum", () => {
  expect(sum(1, 2)).toBe(3);
});

test("test numReduce", () => {
  expect(numReduce()).toBe(0);
});

test("trst str", () => {
  expect(str("")).toBe("Unknown");
});

test("trst str", () => {
  expect(str(" ")).toBe("");
});

test("trst str", () => {
  expect(str("hhhhhhhhhhhhhhhhhhhhhhhhhhhhh")).toBe("hhhhhhhhhh");
});

test("trst str", () => {
  expect(str("_test")).toBe("test");
});
