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
        // console.log("text", text); //logs each click
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
      console.log(modifiedEquation);

      //evaluate need to do rounding
      result = eval(modifiedEquation);
      if (result % 1 === 0) {
        //if whole
        result = result.toFixed(0);
      } else {
        //if not whole
        result = result.toFixed(6);
      }
      console.log("Result:", result);
    } else if (equation.includes("%")) {
      console.log("eqn", equation);
      let parts = equation.split(/([\+\-\*\/])/);
      console.log("part1", parts);

      //find pct
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
      //else just evaluate
      result = eval(equation);
      console.log("Result:", result);
    }
    if (!isFinite(result)) {
      result = "Math Error";
    } else {
      result = Number.isInteger(parseFloat(result))
        ? result
        : parseFloat(result).toFixed(5);
    }
    //--------------CODE ABOVE IS GOOD DO NOT DELETE THIS COMMENT UNTIL DONE---------------
    //adding code to help further calculation rather than reevaluating the whole line
    //.buttons-row5 button:nth-child(3) targets = button
    //have to calculate further by storing result in new eqn and then eval new eqn and see whats up
    let addOp = "";
    let modifiedEqn = "";
    let newResult = eval(modifiedEqn);
    document.querySelectorAll(".buttons button").forEach((button) => {
      button.addEventListener("click", function () {
        console.log("text con", this.textContent);
        if (this.textContent !== "=") {
          addOp += this.textContent;
          console.log("add op", addOp);
          modifiedEqn = result + addOp;
          console.log("mod eqn", modifiedEqn);
          newResult = eval(modifiedEqn); //i did get 13.5 on console.log but this line error
          console.log("new res", newResult);
          result = newResult;
          display.innerHTML =
            equation + "<br>" + "<span class='result'>" + newResult + "</span>"; // Update the display
        }
      });
    });

    //this one is for when = clicked and any operations aft that then calculate further rather than reevaluate the
    //whole eqn again
  }
});
