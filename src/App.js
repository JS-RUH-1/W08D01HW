

function addNumbers(numbers){
if(numbers == undefined){
    return 0;
}
return numbers.reduce((val,acl)=>{
    return val + acl;
})
}

function checkString(string){
if(string == undefined){
    return 'unknown'
}
if(string == " "){
    return 'with no space'
}
if(string.length>10){
    return 'only the first 10 characters'
}
if(string[0] == "_"){
    return 'no underscore'
}
}



exports.addNumbers = addNumbers;
exports.checkString = checkString;