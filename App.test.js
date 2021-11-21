const {sum, filter} = require('./App');

test('Sum , toBe', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum()).toBe(0);
    expect(sum(1, 2, 3, 4)).toBe(10);
});


test('Filter, toBe', () => {
    // If the string is empty then return "Unknown".
    expect(filter()).toBe("Unknown");
    // If the string passed with white space return it with no space.
    expect(filter("hello world")).toBe("helloworld");
    // If the length of string passed more than 10 return only the first 10 characters.
    expect(filter("morethantenlength")).toBe("morethante");
    // If the string passed started with underscore return it without underscore.
    expect(filter("_hello")).toBe("hello");

});