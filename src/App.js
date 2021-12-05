export const add = (...arg)=>
{
    return arg.length==0?0: arg.reduce((acc,cur)=>{return acc+cur})
}


export const filter = (str) => {
    if(str.length === 0) {
        return "Unknown"
      }else if(str[0] === "_"){
        return str.substring(1).replace(' ','').slice(0, 10)
      }else {
        return str.replace(' ','').slice(0, 10)
      }
  }
  
