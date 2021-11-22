const {sum} = require('./App')
const {filterTest} =require('./App')


test('test the sum function', ()=>{
    expect (sum(1,2)).toBe(3)
    expect (sum(0)).toBe(0)
    expect (sum(1,2,3,4)).toBe(10)
    
})


// ---------------------------------

test ('test the filter function ' , ()=>{
    expect (filterTest("")).toBe("Unknown")
    expect (filterTest(" MuA ")).toBe("MuA")
    expect (filterTest("Helloooooo")).toBe("Helloooooo")
    expect (filterTest("_Hi")).toBe("Hi")
})