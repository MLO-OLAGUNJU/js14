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

//global scope
var x = 1;
let y = 2;
const z = 3;

//we have block scope and fucntion local scope
// local scope //------------ block scope (declared inside a code block {})
{
  let y = 4;
}

//local scope //------------ function scope (declared inside a function)
function myFunc() {
  const z = 5;
}
