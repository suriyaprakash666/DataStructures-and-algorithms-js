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

  // Get the value of the head node
  getHead() {
    if (!this.head) {
      console.log("Head -> null");
    } else {
      console.log("Head -> " + this.head.value);
    }
  }

  // Get the value of the tail node
  getTail() {
    if (!this.tail) {
      console.log("Tail -> null");
    } else {
      console.log("Tail -> " + this.tail.value);
    }
  }

  // Add a new node to the end of the linked list (push operation)
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the linked list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Remove the last node from the linked list (pop operation)
  pop() {
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

  // Add a new node to the beginning of the linked list (unshift operation)
  unshift(value) {
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

  // Remove the first node from the linked list (shift operation)
  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    return temp;
  }

  // Get the node at a specific index
  get(index) {
    if (index === 0 || index > this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  // Set the value of a node at a specific index
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  // Insert a new node at a specific index
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return undefined;

    let temp = this.get(index);
    const newNode = new Node(value);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return this;
  }

  // Remove a node at a specific index
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index > this.length) return undefined;
    let before = this.get(index - 1);
    let temp = before.next;
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return this;
  }

  // Reverse the order of nodes in the linked list
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

// Create a new instance of the LinkedList class
const node1 = new LinkedList(10);

// Perform operations on the linked list
node1.push(20);
node1.push(30);
node1.push(40);
node1.push(50);

node1.pop();

node1.unshift(5);

node1.shift();

node1.getHead();
node1.getTail();
node1.getLength();

node1.reverse();

node1.printList();
