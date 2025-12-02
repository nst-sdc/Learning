/**
 * TOPIC: ASYNC / AWAIT
 * 
 * Theory:
 * - Async/Await is cleaner syntax for working with Promises.
 * - async: Marks a function that always returns a Promise.
 * - await: Pauses inside an async function until the Promise resolves.
 * - Makes asynchronous code look more readable and sequential.
 */

// Helper function returning a Promise
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded from server");
        }, 2000);
    });
}

// 1. Old Way (Promise .then)
// fetchData().then(data => console.log(data));

// 2. Modern Way (Async/Await)
async function getData() {
    console.log("Fetching data...");

    const data = await fetchData(); // Pauses until resolved

    console.log("Success:", data);
    console.log("Done");
}

getData();

// 3. Error Handling with try...catch
async function getDataWithError() {
    try {
        console.log("\n--- Error Handling Example ---");

        // Simulating a rejected Promise
        await new Promise((_, reject) =>
            setTimeout(() => reject("Network Error"), 1000)
        );

    } catch (error) {
        console.log("Caught an error:", error);
    }
}

// Run after delay so logs don't mix
setTimeout(getDataWithError, 3000);
