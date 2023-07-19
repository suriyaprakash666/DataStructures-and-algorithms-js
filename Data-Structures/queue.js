// <------------- Queue Implementation Array -------------->
class Array {
  constructor() {
    this.array = [];
  }

  print() {
    console.log(this.array);
  }

  unshift(value) {
    // Add a value to the beginning of the array
    return this.array.unshift(value);
  }

  pop() {
    // Remove the last element from the array
    this.array.pop();
  }

  top() {
    // Returns the top element
    return this.array[this.array.length - 1];
  }
}

const myArray = new Array();
myArray.unshift(10);
myArray.unshift(20);
myArray.unshift(30);
myArray.unshift(40);
myArray.unshift(50);

myArray.print(); // [10, 20, 30, 40, 50]

myArray.pop();
myArray.print(); // [10, 20, 30, 40]

console.log("Top -> " + myArray.top());

// <------------- Queue Implementation using Linked List -------------->

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode; // Reference to the first node (head)
    this.tail = newNode; // Reference to the last node (tail)
    this.length = 1; // Length of the linked list
  }

  // Print the values of all nodes in the linked list
  printList() {
    let temp = this.head;
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  // Get the length of the linked list
  getLength() {
    console.log("Length -> " + this.length);
  }

  // Get the value of the tail node
  top() {
    if (!this.tail) {
      console.log("Tail -> null");
    } else {
      console.log("Tail -> " + this.tail.value);
    }
  }

  // Add a new node to the beginning of the linked list (unshift operation)
  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the linked list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the linked list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Remove the last node from the linked list (pop operation)
  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

// Create a new instance of the LinkedList class
const node1 = new LinkedList(10);

// Perform operations on the linked list
node1.enqueue(20);
node1.enqueue(30);
node1.enqueue(40);
node1.enqueue(50);

node1.dequeue();

node1.printList();

node1.top();
