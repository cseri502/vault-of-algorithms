using System;

class BinarySearchExample
{
    // Binary Search function
    public static int BinarySearch(int[] array, int target)
    {
        int left = 0;
        int right = array.Length - 1;

        while (left <= right)
        {
            int mid = left + (right - left) / 2;

            // Check if target is present at mid
            if (array[mid] == target)
                return mid;

            // If target greater, ignore left half
            if (array[mid] < target)
                left = mid + 1;
            // If target is smaller, ignore right half
            else
                right = mid - 1;
        }

        // Target is not present in array
        return -1;
    }

    // Main method to test the binary search function
    static void Main()
    {
        int[] array = { 2, 3, 4, 10, 40 };
        int target = 10;
        int result = BinarySearch(array, target);

        if (result != -1)
            Console.WriteLine("Element found at index " + result);
        else
            Console.WriteLine("Element not present in array");
    }
}