//Adding
export const addFunc = (...arr) => {
  return [...arr].reduce((a, b) => a + b, 0)
}


//
export const checkStr = (s) => {
  if(s.length == 0) return 'Unknown';
  if(s[0] == '_'){ return s.slice(1).replace(/\s/g, "").substring(0,10)}
  else return s.replace(/\s/g, "").substring(0,10);
}
