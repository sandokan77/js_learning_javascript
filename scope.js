/*
In some languages, there’s an explicit distinction between declaration
and definition. Typically, declaring a variable means that you
are announcing its existence by giving it an identifier. Definition,
on the other hand, usually means declaring it and giving it a value.
In JavaScript, the two terms are interchangeable, as all variables are
given a value when they’re declared.*/

//if a variable doesn’t exist, it’s not in scope.

//But. If a variable is not in scope (visibility), does that mean it doesn’t exist?
//Not necessarily, and this is where we must make a distinction between scope and existence.

/*
Scope (or visibility) refers to the identifiers that are currently visible and accessible by
the currently executing part of the program (called the execution context). 

Existence refers to identifiers that hold something for which memory has been allocated (reserved).
*/

/*
When something ceases to exist, JavaScript doesn’t necessarily reclaim the memory
right away: it simply notes that the item no longer needs to be kept around, and the
memory is periodically reclaimed in a process called garbage collection.
*/

const x = 3;

function f() {
    console.log(x);
    console.log(y);
}

{ // new scope
const y = 5;
f(); //Uncaught ReferenceError: y is not defined at f()
//This is an example of lexical scoping: the function f has access to the identifiers that were available when it was defined, not when it was called.
//Lexical scoping in JavaScript applies to global scope, block scope, and function scope.
}

y=5;
5
f(); //3 5 //it's ok, y is in the same scope as f() was when it was declared

//1.Global scope
//anything that is available in global scope is available in all scopes

//2.Block Scope
console.log('before block');
{
    console.log('inside block');
    const x = 3;
    console.log(x): // logs 3
}
console.log(`outside block; x=${x}`); // ReferenceError: x is not defined

//Variable masking:
{
    // block 1
    const x = 'blue';
    console.log(x); // logs "blue"
}

console.log(typeof x); // logs "undefined"; x out of scope
{
    // block 2
    const x = 3;
    console.log(x); // logs "3"
}
console.log(typeof x); // logs "undefined"; x out of scope

//Nested blocks. Variable declaration in inner block masking the variable in the outer block:

/* when execution enters the inner block,
and a new variable x is defined, both variables are in scope; we simply have no way of
accessing the variable in the outer scope (because it has the same name). */

/* globalFunc is assigned a value within a block: that block (and its parent scope, the
global scope) form a closure. No matter where you call globalFunc from, it will have
access to the identifiers in that closure: */

{
    // outer block
    let x = 'blue';
    console.log(x); // logs "blue"
    {
        // inner block
        let x = 3;
        console.log(x); // logs "3"
    }
        console.log(x); // logs "blue"
    }
console.log(typeof x); // logs "undefined"; x out of scope 

//Functions, Closures, and Lexical Scope
//define a function in a specific scope so that it explicitly has access to that scope. This is usually called a "closure".
let globalFunc; // undefined global function
{
        let blockVar = 'a'; // block-scoped variable
        globalFunc = function() {
        console.log(blockVar);
    }
}
globalFunc(); // logs "a"

/* So defining a function within a closure can affect the closure’s lifetime; it also allows
us to access things we wouldn’t normally have access to: */
let f; // undefined function
{
    let o = { note: 'Safe' };
    f = function() {
    return o;
}
}
let oRef = f();
oRef.note = "Not so safe after all!";

//Immediately Invoked Function Expressions IIFE
//An IIFE declares a function and then runs it immediately.

(function() {
    console.log("invoked");
    })();

//We create an anonymous function using a function expression, and then immediately call (invoke) that function:
const message = (function() {
        const secret = "I'm a secret!";
        return `The secret is ${secret.length} characters long.`;
    })();
console.log(message);

//Consider a function that can report the number of times it’s been called in a way that can’t be tampered with:
const f = (function() {
    let count = 0;
    return function() {
            return `I have been called ${++count} time(s).`;
        }
    })();
f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."

//Variable Hoisting
/* 
When you declare a variable with let, it doesn’t spring into existence until you
declare it. When you declare a variable with var, it’s available everywhere in the current
scope…even before it’s declared.
*/

let var1;
let var2 = undefined;
var1; // undefined
var2; // undefined
undefinedVar; // ReferenceError: notDefined is not defined

//With let, you will get an error if you try to use a variable before it’s been declared:
x; // ReferenceError: x is not defined
let x = 3; // we'll never get here -- the error stops execution

//Variables declared with var, on the other hand, can be referenced before they’re declared:
x; // undefined
var x = 3;
x; // 3

/* Variables declared with var employ a mechanism called hoisting. JavaScript scans the entire scope (either a function or the global
scope), and any variables declared with var are hoisted to the top. */

//Function Hoisting

/*Like variables declared with var, function declarations are hoisted to the top of their
scope, allowing you to call functions before they’re declared:*/
f(); // logs "f"
function f() {
    console.log('f');
}

//Using "let":
f(); // TypeError: f is not a function
let f = function() {
    console.log('f');
}

//The Temporal Dead Zone (typeof):

//this code was safe in the pre-let Javascript era:
if(typeof x === "undefined") {
    console.log("x doesn't exist or is undefined");
    } else {
    // safe to refer to x....
    }

//no longer safe for variables declared with let:
if(typeof x === "undefined") {
    console.log("x doesn't exist or is undefined");
    } else {
    // safe to refer to x....
    }
let x = 5;

//Strict Mode: "use strict" in global scope the entire script will execute in strict mode. 
//If you do this in a function the function will execute in strict mode.

(function() {
    'use strict';
    // all of your code goes here...it
    // is executed in strict mode, but
    // the strict mode won't contaminate
    // any other scripts that are combined
    // with this one
    })();

    




