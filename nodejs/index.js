// variables
var hello = 'hello js with var'; // variable, document/function scope
let hello2 = 'hello js with let'; // variable, block scope
const hello3 = 'hello js with const'; // constant, block scope

// console.log(hello);
// console.log(hello2);
// console.log(hello3);

// hoisting -  only works with var
hoistVar = 'h';
// console.log(hoistVar);

var hoistVar = 'hoisting with var';

// scopes
/*
- window scope - browser
- document scope - tab/page
- function scope - function
- block scope - let, const, if, for
*/

// functions
print();
// console.log(print2);

function print() { // function statement - hoisting applies
  //console.log('from the function statement')
}

let print2 = function () { // function expression
  //console.log('from the function expression')
}

print2();

(function () { // immediately-invoked function expression
  //console.log('from the function invocation');
})();

// objects
let person = { // literal object
  firstName: null,
  lastName: null
}

let p1 = person;
let p2 = person;

p1.firstName = 'fred';
console.log(p2.firstName);

function Person () { // object constructor
  this.firstName = null;
  this.lastName = null;
}

let p3 = new Person();
let p4 = new Person();

p3.firstName = 'fred';
console.log(p4.firstName);

let p5 = Object.create({});
let p6 = Object.create({});

p5 = p3; // 2-way binding
p6 = p4;

p5.firstName = 'bryan';
p6.firstName = 'marc';

let p7 = Object.create(p5); // referential copy - 1-way binding
let p8 = Object.create(p6);

console.log(p7.firstName);
console.log(p8.firstName);

p7.firstName = 'brett';

console.log(p5.firstName);
console.log(p3.firstName);
