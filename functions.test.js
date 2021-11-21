const { sum, filter } = require ("./functions");


test('Testing Sum', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum()).toBe(0);
    expect(sum(1, 2, 3, 4)).toBe(10);
});


test('Testing Fillter', () => {
    expect(filter("")).toBe("Unknown");
    expect(filter("S p a c e")).toBe("Space");
    expect(filter("Get first10 chars :)")).toBe("Get first1");
    expect(filter("_basel")).toBe("basel");

}); 

// If the string is empty then return "Unknown".
// If the string passed with white space return it with no space.
// If the length of string passed more than 10 return only the first 10 characters.
// If the string passed started with underscore return it without underscore.