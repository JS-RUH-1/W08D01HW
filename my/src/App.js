 
 const reducer = (previousValue, currentValue) => previousValue + currentValue;



 export const add =(...numbers) =>{

  if(numbers == 0){
    return 0
  }
  return numbers.reduce(reducer)

 }



 export const text = (value)=>{

  if(value === ''){

    return 'Unknown'
   }
   else if (value.includes(' ')) return value.split(' ').join('')

   else if(value.length >10) return value.slice(0,10)

   else if(value.includes('_')) return value.split('_').join('')

   
    //  else if(value=>value.indexOf(''))
    //  {
    //   return value.replace(/\s/g, '');
    //   }

    //   else if(value.length > 10)
    // {
    //   return  value.slice(0,10);
    // }

    // else if(value => value.startsWith('_')){
    //   return value.substring(1)
    // }

 }

