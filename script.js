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
        console.log("text", text); //logs each click
        if (text === "clear") {
          clear();
        } else if (text === "=") {
          //here needs to evaluate
          evaluate();
        } else {
          equation += text;
        }
        display.innerHTML =
          equation + "<br>" + "<span class='result'>" + result + "</span>";
      });
      div.appendChild(button);
    });
  });

  function clear() {
    equation = "";
    result = "";
  }

  function percent() {
    result = parseFloat(equation) / 100;
    equation = equation + "%";
  }

  function evaluate() {
    if (equation.includes("√")) {
      console.log("eqn", equation);

      //split equation
      let parts = equation.split(/([\+\-\*\/])/);
      console.log("part1", parts);
      //find sqrt
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes("√")) {
          //get number inside sqrt
          let operand = parseFloat(
            parts[i].substring(parts[i].indexOf("√") + 1)
          );
          console.log("operand", operand);
          let sqrtResult = Math.sqrt(operand);
          parts[i] = sqrtResult.toString();
        }
      }
      //rejoin
      let modifiedEquation = parts.join("");
      //here got issue need to handle the sqrt is applied to the first number
      //i did 6 * sqrt 9 but it gives me sqrt6 * 9
      console.log(modifiedEquation);

      //evaluate need to do rounding
      result = eval(modifiedEquation);
      console.log("Result:", result);
    } else if (equation.includes("%")) {
      console.log("this eqn got percent");
      //percent here
    } else {
      //else just evaluate
      result = eval(equation);
      console.log("Result:", result);
    }
  }
});
