// import { render, screen } from '@testing-library/react';
import App from './App';
import sum from './App'
import {text} from './App'

// test("fff", () =>{
//   const v = add(1,2)
//   expect(sum(1,1)).toBe(2)

// })

test("ttt", ()=>{
  expect(text("")).toBe("Unknown");
  expect(text("as dfg hj")).toBe("asdfghj");
  expect(text("asdfghjkloiu")).toBe("asdfghjklo");
  expect(text("_hhh")).toBe("hhh")
})