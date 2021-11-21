
 function  add (...args) {
    return args.reduce(function (acc,cur){
        return acc + cur 
    },0)

}

 function stringCompare (s){
  if (!s.length)return "Unknown"
  let value = s;
  if(s[0]=="_") 
  value = value.slice(1);
  value =  value.split(' ').join('');
  if(value.length>10)
  value = value.slice(0,10);

  return value;


  

 }

module.exports.add = add
module.exports.string = stringCompare




