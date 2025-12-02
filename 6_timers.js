/**
 * TOPIC: TIMERS
 * 
 * Theory:
 * - Timers let JavaScript delay or repeat execution of code.
 * - Handled by the browser or Node.js (Web APIs), not the JS engine itself.
 * - Two main timers:
 *   1. setTimeout: Run once after a delay.
 *   2. setInterval: Run repeatedly at fixed intervals.
 */

// 1. setTimeout: Run once after a delay
console.log("1. Starting setTimeout...");

const timeoutId = setTimeout(() => {
    console.log("   -> This runs after 2 seconds");
}, 2000);


// 2. clearTimeout: Cancel a scheduled timeout
const cancelMe = setTimeout(() => {
    console.log("This will not run");
}, 3000);

clearTimeout(cancelMe); // Timeout cancelled


// 3. setInterval: Run repeatedly
let count = 0;
console.log("2. Starting setInterval (Counter)...");

const intervalId = setInterval(() => {
    count++;
    console.log("   -> Count:", count);

    // Stop after 5 iterations
    if (count === 5) {
        clearInterval(intervalId);
        console.log("   -> Interval stopped");
    }
}, 1000); // Runs every 1 second
