import {add, filterFunc} from './App';


// sum
test("add", () => {
  expect(add()).toBe(0)
})

// Filter
test("Filter", () => {
  expect(filterFunc("")).toBe("Unknown")
  expect(filterFunc("agfhrgtysjfhrgs")).toBe("agfhrgtysj")
  expect(filterFunc(" Turki ")).toBe("Turki")
  expect(filterFunc("Turki_")).toBe("Turki")
})