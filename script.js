document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons");
  let displayValue = "";

  for (let i = 1; i < 6; i++) {
    const div = document.createElement("div");
    div.classList.add(`buttons-row${i}`);
    buttonsContainer.appendChild(div);
  }

  const items = [
    ["clear", "%", "√", "/"], // Items for buttons-row1
    ["7", "8", "9", "*"], // Items for buttons-row2
    ["4", "5", "6", "-"], // Items for buttons-row3
    ["1", "2", "3", "+"], // Items for buttons-row4
    ["0", ".", "="], // Items for buttons-row5
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
        } else if (text === "=") {
          displayValue = eval(displayValue);
          displayValue = Math.round(displayValue * 1e10) / 1e10;
        } else if (text === "√") {
          displayValue = Math.sqrt(Number(displayValue));
        } else if (text === "%") {
          displayValue = Number(displayValue) / 100;
        } else {
          displayValue += text;
        }
        console.log(`${text} clicked`);
        document.getElementById("display").innerHTML = displayValue;
      });
      div.appendChild(button);
    });
  });
});
