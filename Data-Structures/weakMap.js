class WeakMapDS {
  constructor() {
    this.weakMap = new WeakMap();
  }

  // Set a key-value pair in the WeakMap.
  set(key, value) {
    this.weakMap.set(key, value);
    return this;
  }

  // Get the value associated with a given key.
  get(key) {
    return this.weakMap.get(key);
  }

  // Check if a key exists in the WeakMap.
  has(key) {
    return this.weakMap.has(key);
  }

  // Remove a key-value pair from the WeakMap.
  delete(key) {
    return this.weakMap.delete(key);
  }

  // Note: WeakMap does not provide a method to get all keys or values directly.

  // Get the number of key-value pairs in the WeakMap.
  size() {
    // Since WeakMap does not have a size property or size() method, we have to use an alternative approach.
    // One way is to count the keys using a loop (Note: this may not be efficient for large WeakMaps).
    let count = 0;
    for (const _ of this.weakMap) {
      count++;
    }
    return count;
  }

  // Clear the WeakMap, removing all key-value pairs.
  clear() {
    // There is no direct clear method in WeakMap, so we need to set the reference to a new WeakMap.
    this.weakMap = new WeakMap();
  }
}

// Example usage of the WeakMapDS class
const myWeakMap = new WeakMapDS();

const obj1 = { key: "object-1" };
const obj2 = { key: "object-2" };
const obj3 = { key: "object-3" };

myWeakMap.set(obj1, "value1");
myWeakMap.set(obj2, "value2");

console.log(myWeakMap.get(obj1)); // Output: "value1"
console.log(myWeakMap.has(obj2)); // Output: true

console.log(myWeakMap.size()); // Output: 2

myWeakMap.delete(obj1);
console.log(myWeakMap.has(obj1)); // Output: false

// Note: We cannot directly get all keys or values in a WeakMap.
// The keys in WeakMap are weakly held, and there is no built-in method to retrieve them all.

myWeakMap.clear();
console.log(myWeakMap.size()); // Output: 0
