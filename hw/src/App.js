export const sum = (num1, num2) => {
  if (num1 == null || num2 == null) {
    return 0;
  } else {
    return num1 + num2;
  }
};

export const numReduce = (...num) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return num.reduce(reducer, 0);
};

export const str = (str) => {
  let strArr = [];
  if (str == "") {
    return "Unknown";
  } else if (str == " ") {
    return "";
  } else if (str.length > 10) {
    return str.slice(0, 10);
  } else if (str.charAt(0) == "_") {
    return str.slice(1);
  }
};
