const {sum,filter} = require('./App');

test('Test on the sum function', ()=>{
    expect(sum(1,2)).toBe(3);
    expect(sum()).toBe(0);
    expect(sum(1,3,4,5)).toBe(13);
});

//-------------------


test("Test on the filter function", () => {
    expect(filter("")).toBe("Unknown");
    expect(filter("Maha Alharbi")).toBe("MahaAlharbi");
    expect(filter("_Hello")).toBe("Hello");
    expect(filter("hiiiiiiiiiiii")).toBe("hiiiiiiiii");
});