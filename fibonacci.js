function fibonacci(n) {
  let current = 1;
  let previous = 0;
  let temp = 0;

  for (let i = 0; i < n; i++) {
    temp = current;
    current = current + previous;
    previous = temp;
  }
  console.log(previous);
  return previous;
}

fibonacci(17);
