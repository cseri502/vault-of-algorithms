-- Function to calculate Fibonacci sequence
function fibonacci(n)
    if n <= 0 then
        return 0
    elseif n == 1 then
        return 1
    else
        return fibonacci(n - 1) + fibonacci(n - 2)
    end
end

-- Usage examples
print("Fibonacci of 0: " .. fibonacci(0))  -- Output: 0
print("Fibonacci of 1: " .. fibonacci(1))  -- Output: 1
print("Fibonacci of 5: " .. fibonacci(5))  -- Output: 5
print("Fibonacci of 10: " .. fibonacci(10)) -- Output: 55

-- Explanation:
-- The fibonacci function calculates the nth Fibonacci number.
-- The Fibonacci sequence is defined as:
-- F(0) = 0
-- F(1) = 1
-- F(n) = F(n-1) + F(n-2) for n > 1
-- This implementation uses a recursive approach to calculate the Fibonacci number.