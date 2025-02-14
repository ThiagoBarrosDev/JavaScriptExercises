function fibonacci(index) {
    let current = 1;
    let previous = 0;
    let temp = 0;

    for (let i = 1; i < index; i++) {
        temp = current;
        current = current + previous;
        previous = temp;
    }
    return previous
}

console.log(fibonacci(10), "Result");

// temp 1 current 1 previous 1
// temp 1 current 2 previous 1
// temp 2 current 3 previous 2
// temp 3 current 5 previous 3
// temp 5 current 8 previous 5
// temp 8 current 13 previous 8

// fibonacci 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
