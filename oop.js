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
class Car {
    static getNextVin() {
        return Car.nextVin++; // we could also use this.nextVin++
        // but referring to Car emphasizes
        // that this is a static method
    }
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1, car2) {
        return car1.make===car2.make && car1.model===car2.model;
    }
    static areSame(car1, car2) {
        return car1.vin===car2.vin;
    }
}
Car.nextVin = 0;
const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda", "3");
const car3 = new Car("Mazda", "3");
car1.vin; // 0
car2.vin; // 1
car3.vin // 2
Car.areSimilar(car1, car2); // false
Car.areSimilar(car2, car3); // true
Car.areSame(car2, car3); // false
Car.areSame(car2, car2); // true

//Inheritance
/*
if a method is not found on an object's prototype, it
checks the prototype's prototype. In this way, a prototype chain is established. Java
Script will walk up the prototype chain until it finds a prototype that satisfies the
request. If it can find no such prototype, it will finally error out.
*/

class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created");
    }
    addPassenger(p) {
        this.passengers.push(p);
    }
}
class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car created");
    }
    deployAirbags() {
        console.log("BWOOSH!");
    }
}

const v = new Vehicle();
v.addPassenger("Frank");
v.addPassenger("Judy");
v.passengers; // ["Frank", "Judy"]
const c = new Car();
c.addPassenger("Alice");
c.addPassenger("Cameron");
c.passengers; // ["Alice", "Cameron"]
v.deployAirbags(); // error
c.deployAirbags(); // "BWOOSH!"

//Getter and setter
//We are using "internal" properties, prefixed with "_" to "protect" them: i.e. _prop1
//Getter and Setter will be generated to use the internal properties


class BaseClass {
    
        constructor() {
            this.prop1 = "value1";
            this.prop2 = "value2";
        }
    
        get prop1() {return this._prop1;}
        set prop1(value) {this._prop1 = value;}
    
        get prop2() {return this._prop2;}    
        set prop2(value) {this._prop2 = value;}
    }
    
    
    const bc1 = new BaseClass();
    
    //to set: notice both the setter & getter will act as if they were "normal" properties:
    bc1.prop1 = "value12";
    
    //to get: 
    bc1.prop1;

//Polymorphism
//Defining the base class
class BaseClass {
    
        constructor() {
            this.prop1 = "value1";
            this.prop2 = "value2";
        }
    
        get prop1() {return this._prop1;}
        set prop1(value) {this._prop1 = value;}
    
        get prop2() {return this._prop2;}    
        set prop2(value) {this._prop2 = value;}
    }

    
    const bc1 = new BaseClass();
    
    //to set: notice both the setter & getter will act as if they were "normal" properties:
    bc1.prop1 = "value12";
    
    //to get: 
    bc1.prop1;




//Going forward with extending the base class

    class Child1 extends BaseClass {

        constructor() {
            super();
            this.prop1 = "value1.1"
            this.prop2 = "value2.1"
        }

        get prop1() {return this._prop1;}
        set prop1(value) {this._prop1 = value;}
    
        get prop2() {return this._prop2;}    
        set prop2(value) {this._prop2 = value;}
}    


const c1 = new Child1();

c1 instanceof Child1; //true
c1 instanceof BaseClass; //true
c1 instanceof BaseClass2; //VM2071:1 Uncaught ReferenceError: BaseClass2 is not defined at <anonymous>:1:15

//Inheritance
/* All objects in JavaScript are instances of the root class Object. That
is, for any object o, o instanceof Object will be true (unless you
explicitly set its __proto__ property, which you should avoid).*/

class Motorcycle extends Vehicle {}
const c = new Car();
const m = new Motorcyle();
c instanceof Car; // true
c instanceof Vehicle; // true
m instanceof Car; // false
m instanceof Motorcycle; // true
m instanceof Vehicle; // true

//Enumerating Object Properties, Revisited
class Super {
    constructor() {
        this.name = 'Super';
        this.isSuper = true;
    }
}
    // this is valid, but not a good idea...
Super.prototype.sneaky = 'not recommended!';

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub';
        this.isSub = true;
    }
}

const obj = new Sub();
for(let p in obj) {
    console.log(`${p}: ${obj[p]}` +
    (obj.hasOwnProperty(p) ? '' : ' (inherited)'));
}

/*Output:
name: Sub
isSuper: true
isSub: true
sneaky: not recommended! (inherited)*/

//String Representation
class Car {
 //...
    toString() {
        return `${this.make} ${this.model}: ${this.vin}`;
    }
 //...   
}

//Multiple Inheritance, Mixins, and Interfaces
/* The primary mechanism for the problem of multiple inheritance is the concept of the
mixin. A mixin refers to functionality that’s “mixed in” as needed. */
class InsurancePolicy() /*<== did not work in Chrome*/  {}
function makeInsurable(o) {
    o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
    o.getInsurancePolicy = function() { return this.insurancePolicy; }
    o.isInsured = function() { return !!this.insurancePolicy; }
}

