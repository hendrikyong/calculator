document.addEventListener("DOMContentLoaded", function () {
  const buttonContainer = document.querySelector(".buttons");
  const display = document.getElementById("display");
  //declare variables
  let equation = "";
  let result = "";
  let isEqualsPressed = false; //to track if equals has been pressed if yes then
  //need to use further calc with old res + new operations to derive new result
  let newEqn = ""; //for when there is further calculations (not to store the neweqn its to help to derive the new res)
  let newResult = ""; //to track the new result when there is further calculations

  function clear() {
    equation = "";
    result = "";
    isEqualsPressed = false;
  }

  function evaluate() {
    if (equation.includes("√")) {
      console.log("eqn", equation);
      let parts = equation.split(/([\+\-\*\/])/);
      console.log("parts", parts);
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes("√")) {
          //get number inside sqrt
          let operand = parseFloat(
            parts[i].substring(parts[i].indexOf("√") + 1)
          );
          console.log("operand", operand);
          let sqrtResult = Math.sqrt(operand);
          //change parts[i] to string and rejoin eqn to evaluate
          parts[i] = sqrtResult.toString();
        }
      }
      let modifiedEquation = parts.join("");
      result = eval(modifiedEquation);
    } else if (equation.includes("%")) {
      console.log("eqn", equation);
      let parts = equation.split(/([\+\-\*\/])/);
      console.log("parts", parts);
      for (let i = 0; i < parts.length; i++) {
        if (parts[i].includes("%")) {
          let operand = parseFloat(parts[i]);
          console.log("operand", operand);
          let pctDecimal = operand / 100;
          console.log("pctDecimal", pctDecimal);
          parts[i] = pctDecimal.toString();
        }
      }
      let modifiedEquation = parts.join("");
      console.log("modEqn", modifiedEquation);
      result = eval(modifiedEquation);
      result = Math.round(result * 100) / 100;
      console.log(result);
    } else {
      //now that i have checked for sqrt and pct now is to evaluate those eqn without
      //any special characters in them
      //but i still need to check that if equals have been pressed
      //use newEqn to store prev res + add ops then eval and store res in new res
      //temp
      result = eval(equation);
    }
  }

  function evaluateEqualsPressed() {
    const equalsButton = document.querySelector(
      ".buttons-row5 button:nth-child(3)"
    );
    equalsButton.addEventListener("click", function () {
      console.log("second = clicked", this.textContent); //on second = click
      newEqn = result;
      console.log("new eqn", newEqn);
      let parts = equation.split(/([\+\-\*\/])/);
      //console.log("parts", parts);
    });
  }

  //create rows to store buttons
  for (let i = 1; i <= 6; i++) {
    const div = document.createElement("div");
    div.classList.add(`buttons-row${i}`);
    buttonContainer.appendChild(div);
  }

  //button text
  const items = [
    ["clear", "%", "√", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  items.forEach((items, index) => {
    const div = document.querySelector(`.buttons-row${index + 1}`);
    items.forEach((text) => {
      //create button
      const button = document.createElement("button");
      button.textContent = text;
      button.classList.add("btn", "btn-secondary", "m-1");
      button.addEventListener("click", () => {
        //logs button clicks
        //console.log(button.textContent);
        if (text === "clear") {
          clear();
        } else if (text === "=") {
          //if the button clicked is = i need to evaluate the equation
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

  const equals = document.querySelector(".buttons-row5 button:nth-child(3)");
  if (equals) {
    equals.addEventListener("click", function () {
      console.log("first = click");
      isEqualsPressed = true;
      evaluateEqualsPressed();
    });
  }
});
