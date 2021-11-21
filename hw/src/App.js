// const reducer = (previousValue, currentValue) => previousValue + currentValue;
// export const add = (...number)=>{

//   if(number == 0){
//     return 0
//   }
//   else
//   return number.reduce(reducer)
// }



export const string = (str)=>{
  if(str==""){
    return "Unknown"
}
else if (str.includes("")){
  return str.replace(/\s/g, "")
}
else if (str.startswith("_")){
  return str.substring(1)

}
else if (str.length >10){
  return str.slice(0,10)
}
}



