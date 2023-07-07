function selectionSort(array) {
  let min;

  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    min = i; // Assume the current element as the minimum

    // Find the index of the minimum element in the remaining unsorted portion of the array
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j; // Update the index of the minimum element
      }
    }

    // Swap the current element with the minimum element, if necessary
    if (i !== min) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
}

const array = [7, 3, -2, 0, 1, -1, 6, 4];
selectionSort(array);
console.log(array); // Output : [-2, -1, 0, 1, 3, 4, 6, 7]

// Time Complexity -> O(n^2)
// Space Complexity -> O(n)
