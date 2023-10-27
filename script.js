const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let output = "";

function calculate() {
  output = eval(output);
  display.textContent = output;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "=") {
      calculate();
    } else if (value === "AC") {
      output = "";
      display.textContent = output;
    } else {
      output += value;
      display.textContent = output;
    }
  });
});