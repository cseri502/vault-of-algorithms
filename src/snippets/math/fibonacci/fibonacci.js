// Function to generate Fibonacci sequence up to n terms
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Usage examples
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Explanation:
// The fibonacci function generates the Fibonacci sequence up to 'n' terms.
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
// For example, the first 5 terms of the Fibonacci sequence are [0, 1, 1, 2, 3].