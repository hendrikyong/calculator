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
  let addOp = ""; //if there is additional operations to craft new eqn

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

  //test case 5*5+2 = 27 /2 = 13.5
  const equals = document.querySelector(".buttons-row5 button:nth-child(3)");
  if (equals) {
    equals.addEventListener("click", function () {
      console.log("first = click");
      isEqualsPressed = true;
      if (result >= 0) {
        //find a way to track add op aft that add that shit to new eqn once done then evaluate
        //turn this whole thing into a function and then use if else at the else block of evaluate
        document.querySelectorAll(".buttons button").forEach((button) => {
          button.addEventListener("click", function () {
            //console.log("text content", this.textContent);
            if (this.textContent !== "=") {
              //then add it to add op
              //after that craft newEqn and then eval
              addOp += this.textContent;
              console.log("add op", addOp);
            }
            newEqn = result + addOp;
            console.log("new eqn", newEqn);
            newResult = eval(newEqn);
            console.log("res", result);
            console.log("new res", newResult);
            result = newResult;
            console.log("res1", result);
            display.innerHTML =
              newEqn + "<br><span class='result'>" + result + "</span>";
          });
        });
      }
    });
  }
});
