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


