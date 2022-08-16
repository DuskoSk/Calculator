const buttons = document.querySelectorAll(`.btn`);
const backspace = document.querySelector(`.backspace`);
const input = document.querySelector(`.input`);
const result = document.querySelector(`.result`);

let firstNum = null;
let secondNum = null;
let operator = null;
input.value = ``;
result.value = ``;
const operators = [`+`, `-`, `*`, `/`];

buttons.forEach((item) => {
  item.addEventListener("click", calculate);
});

function calculate() {
  let firstInput = this.value;
  updateDisplay()
  if (firstInput === `AC`) {
    allClear();
  } else if (operators.includes(firstInput)) {
    input.value = null;
    firstNum = operate(firstNum, secondNum, operator);
    result.value = firstNum;
    operator = firstInput;
    secondNum = null;
  } else if (firstInput === `=`) {
    input.value = null;
    firstNum = operate(firstNum, secondNum, operator);
    result.value = firstNum;
    secondNum = null;
  } else if (firstInput === `+`) {
    if (secondNum !== null) {
        secondNum = secondNum * 1;
      input.value = secondNum;
    }
  } else if (firstInput === `-`) {
    if (secondNum !== null) {
        secondNum = secondNum * -1;
      input.value = secondNum;
    }
  } else if (firstInput == `.`) {
    if (!input.value.includes(`.`)) {
      input.value += firstInput;
    }
  } else {
    input.value += firstInput;
    secondNum = Number(input.value);
    input.value = secondNum;
  }
}

allClear = () => {
  input.value =``;
  result.value = ``;
  operator = null;
  firstNum = null;
  secondNum = null;
}

operate = (x, y, operator) => {
  if (operator === "+") {
    return x + y;
  } else if (operator === `-`) {
    return x - y;
  } else if (operator === `*`) {
    return x * y;
  } else if (operator === `/`) {
    if (y === 0) {
      return `Can't divide by zero!`;
    } else {
      return (x / y);
    }
  } else {
    return y;
  }
}

backspace.addEventListener('click', button => {
  backspaceToggle(input);
})

backspaceToggle = (input, result, firstNum, secondNum) => {
  let inputA = input.value;
  if (input.value === `0` || input.value === ``) {
    return;
  } else {
    inputA.innerText = inputA.innerText.toString().slice(0, - 1);
  }
  updateDisplay();
}


updateDisplay = () => {
  input.value.innerText = input.value;
  result.value.innerText = result.value;
}

