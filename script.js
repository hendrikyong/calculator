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
          let number = parseFloat(equation);
          result = number / 100;
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
    const postfix = infixToPostfix(equation);
    result = evaluatePostfix(postfix);
  }

  function infixToPostfix(infix) {
    const precedence = {
      "+": 0,
      "-": 0,
      "*": 1,
      "/": 1,
    };
    let outputQueue = [];
    let operatorStack = [];
    let token = "";

    for (let i = 0; i < infix.length; i++) {
      const char = infix[i];

      if (!isNaN(char) || char === ".") {
        token += char;
      } else if (char in precedence) {
        if (token !== "") {
          outputQueue.push(token);
          token = "";
        }
        while (
          operatorStack.length > 0 &&
          precedence[operatorStack[operatorStack.length - 1]] >=
            precedence[char]
        ) {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.push(char);
      }
    }

    if (token !== "") {
      outputQueue.push(token);
    }

    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop());
    }

    return outputQueue; // Return the array of tokens, not joined string
  }

  function evaluatePostfix(postfix) {
    const stack = [];

    postfix.forEach((token) => {
      if (!isNaN(parseFloat(token))) {
        stack.push(parseFloat(token));
      } else {
        const b = stack.pop();
        const a = stack.pop();
        switch (token) {
          case "+":
            stack.push(a + b);
            break;
          case "-":
            stack.push(a - b);
            break;
          case "*":
            stack.push(a * b);
            break;
          case "/":
            stack.push(a / b);
            break;
        }
      }
    });

    return stack.pop();
  }
});
