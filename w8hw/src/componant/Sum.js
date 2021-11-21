import React from 'react'

export default function Sum() {
    
    const num =[1, 2, 3, 4];
    
    const sum = num.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
    },0)
    return (
        <div>
            {console.log(sum)}
        </div>
    )
}
