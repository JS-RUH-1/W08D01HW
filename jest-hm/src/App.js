
// First
const reducer = (previousValue, currentValue) => previousValue + currentValue;
export const add = (...num) => {
  return [...num].reduce(reducer,0)
}


// Second
export const filterFunc = (str) => {
  if(str === '') return 'Unknown'
  else if(str.includes(" ")) return str.split(" ").join('')
  else if(str.length > 10) return str.slice(0, 10)
  else if(str.includes("_")) return str.split("_").join('')
}

