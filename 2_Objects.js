/**
 * TOPIC: OBJECTS
 * 
 * Theory:
 * - Objects store data in key-value pairs.
 * - Keys act as labels; values hold the data.
 * - Objects are useful for representing structured real-world things.
 * - Values can be anything: strings, numbers, arrays, functions, or other objects.
 */

// 1. Creating an Object
const superhero = {
    name: "Iron Man",
    realName: "Tony Stark",
    isAvenger: true,
    age: 48
};

console.log("Superhero:", superhero);

// 2. Accessing Properties
// Dot notation
console.log("Hero Name:", superhero.name);

// Bracket notation (works with dynamic keys or special characters)
console.log("Real Name:", superhero["realName"]);

// 3. Adding & Updating Properties
superhero.city = "New York";      // Adding new key
superhero.age = 49;               // Updating an existing key

console.log("Updated Superhero:", superhero);

// 4. Objects with Methods
const car = {
    brand: "Tesla",
    model: "Model 3",
    start: function () {
        console.log("Starting " + this.brand + " " + this.model);
    }
};

car.start(); // Method call

// 5. Nested Objects
const student = {
    name: "Alice",
    grades: {
        math: 90,
        science: 85
    }
};

console.log("Math Grade:", student.grades.math);

// 6. Looping Through an Object
const user = {
    username: "coder123",
    level: 5,
    active: true
};

console.log("--- User Details ---");
for (const key in user) {
    console.log(key + ":", user[key]);
}

// 7. Object.keys, Object.values, Object.entries
console.log("Keys:", Object.keys(user));         // ["username", "level", "active"]
console.log("Values:", Object.values(user));     // ["coder123", 5, true]
console.log("Entries:", Object.entries(user));   // [["username","coder123"],["level",5],...]

// 8. Object Destructuring
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 9
};

const { title, rating } = movie;
console.log("Title:", title);
console.log("Rating:", rating);
