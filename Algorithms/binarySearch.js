function binarySearch(arr, tar) {
  let left = 0;
  let right = arr.length - 1;

  // Perform binary search until the left and right pointers meet
  while (left <= right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // If the target element is found at the middle index, return the index
    if (tar === arr[mid]) {
      return mid;
    }

    // If the target is smaller than the element at the middle index,
    // update the right pointer to search in the left half of the array
    if (tar < arr[mid]) {
      right = mid - 1;
    } else {
      // If the target is larger than the element at the middle index,
      // update the left pointer to search in the right half of the array
      left = mid + 1;
    }
  }

  // If the target element is not found, return undefined or any appropriate value
  return;
}

const arr = [-4, 2, 5, 7, 8, 9];
const result = binarySearch(arr, 5);
console.log(result); // Output : 2 -> returns the index of the target

// Time Complexity -> O(log n)
// Space Complexity -> O(1)
