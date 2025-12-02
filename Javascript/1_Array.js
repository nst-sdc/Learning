/**
 * TOPIC: ARRAYS
 * 
 * Theory:
 * - An array is a container that holds multiple values in one variable.
 * - Useful when you want to group related data together.
 * - Arrays are zero-indexed, meaning the first element is at index 0.
 * - They can store any type: strings, numbers, objects, even other arrays.
 */

// 1. Creating an Array
const fruits = ["Apple", "Banana", "Cherry"];
console.log("My Fruits:", fruits);

// 2. Accessing Elements
console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);

// 3. Modifying Elements
fruits[1] = "Blueberry";
console.log("After modifying:", fruits);

// 4. Basic Methods
// push(): adds an item at the end
fruits.push("Date");
console.log("After push:", fruits);

// pop(): removes the last item
const removed = fruits.pop();
console.log("Removed item:", removed);
console.log("After pop:", fruits);

// length: total number of elements
console.log("Total fruits:", fruits.length);

// 5. Iterating through an Array
console.log("--- Fruit List ---");
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

// 6. Common Array Operations (Map & Filter)
const numbers = [1, 2, 3, 4, 5];

// map(): transforms each element into a new value
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// filter(): keeps only elements that meet a condition
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

/**
 * Additional Useful Methods:
 * 
 * - includes(): checks if a value exists
 * - indexOf(): finds the position of a value
 * - slice(): copies a portion of an array
 * - splice(): adds/removes elements at specific positions
 */

console.log("Includes 3:", numbers.includes(3));
console.log("Index of 4:", numbers.indexOf(4));

const sliced = numbers.slice(1, 4); // from index 1 to 3
console.log("Slice:", sliced);

const spliced = [...numbers];
spliced.splice(2, 1); // remove 1 element at index 2
console.log("Splice result:", spliced);
