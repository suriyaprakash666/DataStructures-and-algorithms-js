function mergeSort(arr) {
  // Base case: If the array has less than 2 elements, it is already sorted
  if (arr.length < 2) {
    return arr;
  }

  // Find the middle index of the array
  let middle = Math.floor(arr.length / 2);

  // Divide the array into two halves using slice()
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  // Recursively sort the left and right halves, and merge the results
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sorted = []; // Array to store the merged result

  // Merge the sorted left and right arrays into the sorted array
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift()); // Append the smaller element from the left array
    } else {
      sorted.push(right.shift()); // Append the smaller element from the right array
    }
  }

  // If any elements are remaining in the left or right array, append them to the sorted array
  return [...sorted, ...left, ...right];
}

const arr = [9, 2, 5, 1, 8, 3, 6, 4];
const result = mergeSort(arr);
console.log(result); // Output : [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Time Complexity ->  O(n log n)
// Space Complexity -> O(n)
