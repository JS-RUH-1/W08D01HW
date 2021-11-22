function filter(str){
    if(str == ""){
        return "Unknown"
    }else if(str[0] == "_"){
        str = str.slice(1,11)
        if(str.includes(" ")){
            let new_str = "";
            for(let i=0; i<str.length; i++){
                if(str[i] != " "){
                    new_str += str[i];
                }
            }
            str = new_str
        }
        return str;
    }else if(str.includes(" ")){
        let new_str = "";
        for(let i=0; i<str.length; i++){
            if(str[i] != " "){
                new_str += str[i];
            }
        }
        return new_str.slice(0,10);
    }else if(str.length > 10){
        return str.slice(0, 10);
    }
}


module.exports = filter;