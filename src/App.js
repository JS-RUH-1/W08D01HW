export const add = (...arg) =>{
    return arg.length === 0 ? 0 : arg.reduce((acc, cur) => {
        return acc + cur
   })
}
export const filter = (str) =>{
    let str1;
    str[0] === '_'? str1 = str.substring(1) : str1 = str;
    return str1.length === 0? 'Unknown': str1.trim().slice(0,10)
}
