import {add,string} from "./App"

test ('add', () => {


    const value = add()
    expect(value).toBe(0);
})


////////


test ("string", () => {
  const str = string("abcdefghihk")
  expect(str).toBe("abcdefghih");
})