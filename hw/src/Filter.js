function Filter(str) {
  if (str === "") return "Unknown";
  if (str.includes(" ")) str = str.split(" ").join("");
  if (str[0] === "_") str = str.substring(1);
  return str.substring(0, 10);
}

export default Filter;
