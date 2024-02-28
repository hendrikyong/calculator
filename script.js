document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons");
  let displayEquation = ""; // Variable to store the equation
  let displayResult = ""; // Variable to store the result
  let equation = "";
  let resultValue = ""; // Variable to store the calculated result
  const display = document.getElementById("display");
  //create rows
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
      //create button
      const button = document.createElement("button");
      button.textContent = text;
      button.classList.add("btn", "btn-secondary", "m-1");
      button.addEventListener("click", () => {
        if (text === "clear") {
          equation = "";
          displayEquation = "";
          displayResult = "";
          resultValue = "";
        } else if (text === "=") {
          equation = displayEquation;
          let result = eval(displayEquation);
          if (result > 10000000) {
            resultValue = result.toExponential();
          } else {
            resultValue = Math.round(result * 1e10) / 1e10;
          }
          displayResult = resultValue;
        } else if (text === "√") {
          equation = `√(${displayEquation})`;
          resultValue = Math.sqrt(Number(displayEquation));
        } else if (text === "%") {
          equation = `(${displayEquation}) / 100`;
          resultValue = Number(displayEquation) / 100;
        } else {
          equation += text;
          displayEquation += text;
        }
        display.innerHTML =
          displayEquation +
          "<br>" +
          "<span class='result'>" +
          displayResult +
          "</span>";
      });
      div.appendChild(button);
    });
  });
});
