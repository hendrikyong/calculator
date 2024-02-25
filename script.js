document.addEventListener("DOMContentLoaded", function () {
  const buttonsContainer = document.querySelector(".buttons");

  // Create divs
  for (let i = 1; i < 6; i++) {
    const div = document.createElement("div");
    div.classList.add(`buttons-row${i}`);
    buttonsContainer.appendChild(div);
  }

  // Items to add to each div
  const items = [
    ["clear", "%", "√", "/"], // Items for buttons-row1
    ["7", "8", "9", "*"], // Items for buttons-row2
    ["4", "5", "6", "-"], // Items for buttons-row3
    ["1", "2", "3", "+"], // Items for buttons-row4
    ["0", ".", "="], // Items for buttons-row5
  ];

  // Iterate over each div and add items
  items.forEach((item, index) => {
    const div = document.querySelector(`.buttons-row${index + 1}`);
    item.forEach((text) => {
      const button = document.createElement("button");
      button.textContent = text;
      button.classList.add("btn", "btn-secondary", "m-1");
      div.appendChild(button);
    });
  });
});
