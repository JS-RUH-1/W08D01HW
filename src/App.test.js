// const template = require("babel-template")
import {add , filter } from './App'

test("add test" , ()=>{
    const v = add()
    expect(v).toBe(0)
})

test("filter test", ()=>{
    const value = filter("12345678900")
    expect(value).toBe("123456789")
})



