using System;

class MergeSort
{
    public static void Sort(int[] array)
    {
        if (array.Length <= 1)
            return;

        int mid = array.Length / 2;
        int[] left = new int[mid];
        int[] right = new int[array.Length - mid];

        Array.Copy(array, 0, left, 0, mid);
        Array.Copy(array, mid, right, 0, array.Length - mid);

        Sort(left);
        Sort(right);
        Merge(array, left, right);
    }

    private static void Merge(int[] array, int[] left, int[] right)
    {
        int leftIndex = 0, rightIndex = 0, targetIndex = 0;

        while (leftIndex < left.Length && rightIndex < right.Length)
        {
            if (left[leftIndex] <= right[rightIndex])
            {
                array[targetIndex++] = left[leftIndex++];
            }
            else
            {
                array[targetIndex++] = right[rightIndex++];
            }
        }

        while (leftIndex < left.Length)
        {
            array[targetIndex++] = left[leftIndex++];
        }

        while (rightIndex < right.Length)
        {
            array[targetIndex++] = right[rightIndex++];
        }
    }

    public static void Main(string[] args)
    {
        int[] array = { 38, 27, 43, 3, 9, 82, 10 };
        Console.WriteLine("Original array: " + string.Join(", ", array));

        Sort(array);

        Console.WriteLine("Sorted array: " + string.Join(", ", array));
    }
}