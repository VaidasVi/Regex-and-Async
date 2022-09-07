// debugger;

// ? memory heap
let age = 36;
let surname = "Vilkas";

// ? call stack

// function logIt(param) {
//   console.log(param);
// }

// ? 1
// logIt(1);
// logIt(2);
// logIt(3);

// ? 2
// function logIt(param) {
//   logItMore(param);
// }

// function logItMore(param) {
//   console.log(param);
// }

// ? 3 stack overflow

// function overflow(){
//     overflow()
// }
// overflow()

// ? 4 asymchronous example
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);
