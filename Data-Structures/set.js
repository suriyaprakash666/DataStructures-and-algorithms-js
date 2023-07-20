class SetDS {
  constructor() {
    this.set = {};
  }

  // Add an element to the set.
  add(element) {
    this.set[element] = true;
    return this;
  }

  // Check if an element exists in the set.
  has(element) {
    return element in this.set;
  }

  // Remove an element from the set.
  delete(element) {
    if (this.has(element)) {
      delete this.set[element];
      return true;
    }
    return false;
  }

  // Get all elements in the set.
  values() {
    return Object.keys(this.set);
  }

  // Get the number of elements in the set.
  size() {
    return Object.keys(this.set).length;
  }

  // Clear the set, removing all elements.
  clear() {
    this.set = {};
  }
}

// Example usage of the SetDS class
const mySet = new SetDS();

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet.has(2)); // Output: true
console.log(mySet.values()); // Output: [ "1", "2", "3" ]

console.log(mySet.size()); // Output: 3

mySet.delete(2);
console.log(mySet.has(2)); // Output: false

mySet.clear();
console.log(mySet.values()); // Output: []
console.log(mySet.size()); // Output: 0
