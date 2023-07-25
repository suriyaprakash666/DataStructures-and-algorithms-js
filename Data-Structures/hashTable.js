class HashTable {
  // Constructor initializes the HashTable with a given size (default is 7).
  constructor(size = 7) {
    this.dataMap = new Array(size); // An array to store key-value pairs as buckets.
  }

  // Hash function to convert the key into an index within the dataMap array.
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // Calculate the hash by summing the ASCII value of each character multiplied by 23.
      // Then, take the modulo with the size of the dataMap to fit the hash within the array bounds.
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  // Print the content of the dataMap for debugging purposes.
  print() {
    for (let i = 0; i < this.dataMap.length; i++) {
      console.log(i, ":", this.dataMap[i]);
    }
  }

  // Set a key-value pair in the HashTable.
  set(key, value) {
    let index = this._hash(key); // Calculate the index for the key using the hash function.
    if (!this.dataMap[index]) this.dataMap[index] = []; // Create a bucket if it doesn't exist.
    this.dataMap[index].push([key, value]); // Add the key-value pair to the bucket.
    return this; // Return the HashTable object for method chaining.
  }

  // Get the value associated with a given key.
  get(key) {
    let index = this._hash(key); // Calculate the index for the key using the hash function.
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        // Iterate through the bucket to find the key and return its corresponding value.
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined; // If the key is not found, return undefined.
  }

  // Get all the keys in the HashTable.
  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          // Iterate through the buckets and collect all the keys in the HashTable.
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

// Create a new instance of the HashTable.
const myHash = new HashTable();

// Add key-value pairs to the HashTable.
myHash.set("bike", 10);
myHash.set("car", 20);
myHash.set("cycle", 8);
myHash.set("jeep", 12);
myHash.set("boat", 23);
myHash.set("helicopter", 3);

// Get the value associated with the key "car" and log it.
console.log(myHash.get("car")); // Output: 20

// Get all keys in the HashTable and log them.
console.log(myHash.keys()); // Output: [ 'bike', 'car', 'cycle', 'jeep', 'boat', 'helicopter' ]
