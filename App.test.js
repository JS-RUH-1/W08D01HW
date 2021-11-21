

const {add}=require('./App')
const {filterWord}=require('./App')

test('String manipulation ', () => {
    expect(filterWord()).toBe('Unknown')
    expect(filterWord("")).toBe('Unknown')
    expect(filterWord('_')).toBe('')
    expect(filterWord('_Yasser A')).toBe('YasserA')
    expect(filterWord("123456789000")).toBe('1234567890')
    expect(filterWord("_123456789000")).toBe('1234567890')
    expect(filterWord("_ 1 2 3 456789 000")).toBe('1234567890')
    
})

test('addition of values',()=>{
    expect(add()).toBe(0);
    expect(add(1)).toBe(1);
    expect(add(1,2)).toBe(3);
    expect(add(1,2,5)).toBe(8);
    expect(add(1,2,3,5)).toBe(11);
    expect(add(1,2,3,5,10)).toBe(21);
})