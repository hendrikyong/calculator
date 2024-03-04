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
          equation = "";
          result = "";
        } else if (text === "=") {
          result = eval(equation);
          if (result > 10000000) {
            result = result.toExponential();
          } else {
            result = parseFloat(result.toFixed(7));
          }
          console.log(result); //test okay 8,9 + - * /
        } else if (text === "√") {
          //but how do i allow like continue to do operations ? as of right now this code only allows for
          // returning the result of a sqrt number
          const number = parseFloat(equation);
          if (!isNaN(number)) {
            result = Math.sqrt(number);
            if (Number.isInteger(result)) {
              result = result.toFixed(0); //for whole like sqrt 9
            } else {
              result = result.toFixed(7); //limit 7 dp
            }
            equation = "√" + equation;
          }
        } else if (text === "%") {
          //same thing here as the sqrt
          let number = parseFloat(equation);
          console.log("num", number);
          console.log("eqn", equation);
          result = number / 100;
          console.log("res", result);
        } else {
          equation += text;
        }
        display.innerHTML =
          equation + "<br>" + "<span class='result'>" + result + "</span>";
      });
      div.appendChild(button);
    });
  });
});
