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

/*
    \n Newline (technically a line feed character: ASCII/Unicode 10)    "Line1\nLine2"
    
    \r Carriage return (ASCII/Unicode 13) "Windows line 1\r\nWindows line 2"
    
    \t Tab (ASCII/Unicode 9) "Speed:\t60kph"
    
    \' Single quote (note that you can use this even when not necessary)  "Don\'t"
    
    \" Double quote (note that you can use this even when not necessary)                'Sam said \"hello\".'

    \` Backtick (or “accent grave”; new in ES6)     `New in ES6: \` strings.`

    \$ Dollar sign (new in ES6)     `New in ES6: ${interpolation}`
  
    \\ Backslash        "Use \\\\ to represent \\!"

    \uXXXX Arbitrary Unicode code point (where +XXXX+ is a hexadecimal code point)    "De Morgan’s law: \u2310(P \u22c0Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)"
  
    \xXX Latin-1 character (where +XX+ is a hexadecimal Latin-1 code point)    "\xc9p\xe9e is fun, but foil is more fun."
*/

//Template Strings in ES6
let currentTemp = 19.5;
// 00b0 is the Unicode code point for the "degree" symbol
const message = "The current temperature is " + currentTemp + "\u00b0C"; //this is NOT a template string but a concatenation
const message = `The current temperature is ${currentTemp}\u00b0C`; //this is a template string

currentTemp = null; //this should be used instead of undefined
currentTemp = undefined; //after declaration javascript sets variable to "undefined"

//Symbols
const RED = Symbol();
const ORANGE = Symbol("this is a description for this symbol");

RED === ORANGE;

//Objects
const obj = {};
obj.size; //create size property
obj.color; //create color property

//Accessing object properties
//computed member access operator:
obj["color"];
obj["not an identifier"] = 3; //create "not an identifier" property and set it to 3

const SIZE = Symbol();
obj[SIZE] = 8; //create SIZE propery which is a Symbol

const sam3 = {
    name: 'Sam',
    classification: { // property values can
    kingdom: 'Anamalia', // be objects themselves
    phylum: 'Chordata',
    class: 'Mamalia',
    order: 'Carnivoria',
    family: 'Felidae',
    subfaimily: 'Felinae',
    genus: 'Felis',
    species: 'catus',
    },
};

//Remarks on Trailing Commas in Objects and Arrays
//C: it's odd that you leave a comma after the last object property:
//C: 
const sam1 = {
name: 'Sam',
age: 4, //look, comma's here
};
//E: yea, you don't need them. But you must be careful, because if you want to do
return x
+1
//E: it will fill in the comma:
return x;
+1;
//E: so basically do all your operations on 1 line. Commas are added automatically, variables are hosted to the top, as well as imports

//still accessing members
sam3.classification.family; // "Felinae"
sam3["classification"].family; // "Felinae"
sam3.classification["family"]; // "Felinae"
sam3["classification"]["family"]; // "Felinae"

//add function to object
sam3.speak = function() { return "Meow!"; };
sam3.speak(); // "Meow!"

//delete function from object
delete sam3.classification; // the whole classification tree is removed
delete sam3.speak; // the speak function is removed

//Number, String, and Boolean Objects
const s = "hello";
s.toUpperCase(); //HELLO : a temporary String object is being created and will be discarded immediately

const s = "hello";
s.rating = 3; // no error...success?
s.rating; //undefined

//Arrays
/*
• Array size is not fixed; you can add or remove elements at any time.
• Arrays are not homogeneous; each individual element can be of any type.
• Arrays are zero-based. That is, the first element in the array is element 0.
*/

const a1 = [1, 2, 3, 4]; // array containing numbers
const a2 = [1, 'two', 3, null]; // array containing mixed types
const a3 = [ // array on multiple lines
"E1",
"E2",
"E3",
"E4",
];

const a4 = [ // array containing objects
{ name: "Ruby", hardness: 9 },
{ name: "Diamond", hardness: 10 },
{ name: "Topaz", hardness: 8 },
];

const a5 = [ // array containing arrays
[1, 3, 5],
[2, 4, 6],
];

const arr = ['a', 'b', 'c'];
arr.length; // 3

// get the first element:
arr[0]; // 'a'
// the index of the last element in arr is arr.length-1:
arr[arr.length - 1]; // 'c'

//Replace element in array
//To overwrite the value at a specific array index, you can simply assign to it:
const arr = [1, 2, 'c', 4, 5];
arr[2] = 3; // arr is now [1, 2, 3, 4, 5]

//Dates
const now = new Date();
now; // example: Wed Nov 11 2017 16:57:21 GMT+1300 

//Initializing to a specific date
const halloween = new Date(2016, 9, 31); // note that months are zero-based: 9=October

//Initializing to a specific date and time
const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm

//components of Date object
halloweenParty.getFullYear(); // 2016
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (Mon; 0=Sun, 1=Mon,...)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0

//Regular Expressions (RegExp)
// simple email recognizer
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;

// US phone number recognizer
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;

//Map, Set, WeakMap, WeakSet (ES6)

//Data Type Conversion
//String to number
const numStr = "33.3";
const num = Number(numStr); // this creates a number value, *not* an instance of the Number object. If the string can’t be converted to a number, NaN will be returned.

const a = parseInt("16 volts", 10); // the " volts" is ignored, 16 is parsed in base 10
const b = parseInt("3a", 16); // parse hexadecimal 3a; result is 58
const c = parseFloat("15.5 kph"); // the " kph" is ignored; parseFloat always assumes base 10

//A Date object can be converted to a number that represents the number of milliseconds since midnight, January 1, 1970, UTC, using its valueOf() method:
const d = new Date(); // current date
const ts = d.valueOf(); // numeric value: milliseconds since midnight, January 1, 1970 UTC

//Convert boolean values to 1 (true) or 0 (false)
const b = true;
const n = b ? 1 : 0;

//Converting to String
const n = 33.5;
n; // 33.5 - a number
const s = n.toString();
s; // "33.5" - a string

//Converting Array to String
const arr = [1, true, "hello"];
arr.toString(); // "1,true,hello"

//Converting to Boolean
const n = 0; // "falsy" value
const b0 = !n; //true !!!!
const b1 = !!n; // false
const b2 = Boolean(n); // false

