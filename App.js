exports.sum = (...args) => {
    if(!args.length) return 0;
    return args.reduce((a,b) => a+b);
}

exports.filter = (str) => {
    if(!str) return "Unknown";
    if(str.includes(" ")) return str.replace(/ /g, "");
    if(str.length > 10) return str.substring(0,10);
    if(str.startsWith("_")) return str.replace("_","");
}

