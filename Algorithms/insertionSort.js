function insertionSort(arr) {
  let temp;

  for (let i = 1; i < arr.length; i++) {
    temp = arr[i]; // Store the current element in a temporary variable

    // Compare the current element with the elements before it and shift them to the right if necessary
    for (var j = i - 1; arr[j] > temp && j > -1; j--) {
      arr[j + 1] = arr[j]; // Shift elements to the right
    }

    arr[j + 1] = temp; // Insert the current element in its correct position
  }

  return arr;
}

const arr = [4, 9, 1, 0, 7, 3, 6];
insertionSort(arr);
console.log(arr); // Output : [0, 1, 3, 4, 6, 7, 9]

// Time Complexity -> O(n^2) (best case scenario where the input array is already sorted, the time complexity reduces to O(n) as there are no shifts required )
// Space Complexity -> O(1)
