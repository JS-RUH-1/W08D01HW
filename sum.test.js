const { expect } = require('@jest/globals');
const sum = require('./sum');
let numbers = [0,1,2,3,4,5,6]
test('adds 1 + 2 to equal 3', () => {
    for(let i=0; i<numbers.length; i++){
        let a = numbers[i]
        for(let ii=0; ii<numbers.length; ii++){
            let b = numbers[ii]
            expect(sum(a, b)).toBe(a+b);
        }
    }
});