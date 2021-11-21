function Sum(...arg) {
  return [...arg].reduce((a, b) => a + b, 0);
}

export default Sum;
