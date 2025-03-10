// Quick Sort Implementation in JavaScript

// This function takes the last element as pivot, places the pivot element at its correct position in sorted array,
// and places all smaller (smaller than pivot) to left of pivot and all greater elements to right of pivot
function partition(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1); // index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            // swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // swap arr[i + 1] and arr[high] (or pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// The main function that implements QuickSort
// arr[] --> Array to be sorted,
// low  --> Starting index,
// high  --> Ending index
function quickSort(arr, low, high) {
    if (low < high) {
        // pi is partitioning index, arr[pi] is now at right place
        let pi = partition(arr, low, high);

        // Recursively sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Example usage:
const arr = [10, 7, 8, 9, 1, 5];
const n = arr.length;
quickSort(arr, 0, n - 1);
console.log("Sorted array:", arr);