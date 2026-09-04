const display = document.querySelector("#display");
const buttoncontainer = document.querySelector(".buttons");
let str = "";
const ops = ["+", "-", "/", "*"];
let iscalculated = false;

buttoncontainer.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;
  if (event.target.classList.contains("clear")) {
    handleInput("clear");
  } 
  else if (event.target.classList.contains("equals")) {
    handleInput("equals");
  } 
  else {
    handleInput(event.target.innerText);
  }
});

document.addEventListener("keydown", (m) => {
  m.preventDefault();
  handleInput(m.key);
});

function calculate() {
  try {
    str = eval(str);
    str = String(str);
    display.value = str;
    iscalculated = true;
  } 
  catch (error) {
    display.value = "ERROR!";
    str = "";
    iscalculated = false;
  }
}

function isLastCharOperator() {
  return ops.includes(str.charAt(str.length - 1));
}

function handleInput(input) {
  if (input === "clear") {
    str = "";
    display.value = "";
    iscalculated = false;
  } 
  else if (input === "equals" || input === "=" || input === "Enter") {
    if (str === "") return;
    if (isLastCharOperator()) {
      display.value = "Invalid input";
      str = "";
      return;
    }
    calculate();
  } 
  else if ((input >= "0" && input <= "9") || input === ".") {
    if (iscalculated) {
      str = input;
      iscalculated = false;
    }
    else {
      str += input;
    }
    display.value = str;
  } 
  else if (ops.includes(input)) {
    if (iscalculated) {
      iscalculated = false;
    }
    if (isLastCharOperator()) {
      str = str.slice(0, -1) + input;
      display.value = str;
    }
    else if (str === "") {
      display.value = "Invalid input";
      return;
    }
    else {
      str += input;
      display.value = str;
    }
  } 
  else if (input === "Backspace") {
    str = str.slice(0, -1);
    display.value = str;
  } 
  else if (input === "Escape") {
    str = "";
    display.value = "";
    iscalculated = false;
  }
}