const addNumbers = require('./App')
//test addNumber 
test('adds all numbers', () => {
    expect(addNumbers.addNumbers([1,2,3])).toBe(6);
  });
//test addNumber 
  test('passing nothign to add addNumbers', () => {
    expect(addNumbers.addNumbers()).toBe(0);
  });
  //test check string function;
  test('passing nothign to check string', () => {
    expect(addNumbers.checkString()).toBe("unknown");
  });
 //test check string function;
 test('passing parameter start with space to check string', () => {
    expect(addNumbers.checkString(" ")).toBe("with no space");
  });
  
   //test check string function;
 test('passing parameter start with space to check string', () => {
    expect(addNumbers.checkString("Hello There My Name Is Tony")).toBe("only the first 10 characters");
  });
     //test check string function;
 test('passing parameter start with space to check string', () => {
    expect(addNumbers.checkString("_Hello")).toBe("no underscore");
  });
  