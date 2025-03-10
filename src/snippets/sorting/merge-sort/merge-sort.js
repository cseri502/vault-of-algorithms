// Merge Sort Algorithm in JavaScript

// Function to merge two subarrays of arr[]
function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    // Create temp arrays
    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    // Copy data to temp arrays
    for (let i = 0; i < n1; i++)
        leftArray[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        rightArray[j] = arr[mid + 1 + j];

    // Merge the temp arrays back into arr[left..right]
    let i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k] = leftArray[i];
            i++;
        } else {
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of leftArray[], if any
    while (i < n1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    // Copy the remaining elements of rightArray[], if any
    while (j < n2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

// Function to implement merge sort
function mergeSort(arr, left, right) {
    if (left >= right) {
        return; // Base case: if the array has one or no element
    }
    let mid = left + Math.floor((right - left) / 2);
    mergeSort(arr, left, mid); // Sort the first half
    mergeSort(arr, mid + 1, right); // Sort the second half
    merge(arr, left, mid, right); // Merge the sorted halves
}

// Usage example
let arr = [12, 11, 13, 5, 6, 7];
console.log("Given array is:", arr);

mergeSort(arr, 0, arr.length - 1);

console.log("Sorted array is:", arr);