let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let zero = document.getElementById("zero");
let dot = document.getElementById("dot");
let ac = document.getElementById("ac");

function insertSymbol(clicked_id) {
  let symbol = document.getElementById(clicked_id).innerHTML;
  console.log(symbol);
  document.getElementById("display").innerHTML += symbol;
}
