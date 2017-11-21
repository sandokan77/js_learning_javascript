// array literals
const arr1 = [1, 2, 3]; // array of numbers

const arr2 = ["one", 2, "three"]; // nonhomogeneous array

const arr3 = [[1, 2, 3], ["one", 2, "three"]]; // array containing arrays

const arr4 = [ // nonhomogeneous array
{ name: "Fred", type: "object", luckyNumbers : [5, 7, 13] },
[
    { name: "Susan", type: "object" },
    { name: "Anthony", type: "object" },
],
1,
function() { return "arrays can contain functions too"; },
"three",
];

// accessing elements
arr1[0]; // 1
arr1[2]; // 3
arr3[1]; // ["one", 2, "three"]
arr4[1][0]; // { name: "Susan", type: "object" }
// array length
arr1.length; // 3
arr4.length; // 5
arr4[1].length; // 2
// increasing array size
arr1[4] = 5;
arr1; // [1, 2, 3, undefined, 5]
arr1.length; // 5
// accessing (not assigning) an index larger than the array
// does *not* change the size of the array
arr2[10]; // undefined
arr2.length; // 3
// Array constructor (rarely used)
const arr5 = new Array(); // empty array
const arr6 = new Array(1, 2, 3); // [1, 2, 3]
const arr7 = new Array(2); // array of length 2 (all elements undefined)
const arr8 = new Array("2"); // ["2"]

//Array *Content Manipulation*
//push(e) adds element to the end
//pop() returns the last element
//unshift(e) adds element to the front
//shift() returns the first element

const arr = ["b", "c", "d"];
arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
arr.shift(); // returns "a"; arr is now ["b", "c", "d"]

//Adding Multiple Elements at the End
//concat
const arr = [1, 2, 3];
arr.concat(4, 5, 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5, 6]); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5], 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, [5, 6]]); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified

//Getting a Subarray
const arr = [1, 2, 3, 4, 5];
arr.slice(3); // returns [4, 5]; arr unmodified
arr.slice(2, 4); // returns [3, 4]; arr unmodified
arr.slice(-2); // returns [4, 5]; arr unmodified
arr.slice(1, -2); // returns [2, 3]; arr unmodified
arr.slice(-2, -1); // returns [4]; arr unmodified

//Adding or Removing Elements at Any Position
const arr = [1, 5, 7];
//splice (
//1. the index you want to start modifying, (new elements will start at this position)
//2. the number of elements to remove (use 0 if you don’t want to remove any elements), 
//3. the remaining arguments are the elements to be added
//returns: the removed elements

arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]

//Cutting and Replacing Within an Array


