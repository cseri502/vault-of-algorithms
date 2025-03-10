#include <iostream>
#include <vector>

// Function to generate Fibonacci sequence up to n terms
std::vector<int> generateFibonacci(int n) {
    std::vector<int> fibonacci;
    if (n <= 0) return fibonacci;
    
    fibonacci.push_back(0);
    if (n == 1) return fibonacci;
    
    fibonacci.push_back(1);
    for (int i = 2; i < n; ++i) {
        fibonacci.push_back(fibonacci[i-1] + fibonacci[i-2]);
    }
    return fibonacci;
}

int main() {
    int n;
    std::cout << "Enter the number of terms: ";
    std::cin >> n;

    std::vector<int> fibonacciSequence = generateFibonacci(n);

    std::cout << "Fibonacci sequence up to " << n << " terms:" << std::endl;
    for (int num : fibonacciSequence) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}