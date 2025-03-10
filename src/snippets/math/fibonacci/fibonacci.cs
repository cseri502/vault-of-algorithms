using System;

namespace VaultOfAlgorithms.Maths
{
    public static class Fibonacci
    {
        // Function to calculate Fibonacci sequence up to n terms
        public static int[] GenerateFibonacci(int n)
        {
            if (n <= 0) return new int[0];
            if (n == 1) return new int[] { 0 };

            int[] fibonacciSequence = new int[n];
            fibonacciSequence[0] = 0;
            fibonacciSequence[1] = 1;

            for (int i = 2; i < n; i++)
            {
                fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
            }

            return fibonacciSequence;
        }

        // Main method to demonstrate the usage of GenerateFibonacci function
        public static void Main(string[] args)
        {
            int n = 10; // Number of terms in the Fibonacci sequence
            int[] fibonacciSequence = GenerateFibonacci(n);

            Console.WriteLine($"Fibonacci sequence up to {n} terms:");
            foreach (int term in fibonacciSequence)
            {
                Console.Write(term + " ");
            }
        }
    }
}