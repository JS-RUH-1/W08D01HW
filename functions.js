function sum (...nums){
    return nums.reduce((a,b) => a+b, 0)
}


function filter ( string ){
    if ( string ){
        if ( string == "" ){
            return "Unknown";
        }else if ( /\s/g.test(string) ){
            string.replace(/\s/g, '');
        }else if (string.length > 10){
            return string.substring(0, 9);
        }else if ( string.startsWith("_")){
            return string.substring(1);
        }
    }
    return "Unknown";
}

module.exports = {sum, filter}


// If the string is empty then return "Unknown".
// If the string passed with white space return it with no space.
// If the length of string passed more than 10 return only the first 10 characters.
// If the string passed started with underscore return it without underscore.
