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
const sc = (arr)=>{
    mx = arr[0]
    for(let i = 0;i<arr.length;i++){
        if (arr[i]>mx){
            mx = arr[i]
        }
        i1=i
    }
    arr.splice(i1,1)
    mx2 = arr[0]
    for(let i = 0;i<arr.length;i++){
        if (arr[i]>mx2){
            mx2 = arr[i]
        }
    }
    return mx2
}


// 2. Return all strings with length > 4 from an array.
// Solution:

const four =(arr)=>{
    narr=[]
    for(let i =0;i<arr.length;i++){
        if(arr[i].length>4){
            narr.push(arr[i])
        }
    }
    return narr
}

// 3. Convert an array of numbers to their squares using .map().
// Solution:
const map =(arr)=>{
    const sq = arr.map(num=>num**2)
    return sq
}



// 4. Remove duplicate values from an array (without using Set).
// Solution:

const dup = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
            }
        }
    }
    return arr
}

// 5. Count how many times each element appears in an array (return an object).
// Solution:

const count=(arr,ele)=>{
    let count = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i]==ele){
            count+=1
        }
    }
    return count
}

// ---------- OBJECTS (6–10) ----------

// 6. Write a function that returns all keys of an object in an array.
// Solution:
const key = (arr)=>{
    return Object.keys(arr)
}


// 7. Given an object of item prices, return the total cost.
// Solution:
const total = (obj) => {
    return Object.values(obj).reduce((sum, price) => sum + price, 0);
}


// 8. Write a function that checks if an object is empty.
// Solution:
const empty = (obj) => {
    return Object.keys(obj).length === 0;
}



// 9. Merge two objects without using the spread operator.
// Solution:
const add = (obj1, obj2)=>{
    const result = {};
    for (let key in obj1) {
        result[key] = obj1[key];
    }
    for (let key in obj2) {
        result[key] = obj2[key];
    }
    return result;
};



// 10. Create an object with a method that returns "Hello, <name>" using this.
// Solution:
const greet = {
    name: "injora",
    hello() {
        return `Hello, ${this.name}`;
    }
};

console.log(greeter.sayHello());





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
const id = (arr) => {
  const res = {};

  for (let i = 0;i < arr.length;i++) {
    const user= arr[i];
    res[user.id] = user;
  }

  return res;
}



// 2. Given students with marks, return the top 3 scorers.
// Solution:
const three = (res) => {
    let arr = [...res];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].marks < arr[j].marks) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    let result = [];
    for (let i = 0; i < 3 && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
};
console.log(three(res));




// 3. Flatten [[1,2],[3,4],[5]] into [1,2,3,4,5] without using .flat().
// Solution:
const arr = [[1,2],[3,4],[5]];
let flat = [];

for (let lis of arr) {
    for (let ele of lis) {
        flattened.push(ele);
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
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
// Write explanation here:
// first a because a is in a simple console log and js runs line by line
// then d same reason as above
//then c because 




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






