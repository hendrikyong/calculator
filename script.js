document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons");
  let equation = "";
  let result = "";
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
          clear();
        } else if (text === "=") {
          evaluate();
        } else if (text === "√") {
          sqrt();
        } else if (text === "%") {
          percent();
        } else {
          equation += text;
          console.log("input", equation);
        }
        display.innerHTML =
          equation + "<br>" + "<span class='result'>" + result + "</span>";
      });
      div.appendChild(button);
    });
  });
  function clear() {
    console.log("clear clicked");
    equation = "";
    result = "";
  }
  function evaluate() {
    console.log("= clicked");
    result = eval(equation);
    console.log(result);
  }
  function sqrt() {
    result = Math.sqrt(equation);
    equation = "√" + equation;
    console.log("res", result);
    console.log("eqn", equation);
    result = parseFloat(result.toFixed(7));
  }
  function percent() {
    equation = parseFloat(equation);
    result = equation / 100;
    equation += "%";
    console.log(result);
  }
});
