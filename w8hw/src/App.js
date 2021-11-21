// import logo from './logo.svg';
import './App.css';
// import Sum from './componant/Sum'

// function App() {
//   return (
//     <div className="App">
//       <Sum />
//     </div>
//   );
// }



// const num =(n,y,x);

// function sum(...num){

//  num.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// },0)
// }
// console.log(sum)


const reducer = (previousValue, currentValue) => previousValue + currentValue;
 const sum = ((...num) =>{
  return num.reduce(reducer)
 })

//  -------------------------------------------------------
export function text(text){

    if(text== ""){

      return "Unknown"
  
    }else if ( text.includes(" ") ){

      text =text.split(" ").join("")
  
    }else if(text.startsWith("_")){
      text= text.substring(1);

    }else if (text.length < 10 ) {
      //her maby we need an arry
       return text
     }return text.substring(0,10)
     
     
  }


//   if(text== undefined){

//     return "Unknown"

//   }
//   else if ( /\s/g.test(string) ){

//     string.replace(/\s/g, '');

//   } else if (text.length > 10 ) {
//    //her maby we need an arry
//     return text.substring(0, 9); 

//   } else if (condition) {
    
//     return 

//   }{
    
//   }
// }

// export default sum;
// export default text;