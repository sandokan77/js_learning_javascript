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

    //Function signatures: JavaScript makes no distinction, when you have a function named f, you can call it with 0 or 1 or 10 arguments, and you’re calling the same function.
    
    //Destructuring Arguments    
    function getSentence({ subject, verb, object }) {
        return `${subject} ${verb} ${object}`; //destructuring an object into individual variables
        }
    const o = { subject: "I", verb: "love", object: "JavaScript",}; //the object itself
        
    getSentence(o); // "I love JavaScript"

    //Destructuring Arrays
    function getSentence([ subject, verb, object ]) {
        return `${subject} ${verb} ${object}`;
        }
    const arr = [ "I", "love", "JavaScript" ];
    getSentence(arr); // "I love JavaScript"

    //The "spread" operator

    function addPrefix(prefix, ...words) { //prefix will be "con" , words will be "verse, vex"
        // we will learn a better way to do this later!
        const prefixedWords = [];
        for(let i=0; i<words.length; i++) {
        prefixedWords[i] = prefix + words[i];
        }
        return prefixedWords;    
    }

    addPrefix("con", "verse", "vex"); // ["converse", "convex"]
    
    //Default Arguments (ES6)
    //when values for arguments aren’t provided, they get a value of undefined.
    function f(a, b = "default", c = 3) {
        return `${a} - ${b} - ${c}`;
        }
    f(5, 6, 7); // "5 - 6 - 7"
    f(5, 6); // "5 - 6 - 3"
    f(5); // "5 - default - 3"
    f(); // "undefined - default - 3"
    
    //Functions as Properties of Objects
    const o = {
        name: 'Wallace', // primitive property
        bark: function() { return 'Woof!'; }, // function property (method)
        }
    
    //ES6 has a shorthand for methods:
    const o = {
        name: 'Wallace', // primitive property
        bark() { return 'Woof!'; }, // function property (method)
        }
    
    //The "this" keyword
    //JavaScript, it can be used in multiple ways
    
    //The this keyword takes on the value of the specific object it was called on
    //This is bound to o not because speak is a property of o, but because we called it directly on o (o.speak):
    
    const o = {
        name: 'Wallace',
        speak() { return `My name is ${this.name}!`; },
        }
    
    o.speak(); // "My name is Wallace!

    
    //what happens if we assign that same function to a variable?:
    const speak = o.speak;
    speak === o.speak; // true; both variables refer to the same function
    speak(); // "My name is !"
    
    //Accessing "this" in a nested function:
    const o = {
        name: 'Julie',
        greetBackwards: function() {
            function getReverseName() { //nested functions
                let nameBackwards = '';
                for(let i=this.name.length-1; i>=0; i--) {
                nameBackwards += this.name[i];
                }
                return nameBackwards;
            }
        return `${getReverseName()} si eman ym ,olleH`;
        },
        };
        o.greetBackwards();

        
        const o = {
            name: 'Julie',
            func_top_level: function() {
                function func_nested() { //nested functions
                    console.log("func_nested() is referring to an object like:"+Object.getOwnPropertyDescriptor(this));
                    return;
                }
            console.log("func_top_level() is referring to an object like:"+Object.getOwnPropertyDescriptor(this));
            return;
            },
            };
    
        o.func_top_level(); //somehow func_nested() is not executed, to be investigated

    //Function Expressions and Anonymous Functions  (there are more to it)  
    const f2 = function() {return "hello";} //creating the function and assigning it to variable

    //Arrow Notation
    //benefits:
    • You can omit the word function.
    • If the function takes a single argument, you can omit the parentheses.
    • If the function body is a single expression, you can omit curly braces and the
    return statement.

    const f1 = function() { return "hello!"; }
    // OR
    const f1 = () => "hello!";
    
    const f2 = function(name) { return `Hello, ${name}!`; }
    // OR
    const f2 = name => `Hello, ${name}!`;
    
    const f3 = function(a, b) { return a + b; }
    // OR
    const f3 = (a,b) => a + b;

    //call, apply, and bind
    //1.Call
    const bruce = { name: "Bruce" };
    const madeline = { name: "Madeline" };
    // this function isn't associated with any object, yet it's using 'this'!
    
    function greet() {
        return `Hello, I'm ${this.name}!`;
    }
    greet(); // "Hello, I'm !" - 'this' not bound
    greet.call(bruce); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'
    greet.call(madeline); // "Hello, I'm Madeline!" - 'this' bound to 'madeline'
    

    function update(birthYear, occupation) {
        this.birthYear = birthYear;
        this.occupation = occupation;
        }

    update.call(bruce, 1949, 'singer');
        // bruce is now { name: "Bruce", birthYear: 1949,
        // occupation: "singer" }

    update.call(madeline, 1942, 'actress');
        // madeline is now { name: "Madeline", birthYear: 1942,
        // occupation: "actress" }    

    //2.Apply
    //apply is identical to call except the way it handles function arguments. call takes
    //arguments directly, just like a normal function. apply takes its arguments as an array
    update.apply(bruce, [1955, "actor"]);
    // bruce is now { name: "Bruce", birthYear: 1955,
    // occupation: "actor" }
    update.apply(madeline, [1918, "writer"]);
    // madeline is now { name: "Madeline", birthYear: 1918,
    // occupation: "writer" }    

    //Note that we simply pass null in for the value of this. That’s because Math.min and Math.max don’t use this at all
    const arr = [2, 3, -5, 15, 7];
    Math.min.apply(null, arr); // -5
    Math.max.apply(null, arr); // 15

    //ES6 "spread" operator
    const newBruce = [1940, "martial artist"];
    update.call(bruce, ...newBruce); // equivalent to apply(bruce, newBruce)
    
    Math.min(...arr); // -5
    Math.max(...arr); // 15
    
    //3.Bind
    //allows you to permanently associate a value for this with a function. Imagine we’re
    //passing our update method around, and we want to make sure that it always gets
    //called with bruce as the value for this.
    //Risk: it cannot be used effectively with call, apply, or bind (a second time)

    const updateBruce = update.bind(bruce);
    updateBruce(1904, "actor");
    // bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
    updateBruce.call(madeline, 1274, "king");
    // bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
    // madeline is unchanged
    
    //bind with parameters provided
    const updateBruce1949 = update.bind(bruce, 1949);
    updateBruce1949("singer, songwriter");
    // bruce is now { name: "Bruce", birthYear: 1949,
    // occupation: "singer, songwriter" }
