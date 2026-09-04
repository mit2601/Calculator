const display = document.querySelector("#display");
const buttoncontainer = document.querySelector(".buttons");
let str = "";
const ops = ["+", "-", "/", "*"];

buttoncontainer.addEventListener("click",(event)=>{
  if (event.target.tagName !== "BUTTON") return;
  if (event.target.classList.contains("clear")) {
    handleInput("clear")
  }
  else if (event.target.classList.contains("equals")) {
    handleInput("equals");}
  else {
      handleInput(event.target.innerText)
    }
  });

document.addEventListener("keydown", (m) => {
  m.preventDefault();
  handleInput(m.key);
});

function claculate() {
  try {
    console.log(str);
    str = eval(str);
    display.value = str;
  }
  catch {
    display.value = "ERROR!"
    str = "";
  }
}

function isLastCharOperator() {
  return ops.includes(str.charAt(str.length - 1));
}


function handleInput(input) {
  // Clear
  if (input === "clear") {
    str = "";
    display.value = "";
  }
  // Equals
  else if (input === "equals" || input === "=" || input === "Enter") {
    if (str === "") return;
    if (isLastCharOperator()){
      display.value="Invalid input";
      str = "";
    }
    calculate();
  }
  // handle Numbers and decimal
  else if ((input >= "0" && input <= "9") || input === ".") {
    str += input;
    display.value = str;
  }
  // Operators handle here
  else if (ops.includes(input)) {
    // If last char is ANY operator, replace it
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
  // Backspace
  else if (input === "Backspace") {
    str = str.slice(0, -1);
    display.value = str;
  }
  // Escape
  else if (input === "Escape") {
    str = "";
    display.value = "";
  }
}