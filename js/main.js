// var, let, and const

/* var x = 1;
var x = 2;
console.log(x); */

/* let x = 1;
x = 2;
console.log(x); */

/* const x = 1;
x = 2; // won't work coz it's constant
console.log(x); */

/* //global scope
var x = 1;
let y = 2;
// const z = 3;

//we have block scope and fucntion local scope

//local scope //------------ function scope (declared inside a function)
function myFunc() {
  const z = 5;
  console.log(y);

  // local scope //------------ block scope (declared inside a code block {})
  {
    let y = 4;
    console.log(y);
  }
}

myFunc(); */

//global scope
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;
  {
    var x = 11; // function scoped
    const z = 6; // block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

myFunc();

// Global = Not in function or block, Not desirable.
// Local = in a function or block. Not global.
// var instantiates function() scoped variables.
//let and const instantiate {block} scoped variables.

//--------------===Helpful Tips=====---------------------
//1. Avoid using var. Stick to using const and let.
//2. Use const unless you need to reassign value.
//3. Use let if you know you will reassign value.
