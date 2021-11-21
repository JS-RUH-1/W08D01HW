
//--------- sum Function---------
export const sum = (...nums) => {
  return nums.length === 0
    ? 0
    : nums.reduce((a, b) => {
        return a + b;
      });
};


//--------- filter Function---------
export const filter = (str) => {
  return str.length === 0
    ? "Unknown"
    : str.includes(" ")
    ? str = str.split(" ").join("")
    : str[0] === "_"
    ? str.slice(1)
    : str.slice(0,10);
};
