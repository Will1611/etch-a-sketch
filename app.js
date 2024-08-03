"use strict";

// Variables
const sketch = document.querySelector(`.sketch`);
const btnReset = document.querySelector(`.btn-reset`);

let gridSize = 16;
let squares = [];

// Functions

function init() {
  for (let i = 1; i <= gridSize; i++) {
    const row = document.createElement("div");
    row.style.width = `100%`;
    row.style.height = gridSize;
    sketch.appendChild(row);
    for (let j = 1; j <= gridSize; j++) {
      const square = document.createElement(`div`);
      square.style.height = `${800 / gridSize}px`;
      square.style.width = `${800 / gridSize}px`;

      squares.push(square);

      row.appendChild(square);
      square.addEventListener(`mouseover`, () => {
        square.style.backgroundColor = "black";
      });
    }
  }
}

init();

for (let square of squares) {
  square.removeEventListener;
}

// document.body.addEventListener(`click`, () => {
//   console.log(`clicked`);
//   square.removeEventListener(`mouseover`, addEventListener);
// });
