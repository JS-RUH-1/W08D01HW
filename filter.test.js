const { expect } = require('@jest/globals');
const filter = require('./filter');
let cases = {"With Whitespace": "WithWhites", "Longer Ten Chars": "LongerTenC", "_underscore": "underscore"}

test("Filter a string based on specific rules", () => {
    let keys = Object.keys(cases)
    for(let i=0; i<keys.length; i++){
        expect(filter(keys[i])).toBe(cases[keys[i]])
    }
})
