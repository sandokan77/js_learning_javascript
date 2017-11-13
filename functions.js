function my_function1() {
    // this is the body; it started with an opening curly brace...
    console.log("Print console");
    }

my_function1();    //call function

function getText() {
    return "this is my text";
    }

getText();

/*
When you follow a function identifier with
parentheses, JavaScript knows that you’re calling it: it executes the body of the function,
and the expression resolves to the return value. When you don’t provide the
parentheses, you’re simply referring to the function just like any other value, and it’s
not invoked.*/

getText(); // "this is my text"
getText; // function getText()

//you can assign a function to a variable:
const f = getText; //undefined
f(); //"this is my text"

//assign a function to an object property:
const o = {}; 
o.f = getText; 
o.f(); //"this is my text"

//add a function to an array:
const arr = [1, 2, 3];
arr[1] = getGreeting; // arr is now [1, function getGreeting(), 2]
arr[1](); // "Hello, World!"

//Function Arguments
function avg(a, b) {
    return (a + b)/2;
    }

avg(5,10);


function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignment)`);
    }
    let x = 3;
    console.log(`before calling f: x=${x}`);
    f(x);
    console.log(`after calling f: x=${x}`);

    before calling f: x=3
    inside f: x=3
    inside f: x=5 (after assignment)
    after calling f: x=3    

/*  It is possible to modify an object type in a
    function in such a way that the object itself changes, which will be visible outside of
    the function:*/

    function f(o) {
        o.message = `set in f (previous value: '${o.message}')`;
    }
    let o = {
        message: "initial value"
        };
    console.log(`before calling f: o.message="${o.message}"`);
    f(o);
    console.log(`after calling f: o.message="${o.message}"`);

    before calling f: o.message="initial value"
    after calling f: o.message="set in f (previous value: 'initial value')"

    /*the o inside the function is separate and distinct from the o outside
    of the function, but they both refer to the same object.*/


    function f(o) {
        o.message = "set in f"; //both point to the same object
        o = {message: "new object!"}; //it points to a new, distinct object
        console.log(`inside f: o.message="${o.message}" (after assignment)`);
        }
    let o = {message: 'initial value'};
    console.log(`before calling f: o.message="${o.message}"`);
    f(o);
    console.log(`after calling f: o.message="${o.message}"`);
    
    before calling f: o.message="initial value"
    inside f: o.message="new object!" (after assignment)

    // JavaScript makes no such distinction, and when you have a function named f, you can call it with 0 or 1 or 10 arguments, and you’re calling the same function.
    