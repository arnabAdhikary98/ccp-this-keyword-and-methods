function multiplyNumbers(a, b) {
    console.log(`When we multiply ${mul.firstNumber} and ${mul.secondNumber}, we get ${a * b}.`);
}

let mul = { firstNumber: "Number One", secondNumber: "Number Two" };

multiplyNumbers.apply(mul, [5, 10]); // Expected Output: When we multiply Number One and Number Two, we get 50.