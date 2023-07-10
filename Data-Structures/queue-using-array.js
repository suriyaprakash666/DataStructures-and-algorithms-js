class Queue {
  constructor() {
    this.array = [];
  }
  print() {
    console.log("Array Elements -> " + this.array);
  }
  enqueue(value) {
    this.array.push(value); // Add the value to the end of the array
  }
  dequeue() {
    return this.array.shift(); // Remove and return the first element of the array
  }
  top() {
    return this.array[0]; // Return the first element of the array without removing it
  }
}

const myQueue = new Queue(); // Create a new stack object
// Add elements to the stack
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);

myQueue.print(); // Print all the elements in the stack: [10, 20, 30, 40, 50]

myQueue.dequeue(); // Remove and return the last element (50) from the stack

myQueue.print(); // Print the updated elements in the stack after popping: [10, 20, 30, 40]

console.log("Top element -> " + myQueue.top()); // Print the last element (40) in the stack without removing it
