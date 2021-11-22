// ----------------------------1
function sum (...num){
    return num.length === 0 ? 0 : num.reduce ((a,b)=>{
        return a+b ;

    }
    )
}
// module.exports = sum

// --------------------------------2
function filterTest (str){
    if (str.length === 0) {
        return "Unknown"
}
else if (str.includes(" ")){
    return str.split (" ").join("")
}
else if (str[0] === "_"){
    return str.slice(1)
}else {
    return str.slice(0,10)
}

}
module.exports = {filterTest,sum}