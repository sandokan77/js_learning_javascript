//While loop

let funds = 50; // starting conditions

//block is not required
while(funds > 1 && funds < 100)
funds = funds + 2;

//using block
while(funds > 1 && funds < 100) {
// place bets
// roll dice
// collect winnings
}

//Block statements

{ // start block statement
    console.log("statement 1");
    console.log("statement 2");
} // end block statement
console.log("statement 3");

//Whitespace: Javascript does not care about whitespaces

while(funds > 1 && funds < 100)

funds = funds + 2;

//Helper Functions
function rand(m, n) {
    return m + Math.floor((n - m + 1)*Math.random());
    }

function randOtherExample() {
    return ["a", "b", "c", "d", "e", "f"]
    }    

//if...else Statement
if (a === 7) {
    //do this
} else {
    //do that
}

//do..while loops
do {
    //this step
} while (isTrue);

//for loop
const array = [];
for(let array = 0; array < 3; array++) {
hand.push(getItem());
}

//Control flow exceptions

//break Breaks out of loop early.
//continue Skip to the next step in the loop.
//return Exits the current function (regardless of control flow)
//throw Indicates an exception that must be caught by an exception handler (even if it’s outside of the current control flow statement).

//Loop patterns
let s = '3'; // string containing a number
for(; s.length<10; s = ' ' + s); // zero pad string; note that we must include a semicolon to terminate this for loop!

for(let x=0.2; x<3.0; x += 0.2) // increment using noninteger
console.log(x);

for(; !player.isBroke;) // use an object property as conditional
console.log("Still playing!");

//Switch statements
switch(expression) {
    case value1:
    // executed when the result of expression matches value1
    [break;]
    case value2:
    // executed when the result of expression matches value2
    [break;]
    ...
    case valueN:
    // executed when the result of expression matches valueN
    [break;]
    default:
    // executed when none of the values match the value of expression
    [break;]
    }

//The for..in loop is designed to loop over the property keys of an object:
const record = { name: 'myname', rank: 'myrank', age: 40 };
for(let prop in record) {
if(!record.hasOwnProperty(prop)) continue; 
console.log(prop + ': ' + record[prop]);
}

//The for..of loop being new in ES6, operator provides yet another way to loop over the elements in a collection. 
//It is a great choice when you need to loop over an array, but don’t need to know the index number of each element.
const record = ["item1", "item2", "item3"];
for(let my_element of record)
console.log(`This record is ${my_element}!`);

//Useful Control Flow Patterns: see book

