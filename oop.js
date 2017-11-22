//Property Enumeration

//for..in : doesn’t include properties with symbol keys
//not recommended for iterating arrays. for loop or forEach is recommended for arrays.
const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for(let prop in o) {
    if(!o.hasOwnProperty(prop)) continue; //break the loop if this is not an OWN property but comes from somewhere else (i.e. inherited).
    console.log(`${prop}: ${o[prop]}`);
}

//Object.keys
//Object.keys gives us a way to get all of the enumerable string properties of an object as an array:

//This example produces the same result as a for...in loop (and we don’t have to check hasOwnProperty)
Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));


//it makes it easy to list all the properties of an object that start with the letter x:
const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };

Object.keys(o)
.filter(prop => prop.match(/^x/))
.forEach(prop => console.log(`${prop}: ${o[prop]}`));

//Class and Instance Creation
class Car {
    constructor() {
    }
}

const car1 = new Car();
const car2 = new Car();

car1 instanceof Car // true
car1 instanceof Array // false

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if(this.userGears.indexOf(gear) < 0) //gear can't be found in userGears array
            throw new Error(`Invalid gear: ${gear}`);
        this.userGear = gear;
    }
}

const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Mazda", "3i");
car1.shift('D');
car2.shift('R');

//query current gear
car1.userGear // "D"
car2.userGear // "R"

//Dynamic Properties
//"poor man's access restriction", marking internal properties with underscore
//https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap

const Car = (function() { //this is an "object constructor"
    const carProps = new WeakMap();
    class Car {
    constructor(make, model) {
    this.make = make;
    this.model = model;
    this._userGears = ['P', 'N', 'R', 'D'];
    carProps.set(this, { userGear: this._userGears[0] });
    }
    get userGear() { return carProps.get(this).userGear; }
    set userGear(value) {
    if(this._userGears.indexOf(value) < 0)
    throw new Error(`Invalid gear: ${value}`);
    carProps.get(this).userGear = value;
    }
    shift(gear) { this.userGear = gear; }
    }
    return Car;
    })();

//Classes Are Functions
//How a "class" was emulated in ES5
function Car(make, model) {
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R', 'D'];
        this._userGear = this.userGears[0];
    }

//The Prototype
//methods that are available on instances of a class, just like "shift" method above
//JavaScript performs "dynamic dispatch" (method invocation) using the prototype chain
//Every function has a special property called prototype
//You will often see it written Car.prototype.shift
//For regular functions, the prototype isn’t used, but it’s critically important for functions that act as object constructors

/* 
A function’s prototype property becomes important when you create a new instance
with the new keyword: the newly created object has access to its constructor’s
prototype object. The object instance stores this in its __proto__ property.
*/

// class Car as defined previously, with shift method
const car1 = new Car();
const car2 = new Car();
car1.shift === Car.prototype.shift; // true
car1.shift('D'); //Initially, the object car1 doesn’t have a method shift, but when you call car1.shift('D'), JavaScript looks at the prototype for car1 and finds a method of that name.
car1.shift('d'); // error
car1.userGear; // 'D'
car1.shift === car2.shift // true
car1.shift = function(gear) { this.userGear = gear.toUpperCase(); } //here we re
car1.shift === Car.prototype.shift; // false
car1.shift === car2.shift; // false
car1.shift('d');
car1.userGear; // 'D'

//Static Methods

