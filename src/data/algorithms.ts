import { Algorithm } from '../types';

export const algorithms: Algorithm[] = [
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'A search algorithm that finds the position of a target value within a sorted array.',
    category: 'Search',
    implementations: {
      javascript: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
}`,
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1`,
      csharp: `public static int BinarySearch(int[] arr, int target)
{
    int left = 0;
    int right = arr.Length - 1;
    
    while (left <= right)
    {
        int mid = (left + right) / 2;
        
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1;
}`
    }
  },
  {
    id: 'quick-sort',
    name: 'Quick Sort',
    description: 'An efficient, in-place sorting algorithm that uses a divide-and-conquer strategy.',
    category: 'Sorting',
    implementations: {
      javascript: `function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
      python: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
        
    pivot = arr[-1]
    left = []
    right = []
    
    for x in arr[:-1]:
        if x < pivot:
            left.append(x)
        else:
            right.append(x)
            
    return quick_sort(left) + [pivot] + quick_sort(right)`,
      csharp: `public static List<T> QuickSort<T>(List<T> arr) where T : IComparable
{
    if (arr.Count <= 1) return arr;
    
    var pivot = arr[arr.Count - 1];
    var left = new List<T>();
    var right = new List<T>();
    
    for (int i = 0; i < arr.Count - 1; i++)
    {
        if (arr[i].CompareTo(pivot) < 0)
            left.Add(arr[i]);
        else
            right.Add(arr[i]);
    }
    
    var result = QuickSort(left);
    result.Add(pivot);
    result.AddRange(QuickSort(right));
    return result;
}`
    }
  },
  {
    id: 'fibonacci',
    name: 'Fibonacci',
    description: 'Generates the Fibonacci sequence where each number is the sum of the previous two.',
    category: 'Mathematics',
    implementations: {
      javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  
  let prev = 0;
  let curr = 1;
  
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  
  return curr;
}`,
      python: `def fibonacci(n):
    if n <= 1:
        return n
        
    prev, curr = 0, 1
    
    for i in range(2, n + 1):
        next = prev + curr
        prev = curr
        curr = next
        
    return curr`,
      csharp: `public static int Fibonacci(int n)
{
    if (n <= 1) return n;
    
    int prev = 0;
    int curr = 1;
    
    for (int i = 2; i <= n; i++)
    {
        int next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}`
    }
  }
];