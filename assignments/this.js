/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is the global part of the code.
* 2. Implicit binding occurs when dot notation is used to invoke a function, whatever is in the left of the dot.
* 3. New Binding is a constructor that creates objects using the 'new' keyword.
* 4. Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }

  sayName("Billy");

// Principle 2

// code example for Implicit Binding

function Person (name){
    this.name = name;
}

let bob = new Person('Bob');

console.log(bob.name);  /* <---bob is the Implicit Binding here*/

// Principle 3

// code example for New Binding

function Pet(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
}

let Salem = new Pet("Salem", "Cat", "Black");

console.log(Salem)


// Principle 4

// code example for Explicit Binding

function Works(name, occupation){
    Person.call(this, name);
    this.occupation= occupation;
}

let Ricky = new Works ('Ricky', "Police")

console.log(Ricky.occupation)