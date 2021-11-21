const {add,string} = require("./App")

// Q1
test("add test",()=>{
    expect(add(1+2)).toEqual(3);
    expect(add(1+2+5)).toEqual(8);
    expect(add(1+2+8+10)).toEqual(21);
    //Return 0 if no parmeters 
    expect(add()).toEqual(0);

})

test("String  compare",()=>{
    //empty string 
    expect(string("")).toEqual("Unknown");
    // underScore Remove 
    expect(string("_Hellp")).toEqual("Hellp");
    //white space remove
    expect(string(" H e l l p ")).toEqual("Hellp");
    // 10 Length 
    expect(string("12345678910111213")).toEqual("1234567891");
    //Another multi test 
    expect(string("_12345 67891 011 1213")).toEqual("1234567891");
  

})