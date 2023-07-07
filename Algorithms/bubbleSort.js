function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // Compare adjacent elements and swap if necessary
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements using destructuring assignment
      }
    }
  }
  return arr;
}

const arr = [9, -3, 7, 1, 4, 2];
bubbleSort(arr);
console.log(arr); // Output : [-3, 1, 2, 4, 7, 9]

// Time Complexity -> O(n^2)
// Space Complexity -> O(1)
