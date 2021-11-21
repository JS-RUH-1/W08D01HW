

const add = (...params)=>{
    if(params.length==0)
    return 0;
    return params.reduce((acc,curr)=>acc+curr)
  }
  
  const filterWord = (str)=>{
    let temp=str
    if(temp==undefined || temp=="")
      temp = 'Unknown'
    if(temp.includes(' '))
      temp = temp.replace(/ /g, '')
    if(temp[0]=='_')
      temp=temp.slice(1,temp.length);
    if(temp.length>10)
      temp=temp.slice(0,10)
    return temp
  }
  
  module.exports.filterWord = filterWord;
  module.exports.add = add;