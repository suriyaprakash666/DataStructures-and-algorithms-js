class WeakSetDS {
  constructor() {
    this.weakSet = new WeakSet();
  }

  // Add an element to the WeakSet.
  add(element) {
    this.weakSet.add(element);
    return this;
  }

  // Check if an element exists in the WeakSet.
  has(element) {
    return this.weakSet.has(element);
  }

  // Remove an element from the WeakSet.
  delete(element) {
    return this.weakSet.delete(element);
  }

  // Note: WeakSet does not provide a method to get all elements directly.

  // Get the number of elements in the WeakSet.
  size() {
    // Since WeakSet does not have a size property or size() method, we have to use an alternative approach.
    // One way is to count the elements using a loop (Note: this may not be efficient for large WeakSets).
    let count = 0;
    for (const _ of this.weakSet) {
      count++;
    }
    return count;
  }

  // Clear the WeakSet, removing all elements.
  clear() {
    // There is no direct clear method in WeakSet, so we need to set the reference to a new WeakSet.
    this.weakSet = new WeakSet();
  }
}

// Example usage of the WeakSetDS class
const myWeakSet = new WeakSetDS();

const obj1 = { key: "object-1" };
const obj2 = { key: "object-2" };
const obj3 = { key: "object-3" };

myWeakSet.add(obj1);
myWeakSet.add(obj2);

console.log(myWeakSet.has(obj1)); // Output: true
console.log(myWeakSet.size()); // Output: 2

myWeakSet.delete(obj1);
console.log(myWeakSet.has(obj1)); // Output: false

// Note: We cannot directly get all elements in a WeakSet.
// The elements in WeakSet are weakly held, and there is no built-in method to retrieve them all.

myWeakSet.clear();
console.log(myWeakSet.size()); // Output: 0
