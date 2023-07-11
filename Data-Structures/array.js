class Array {
  constructor() {
    this.array = [];
  }

  print() {
    console.log(this.array);
  }

  push(value) {
    // Add a value to the end of the array
    return this.array.push(value);
  }

  pop() {
    // Remove the last element from the array
    this.array.pop();
  }

  unshift(value) {
    // Add a value to the beginning of the array
    return this.array.unshift(value);
  }

  shift() {
    // Remove the first element from the array
    this.array.shift();
  }

  get(index) {
    // Retrieve and print the value at the specified index
    console.log(this.array[index]);
  }

  set(value, index) {
    // Update the value at the specified index with a new value
    this.array[index] = value;
    return this.array;
  }

  insert(value, index) {
    // Shift elements to the right starting from the last element
    for (let i = this.array.length - 1; i >= index; i--) {
      this.array[i + 1] = this.array[i];
    }
    // Insert the new value at the specified index
    this.array[index] = value;
    return this.array;
  }

  remove(index) {
    // Shift elements to the left starting from the specified index
    for (let i = index; i < this.array.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    // Decrease the array length to remove the last element
    this.array.length--;
  }

  reverse() {
    // Reverse the order of elements in the array
    console.log(this.array.reverse());
  }
}

const myArray = new Array();
myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(40);
myArray.push(50);

myArray.print(); // [10, 20, 30, 40, 50]

myArray.pop();
myArray.print(); // [10, 20, 30, 40]

myArray.unshift(5);
myArray.print(); // [5, 10, 20, 30, 40]

myArray.shift();
myArray.print(); // [10, 20, 30, 40]

myArray.get(3); // 40

myArray.set(33, 2);
myArray.insert(44, 1);
myArray.print(); // [10, 44, 33, 20, 30, 40]

myArray.remove(4);
myArray.print(); // [10, 44, 33, 20, 40]

myArray.reverse();
