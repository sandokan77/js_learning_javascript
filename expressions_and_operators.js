//declaration statement:
let x;
x = 3 * 5; //(1) multiplication expression then (2) assignment expression

let a,b;
a = b = 3 * 5;

let x, y;
y = x = 3 * 5; // original statement
y = x = 15; // multiplication expression evaluated
y = 15; // first assignment evaluated; x now has value 15, y is still undefined
15; // second assignment evaluated; y now has value 15, the result is 15, which isn't used or assigned to anything, so this final value is simply discarded

//operators (rememember: all numbers in JS are doubles)

+ //Addition (also string concatenation)   3 + 2 = 5
- //Subtraction 3 - 2 = 1
/ //Division 3/2 = 1.5
* //Multiplication 3*2 = 6
% //Remainder 3%2 = 1
- //Unary negation -x = negative x; if x is 5, -x will be -5
+ //Unary plus +x if x is not a number, this will attempt conversion
++ //Pre-increment ++x increments x by one, and evaluates to the new value
++ //Post-increment x++ increments x by one, and evaluates to value of x before the increment
-- //Pre-decrement --x decrements x by one, and evaluates to the new value
-- //Post-decrement x-- decrements x by one, and evaluates to value of x before the decrement

//Unary minus
const x = 5;
const y = 3 - -x; // y is 8

//Unary plus
const s = "5";
const y = 3 + +s; // y is 8; without the unary plus, it would be the result of string concatenation: "35"

//Operator precedence
//8%2+3*(4*2-1) = 25??? (it's 21, most likely typo)

let x = 3, y;
x += y = 6*5/2;
// we'll take this in order of precedence, putting parentheses around
// the next operation:
//
// multiplication and division (precedence level 14, left to right):
// x += y = (6*5)/2
// x += y = (30/2)
// x += y = 15
// assignment (precedence level 3, right to left):
// x += (y = 15)
// x += 15 (y now has value 15)
// 18 (x now has value 18)

//Comparison operators

//strictly equal or not equal
=== //strictly equal
!== //not strictly equal

//abstractly equal or not equal
const n = 5;
const s = "5";
n === s; // false -- different types
n !== s; // true
n === Number(s); // true -- "5" converted to numeric 5
n !== Number(s); // false
n == s; // true; not recommended
n != s; // false; not recommended
const a = { name: "an object" };
const b = { name: "an object" };
a === b; // false -- distinct objects
a !== b; // true
a == b; // false; not recommended
a != b; // true; not recommended

3 > 5; // false
3 >= 5; // false
3 < 5; // true
3 <= 5; // true
5 > 5; // false
5 >= 5; // true
5 < 5; // false
5 <= 5; // true

