document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons");
  let displayValue = "";
  const display = document.getElementById("display");

  for (let i = 1; i < 6; i++) {
    const div = document.createElement("div");
    div.classList.add(`buttons-row${i}`);
    buttonsContainer.appendChild(div);
  }

  const items = [
    ["clear", "%", "√", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  items.forEach((item, index) => {
    const div = document.querySelector(`.buttons-row${index + 1}`);
    item.forEach((text) => {
      const button = document.createElement("button");
      button.textContent = text;
      button.classList.add("btn", "btn-secondary", "m-1");
      button.addEventListener("click", () => {
        if (text === "clear") {
          displayValue = "";
          //to reset position when clear is clicked
          display.style.justifyContent = "flex-start";
          display.style.alignItems = "flex-start";
        } else if (text === "=") {
          let result = eval(displayValue);
          if (result > 10000000) {
            displayValue = result.toExponential();
            display.style.justifyContent = "flex-end";
            display.style.alignItems = "flex-end";
          } else {
            displayValue = Math.round(result * 1e10) / 1e10;
            display.style.justifyContent = "flex-end";
            display.style.alignItems = "flex-end";
          }
        } else if (text === "√") {
          displayValue = Math.sqrt(Number(displayValue));
        } else if (text === "%") {
          displayValue = Number(displayValue) / 100;
        } else {
          displayValue += text;
        }
        console.log(`${text} clicked`);
        display.innerHTML = displayValue;
      });
      div.appendChild(button);
    });
  });
});
