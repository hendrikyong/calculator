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
        console.log(text); //logs each click
        if (text === "clear") {
          clear();
          // console.log("clear function works");
        } else if (text === "=") {
          //here needs to evaluate
          evaluate();
        } else if (text === "√") {
          //sqrt funct
          sqrt();
          // console.log(result);
        } else if (text === "%") {
          //percent funct
          percent();
          // console.log(result);
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

  function sqrt() {
    const number = parseFloat(equation);
    if (!isNaN(number)) {
      //check if number is a number
      result = Math.sqrt(number);
      if (Number.isInteger(result)) {
        result = result.toFixed(0); //for whole like sqrt 9
      } else {
        result = result.toFixed(6); //limit 6 dp
      }
      equation = "√" + equation;
    }
  }

  function percent() {
    result = parseFloat(equation) / 100;
    equation = equation + "%";
  }

  function evaluate() {
    console.log("eqn", equation);
    if (equation.includes("√")) {
      console.log("this eqn got sqrt");
      equation = equation.split(/[\+\-\*\/]/); //use regex to split if theres add operations
      console.log("this", equation);
      // prob need to use another name to store for the splitting then can join back again ?
      // now split accordingly already and then i need to evaluate it probably need to worry about podmas
    } else if (equation.includes("%")) {
      console.log("this eqn got percent");
      equation = equation.split(/[\+\-\*\/]/); //use regex to split if theres add operations
      console.log(equation);
    } else {
      result = eval(equation);
    }
  }
});
