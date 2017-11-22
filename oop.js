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