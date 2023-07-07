function linearSearch(arr, tar) {
  // Iterate through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target, return the index
    if (arr[i] === tar) {
      return i;
    }
  }

  // If the target element is not found, return -1 or any appropriate value
  return -1;
}

const arr = [3, 8, -4, 7, 1, 2, 9];
const result = linearSearch(arr, 7);
console.log(result); // Output : 3 -> returns the index of the target

// Time Complexity -> O(n)
// Space Complexity ->O(1)
