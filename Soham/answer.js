/*
 * ======================================================
 *  ADVANCED JAVASCRIPT ASSIGNMENT
 *  Arrays, Objects, Callbacks, Promises, Async/Await, Timers
 *  Each question has space for writing the solution.
 *  Create name of your folder name , and then answer these
     questions in seperate file. 
 * ======================================================
 */

//
// ======================================================
//                CATEGORY 1: MEDIUM LEVEL
// ======================================================
//

// ---------- ARRAYS (1–5) ----------

// 1. Write a function that returns the second largest number in an array.
// Solution:
function getSecondLargest(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (const num of numbers) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    }
    else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  return secondLargest;
}

// 2. Return all strings with length > 4 from an array.
// Solution:
function filterLongStrings(strings) {
  return strings.filter(str => str.length > 4);
}

// 3. Convert an array of numbers to their squares using .map().
// Solution:
function squareNumbers(numbers) {
  return numbers.map(n => n * n);
}

// 4. Remove duplicate values from an array (without using Set).
// Solution:
function removeDuplicates(array) {
  const unique = [];

  for (const item of array) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  return unique;
}

// 5. Count how many times each element appears in an array (return an object).
// Solution:
function countOccurrences(array) {
  const counts = {};

  for (const value of array) {
    if (counts[value]) {
      counts[value]++;
    } else {
      counts[value] = 1;
    }
  }

  return counts;
}

// ---------- OBJECTS (6–10) ----------

// 6. Write a function that returns all keys of an object in an array.
// Solution:
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// 7. Given an object of item prices, return the total cost.
// Solution:
function getTotalCost(priceList) {
  let total = 0;

  for (const item in priceList) {
    total += priceList[item];
  }

  return total;
}

// 8. Write a function that checks if an object is empty.
// Solution:
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// 9. Merge two objects without using the spread operator.
// Solution:
function mergeObjects(obj1, obj2) {
  const result = {};

  Object.assign(result, obj1);
  Object.assign(result, obj2);

  return result;
}

// 10. Create an object with a method that returns "Hello, <name>" using this.
// Solution:
const person = {
  name: "Boss",
  greet() {
    return `Hello, ${this.name}`;
  }
};




//
// ======================================================
//                   CATEGORY 2: HARD LEVEL
// ======================================================
//

// ---------- CALLBACKS (1–2) ----------

// 1. Write a function repeatTask(n, task) that runs a callback n times.
// Solution:

// 2. Simulate fetching a user with a callback after a delay.
// Solution:

// ---------- PROMISES (3–5) ----------

// 3. Convert a callback-based function into a promise-based one.
// Solution:


// 4. Write loadData() that resolves in 2s or rejects randomly (50% chance).
// Solution:



// 5. Chain: loadUser → loadPosts → loadComments.
// Each returns a promise.
// Solution:


// ---------- ASYNC/AWAIT (6–7) ----------

// 6. Rewrite question 5 using async/await instead of .then().
// Solution:

// 7. Write an async function that fetches two promises in parallel.
// Solution:



// ---------- TIMERS + LOGIC (8–10) ----------

// 8. Print numbers from 10 down to 1 using a timer, then print "Done".
// Solution:


// 9. Implement a throttled function that runs once every 2 seconds.
// Solution:


// 10. Implement a debounced function that runs only when typing stops for 500ms.
// Solution:


//
// ======================================================
//                CATEGORY 3: BONUS QUESTIONS
// ======================================================
//

// ---------- ARRAYS & OBJECTS (1–3) ----------

// 1. Convert an array of users into an object using their id as the key.
// Solution:
const usersById = {};
for (const user of users) {
  usersById[user.id] = user;
}


// 2. Given students with marks, return the top 3 scorers.
// Solution:
const three = (res) => {
  const arr = [...res];

  for (let i = 0; i < arr.length - 1; i++) {
    let maxIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].marks > arr[maxIdx].marks) {
        maxIdx = j;
      }
    }
    [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]]; // swap
  }

  return arr.slice(0, 3);
};

console.log(three(res));



// 3. Flatten [[1,2],[3,4],[5]] into [1,2,3,4,5] without using .flat().
// Solution:
const arr = [[1,2],[3,4],[5]];
let flat = [];

for (let lis of arr) {
    for (let ele of lis) {
        flat.push(ele);
    }
}

console.log(flat);


// ---------- CALLBACKS / PROMISES / ASYNC (4–6) ----------

// 4. Create retry(fn, attempts) that retries a failing promise.
// Solution:



// 5. Create a delay(ms) function and print numbers 1 to 5 with pauses.
// Solution:



// 6. Run two async tasks but fail fast if either rejects.
// Solution:




// ---------- TIMERS / LOGIC (7–10) ----------

// 7. Build a clock that prints the current time every second.
// Solution:



// 8. Build a function that measures how long another function takes to run.
// Solution:



// 9. Create a countdown timer with pause, resume, and reset.
// Solution:



// 10. Explain the output order of:
// Write explanation here:





//
// ======================================================
//                      MINI PROJECTS
// ======================================================
//

// ---------- PROJECT 1: Task Scheduler ----------
// Build a small task scheduler that:
// - Accepts tasks
// - Schedules them using setTimeout
// - Prints "Task <name> executed"
// - Allows canceling tasks
// Solution starter:






// ---------- PROJECT 2: Mini Quiz App ----------
// Requirements:
// - Store questions in an array of objects
// - 10-second timer per question
// - Auto-move to next question
// - Show final score
// Solution starter:






