// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// export const add = (...number)=>{

//   if (number == 0){
//     return 0
//   }else 

//   return number.reduce(reducer)
// }

export const filter = (str) => {
  if (str === '' ) return "Unknown";
  else if(str.includes(" ")) return str.split(" ").join('')
  else if (str.length>10) return str.slice(0,10)
  else if (str.includes("_")) return str.split("_").join('')
}