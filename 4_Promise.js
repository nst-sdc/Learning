/**
 * TOPIC: PROMISES
 * 
 * Theory:
 * - A Promise represents a value that will be available now, later, or never.
 * - Used for handling asynchronous tasks like fetching data.
 * - States:
 *   1. Pending: Still running.
 *   2. Fulfilled: Completed successfully.
 *   3. Rejected: Failed due to an error.
 */

// 1. Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Change this to false to test rejection

    setTimeout(() => {
        if (success) {
            resolve("Operation Successful");
        } else {
            reject("Operation Failed");
        }
    }, 1500);
});

console.log("1. Promise created, waiting...");

// 2. Consuming a Promise (.then, .catch, .finally)
myPromise
    .then((message) => {
        console.log("2. Success:", message);
    })
    .catch((error) => {
        console.log("2. Error:", error);
    })
    .finally(() => {
        console.log("3. Promise finished");
    });

// 3. Chaining Promises (Simple Example)
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

wait(2000)
    .then(() => {
        console.log("\n--- Chaining ---");
        console.log("Waited 2 seconds");
        return wait(1000);
    })
    .then(() => {
        console.log("Waited 1 more second");
    });
