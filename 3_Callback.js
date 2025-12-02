/**
 * TOPIC: CALLBACKS
 * 
 * Theory:
 * - A callback is a function passed as an argument to another function.
 * - It runs after the main function finishes its task.
 * - Callbacks are commonly used to handle asynchronous operations.
 */

// 1. Simple Synchronous Callback
function greet(name, callbackFunction) {
    console.log("Hello, " + name + "!");
    callbackFunction(); // Execute the callback
}


function sayGoodbye() {
    console.log("Goodbye!");
}


console.log("--- Synchronous Callback ---");
greet("John", sayGoodbye);

// 2. Asynchronous Callback (Simulation)
function orderPizza(flavor, callback) {
    console.log("Ordering a " + flavor + " pizza...");

    // setTimeout simulates delay (like preparing food)
    setTimeout(() => {
        console.log("Pizza " + flavor + " is ready!");
        callback();
    }, 2000);
}

function eatPizza() {
    console.log("Eating the pizza now.");
}

console.log("\n--- Asynchronous Callback ---");
orderPizza("Pepperoni", eatPizza);
console.log("Doing other tasks while waiting...");
