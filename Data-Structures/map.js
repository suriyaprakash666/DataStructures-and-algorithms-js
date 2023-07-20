class MapDS {
  constructor() {
    this.map = {};
  }

  // Set a key-value pair in the map.
  set(key, value) {
    this.map[key] = value;
    return this;
  }

  // Get the value associated with a given key.
  get(key) {
    return this.map[key];
  }

  // Check if a key exists in the map.
  has(key) {
    return key in this.map;
  }

  // Remove a key-value pair from the map.
  delete(key) {
    if (this.has(key)) {
      delete this.map[key];
      return true;
    }
    return false;
  }

  // Get all keys in the map.
  keys() {
    return Object.keys(this.map);
  }

  // Get all values in the map.
  values() {
    return Object.values(this.map);
  }

  // Get the number of key-value pairs in the map.
  size() {
    return Object.keys(this.map).length;
  }

  // Clear the map, removing all key-value pairs.
  clear() {
    this.map = {};
  }
}

// Example usage of the MapDS class
const myMap = new MapDS();

myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("country", "USA");

console.log(myMap.get("name")); // Output: "John"
console.log(myMap.has("age")); // Output: true

console.log(myMap.keys()); // Output: [ "name", "age", "country" ]
console.log(myMap.values()); // Output: [ "John", 30, "USA" ]

console.log(myMap.size()); // Output: 3

myMap.delete("age");
console.log(myMap.has("age")); // Output: false

myMap.clear();
console.log(myMap.keys()); // Output: []
console.log(myMap.size()); // Output: 0
