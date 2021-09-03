function insertSymbol(clicked_id) {
  let symbol = document.getElementById(clicked_id).innerHTML;
  console.log(symbol);
  document.getElementById("display").innerHTML += symbol;
}

function resetCalc() {
  document.getElementById("display").innerHTML = "";
  console.log('ac');
}

function calculateResult() {
  console.log('=');
  
}