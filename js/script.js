const buttons = document.querySelectorAll(".btn");
const backspace = document.querySelector(".backspace");
const input = document.querySelector(".input");
const result = document.querySelector(".result");

let firstNum = null;
let secondNum = null;
let operator = null;
const operators = ["+", "-", "*", "/"];

buttons.forEach((item) => {
  item.addEventListener("click", calculate);
});

function calculate() {
  let firstInput = this.value;

  if (firstInput == "AC") {
    allClear();
  } else if (operators.includes(firstInput)) {
    input.value = null;
    firstNum = operate(firstNum, secondNum, operator);
    result.value = firstNum;
    operator = firstInput;
    secondNum = null;
  } else if (firstInput == "=") {
    input.value = null;
    firstNum = operate(firstNum, secondNum, operator);
    result.value = firstNum;
    secondNum = null;
  } else if (firstInput == "+") {
    if (secondNum !== null) {
        secondNum = secondNum * 1;
      input.value = secondNum;
    }
  } else if (firstInput == "-") {
    if (secondNum !== null) {
        secondNum = secondNum * -1;
      input.value = secondNum;
    }
  } else if (firstInput == ".") {
    if (!input.value.includes(".")) {
      input.value += firstInput;
    }
  } else {
    input.value += firstInput;
    secondNum = Number(input.value);
    input.value = secondNum;
    return;
  }
}

function allClear() {
  input.value ="";
  result.value = 0;
  operator = null;
  firstNum = null;
  secondNum = null;
  return;
}

function operate(x, y, operator) {
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    if (y === 0) {
      return "Can't divide by zero!";
    } else {
      return (x / y);
    }
  } else {
    return y;
  }
}

function backspaceToggle(input) {
  input.value = input.value.toString().slice(0, -1)
}
backspace.addEventListener('click', button => {
  backspaceToggle(input);
})