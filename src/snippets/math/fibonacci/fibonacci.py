def fibonacci(n):
    """
    Generate the nth Fibonacci number.
    
    Parameters:
    n (int): The position in the Fibonacci sequence (0-indexed).
    
    Returns:
    int: The nth Fibonacci number.
    """
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        a, b = 0, 1
        for _ in range(2, n + 1):
            a, b = b, a + b
        return b

# Usage examples
if __name__ == "__main__":
    print(fibonacci(0))  # Output: 0
    print(fibonacci(1))  # Output: 1
    print(fibonacci(5))  # Output: 5
    print(fibonacci(10)) # Output: 55
    print(fibonacci(15)) # Output: 610

"""
Explanation:
The fibonacci function calculates the nth Fibonacci number using an iterative approach.
The Fibonacci sequence is defined as:
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) for n > 1

The function uses a loop to compute the sequence up to the nth number, which is more efficient than a recursive approach.
"""