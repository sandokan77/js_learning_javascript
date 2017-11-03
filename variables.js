let targetTempC1 = 25; //ES6 only
var targetTempC2 = 24; //ES5
const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
var $targetTempC3 = 24; //ES5

//six primitive types:
//Number, String, Boolean, Null, Undefined, Symbol

let str = "hello"; //init
str = "world"; //change value

//built-in object types:
//Array, Date, RegExp, Map and WeakMap, Set and WeakSet
/*
JavaScript recognizes four types of numeric literal: decimal, binary, octal, and hexadecimal.
With decimal literals, you can express integers (no decimal), decimal numbers,
and numbers in base-10 exponential notation.
*/

let count = 10; // integer literal; count is still a double
const blue = 0x0000ff; // hexadecimal (hex ff = decimal 255)
const umask = 0o0022; // octal (octal 22 = decimal 18)
const roomTemp = 21.5; // decimal
const c = 3.0e6; // exponential (3.0 × 10^6 = 3,000,000)
const e = -1.6e-19; // exponential (-1.6 × 10^-19 = 0.00000000000000000016)
//const inf = Infinity;
//const ninf = -Infinity;
//const nan = NaN; // "not a number"

const small = Number.EPSILON; // the smallest value that can be
// added to 1 to get a distinct number
// larger than 1, approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // the largest representable integer
const max = Number.MAX_VALUE; // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER; // the smallest representable integer
const min = Number.MIN_VALUE; // the smallest representable number
const nInf = Number.NEGATIVE_INFINITY; // the same as -Infinity
const nan = Number.NaN; // the same as NaN
const inf = Number.POSITIVE_INFINITY; // the same as Infinity

//Strings
const dialog = 'XXXX "YYYYYY" XXXX'; //use double quotes without fear because our string is set off with single quotes
const imperative = "XXXXX'X"; // we can use an apostrophe because the string is set off with double quotes.
const dialog1 = "XXXXX \"YYYYYYY\" XXXXX";
const dialog2 = 'XXXXXXX "YYYY\'YYYYY XXXXXXX" YYYYYY';
const s = "use \\ as an escape character in strings."; //this will put a backslash in the string



