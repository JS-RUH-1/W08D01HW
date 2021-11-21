// import {add} from "./App"

// test ('add' , () =>{
//   const value =add(1,2,3,4)
//   expect(value).toBe(10);
// })

import { filter } from "./App";
test ('filter' , ()=>{
  expect(filter('')).toBe("Unknown")
  expect(filter('abrar alzhrani java')).toBe('abraralzhranijava');
  expect(filter('abrar alzhr')).toBe('abraralzhr');
  expect(filter('_abrar')).toBe('abrar');

}) 