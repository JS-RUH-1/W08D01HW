const template = require('babel-template')
import {add , filter} from './App'

test('this is fake', ()=>{
    expect(true).toBeTruthy()
})


test('string' , ()=>{
    expect(filter(" _YazeedAleidAhmed")).toBe("YazeedAlei")
})



test("adds two values", () => {
    expect(add(1,1)).toBe(2)
    
})

test("adds two values", () => {
    expect(add(1,2)).toBe(3)
    
})

test("adds two values", () => {
    expect(add()).toBe(0)
    
})









// 
test("description of the test", ()=>{
    // so it runs anytime we have this test
    // expect(function that is going to be testest with an example).toBe(value)
})