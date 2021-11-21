import Sum from "./Sum";
import Filter from "./Filter";
// =======> TEST FOR SUM
test("Test add 1", () => {
  expect(Sum(2, 4)).toBe(6);
});
test("Test add 2", () => {
  expect(Sum()).toBe(0);
});
test("Test add 3", () => {
  expect(Sum(9, 1, 5)).toBe(15);
});
test("Test add 4", () => {
  expect(Sum(0, 1, 6, 8, 1, 5, 6)).toBe(27);
});

// =======> TEST FOR FILTER

test("Test filter 1", () => {
  expect(Filter("")).toBe("Unknown");
});
test("Test filter 2", () => {
  expect(Filter("Hello Test")).toBe("HelloTest");
});
test("Test filter 3", () => {
  expect(Filter("_Sheeee")).toBe("Sheeee");
});
test("Test filter 4", () => {
  expect(Filter("Testttttttttt")).toBe("Testtttttt");
});
