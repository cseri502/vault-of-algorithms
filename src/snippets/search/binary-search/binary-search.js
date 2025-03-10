/**
 * Binary Search Function
 * @param {Array} sortedArray - The array to search through. Must be sorted.
 * @param {number} target - The value to search for.
 * @returns {number} - The index of the target value in the array, or -1 if not found.
 */
function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            return mid;
        } else if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const result = binarySearch(array, target);

console.log(`Target ${target} found at index: ${result}`); // Output: Target 5 found at index: 4