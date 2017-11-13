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

//Comparing numbers

//this will not stop at 0.3 since 0.1 + 0.1 + 0.1 = 0.30000000000000004
let n = 0;
while(true) {
n += 0.1;
if(n === 0.3) break;
}
console.log(`Stopped at ${n}`); 

//this will stop at 0.3
let n = 0;
while(true) {
n += 0.1;
if(Math.abs(n - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);

//String concatenation
3 + 5 + "8" // evaluates to string "88"
"3" + 5 + 8 // evaluates to string "358"

//Logical Operators !, ||, &&
const doIt = false;
const result = doIt ? "Did it!" : "Didn't do it.";

//Comma Operator
let x = 0, y = 10, z;
z = (x++, y++); //z will be the value of y++ which 10

//Biwise operators
/*
Bitwise operators deal with their operands as 32-bit signed integers in 2 complement format. 
Because all numbers in JavaScript are doubles, JavaScript converts the numbers to 32-bit integers 
before performing bitwise operators, and then converts them back to doubles before returning the result.
*/

& Bitwise AND 0b1010 & 0b1100 // result: 0b1000
| Bitwise OR 0b1010 | 0b1100 // result: 0b1110
^ Bitwise XOR 0b1010 ^ 0b1100 // result: 0b0110
~ Bitwise NOT ~0b1010 // result: 0b0101
<< Left shift 0b1010 << 1 // result: 0b10100
0b1010 << 2 // result: 0b101000
>> Sign-propagating right shift (See below)
>>> Zero-fill right shift (See below)

let n = 22 // 32-bit binary: 00000000000000000000000000010110
n >> 1 // 00000000000000000000000000001011
n >>> 1 // 00000000000000000000000000001011
n = ~n // one's complement: 11111111111111111111111111101001
n++ // two's complement: 11111111111111111111111111101010
n >> 1 // 11111111111111111111111111110101
n >>> 1 // 01111111111111111111111111110101

//Real life example:
const FLAG_EXECUTE = 1 // 0b001
const FLAG_WRITE = 2 // 0b010
const FLAG_READ = 4 // 0b100

let p = FLAG_READ | FLAG_WRITE; // 0b110
let hasWrite = p & FLAG_WRITE; // 0b010 - truthy
let hasExecute = p & FLAG_EXECUTE; // 0b000 - falsy
p = p ^ FLAG_WRITE; // 0b100 -- toggle write flag (now off)
p = p ^ FLAG_WRITE;

// we can even determine multiple flags in one expression:
const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE);
const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE) === FLAG_READ | FLAG_EXECUTE;

//typeof operator
typeof undefined //"undefined"
typeof null "object" //Unfortunate, but true
typeof {} //"object"
typeof true //"boolean"
typeof 1 //"number"
typeof "" //"string"
typeof Symbol() //"symbol" New in ES6
typeof function() {} //"function"

//void operator
/*The void operator has only one job: to evaluate its operand and then return
undefined. Sound useless? It is.*/

<a href="javascript:void 0">Do nothing.</a> <!-- not recommended />

//assignment operators: it assigns a value to a variable.

x += y //x = x + y
x -= y //x = x - y
x *= y //x = x * y
x /= y //x = x / y
x %= y //x = x % y
x <<= y //x = x << y
x >>= y //x = x >> y
x >>>= y //x = x >>> y
x &= y //x = x & y
x |= y //x = x | y
x ^= y //x = x ^ y

//destructuring assignment operation

//destructuring object:

// a normal object
const obj = { b: 2, c: 3, d: 4 };

// object destructuring assignment
const {a, b, c} = obj;
a; // undefined: there was no property "a" in obj
b; // 2
c; // 3
d; // reference error: "d" is not defined

//destructuring array:

// a normal array
const arr = [1, 2, 3];
// array destructuring assignment
let [x, y] = arr;
x; // 1
y; // 2
z; // error: z hasn't been defined

//thera are more element in the array than variables to assign
const arr = [1, 2, 3, 4, 5];
let [x, y, ...rest] = arr;
x; // 1
y; // 2
rest; // [3, 4, 5] //not mandatory to call it "rest"

//Object and Array Operators
. //Member access
[] //Computed member access
in //Property existence operator
new Object //instantiation operator
instanceof //Prototype chain test operator
... //Spread operator
delete //Delete operator

//Expressions in Template Strings
const roomTempC = 21.5;
let currentTempC = 19.5;
const message = `The current temperature is ` + `${currentTempC-roomTempC}\u00b0C different than room temperature.`;
const fahrenheit = `The current temperature is ${currentTempC * 9/5 + 32}\u00b0F`;

//Expressions and Control Flow Patterns
//1.Converting if...else Statements to Conditional Expressions:
if(isPrime(n)) {
    label = 'prime';
} else {
    label = 'non-prime';
}
 //would be better written as:
label = isPrime(n) ? 'prime' : 'non-prime';


