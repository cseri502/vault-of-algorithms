def quick_sort(arr):
    """
    Sorts an array in place using the quick sort algorithm.

    Parameters:
    arr (list): The list of elements to be sorted.

    Returns:
    None
    """
    def partition(low, high):
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1

    def quick_sort_recursive(low, high):
        if low < high:
            pi = partition(low, high)
            quick_sort_recursive(low, pi - 1)
            quick_sort_recursive(pi + 1, high)

    quick_sort_recursive(0, len(arr) - 1)

# Example usage
if __name__ == "__main__":
    example_array = [10, 7, 8, 9, 1, 5]
    print("Original array:", example_array)
    quick_sort(example_array)
    print("Sorted array:", example_array)