const reducer = (previousValue, currentValue) => previousValue + currentValue;

export const add=((...num)=>{
    return num.reduce(reducer,0)}
    )

// 
export const filter = (name)=>{
   if(name == ''){
   return "unknown"
}if(name.includes(" ")){
    name = name.replaceAll(' ', '')
}if (name[0]===("_")){
    name= name.substring(1)
}return name.substring(0,10)
}