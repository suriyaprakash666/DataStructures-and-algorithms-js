class Stack {
  constructor() {
    this.array = [];
  }
  print() {
    console.log("Array Elements -> " + this.array);
  }
  push(value) {
    this.array.push(value); // Add the value to the end of the array
  }
  pop() {
    return this.array.pop(); // Remove and return the last element of the array
  }
  peek() {
    return this.array[this.array.length - 1]; // Return the last element of the array without removing it
  }
}

const myStack = new Stack(); // Create a new stack object
// Add elements to the stack
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.push(50);

myStack.print(); // Print all the elements in the stack: [10, 20, 30, 40, 50]

myStack.pop(); // Remove and return the last element (50) from the stack

myStack.print(); // Print the updated elements in the stack after popping: [10, 20, 30, 40]

console.log("Peek element -> " + myStack.peek()); // Print the last element (40) in the stack without removing it
