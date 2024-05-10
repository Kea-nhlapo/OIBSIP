let currentNumber = "";
let previousNumber = "";
let operation = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function appendOperation(op) {
  if (currentNumber === "") return;
  previousNumber = currentNumber;
  currentNumber = "";
  operation = op;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  document.getElementById("display").value = "";
}

function calculate() {
  if (currentNumber === "" || previousNumber === "") return;

  let result;
  switch (operation) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }

  currentNumber = result.toString();
  previousNumber = "";
  operation = "";
  document.getElementById("display").value = currentNumber;
}

