function quickSort(arr) {
  // Base case: If the array has less than 2 elements, it is already sorted
  if (arr.length < 2) {
    return arr;
  }

  // Choose a pivot element
  let pivot = arr[Math.floor(arr.length / 2)];

  // Initialize arrays to store elements less than, equal to, and greater than the pivot
  let left = [];
  let middle = [];
  let right = [];

  // Partition the array into three subarrays based on the pivot
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements less than the pivot go into the left array
    } else if (arr[i] === pivot) {
      middle.push(arr[i]); // Elements equal to the pivot go into the middle array
    } else {
      right.push(arr[i]); // Elements greater than the pivot go into the right array
    }
  }

  // Recursively sort the left and right subarrays, and concatenate the results
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

const arr = [8, 2, 0, 4, 7, 1, 6, 3];
let result = quickSort(arr);
console.log(result); // Output : [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Time Complexity -> O(n log n) on average and O(n^2) in the worst case (when the pivot selection is unbalanced), but it is typically efficient in practice.
// Space Complexity -> O(log n) for the recursive call stack.
