"use strict";

// Variables
const sketch = document.querySelector(`.sketch`);
const btnGrid = document.querySelector(`.btn-grid`);
const btnReset = document.querySelector(`.btn-reset`);
const input = document.querySelector(`.input`);
const displayGrid = document.querySelector(`.display-grid`);
const headingMain = document.querySelector(`.heading-main`);

const randomColors = [
  `maroon`,
  `brown`,
  `olive`,
  `teal`,
  `navy`,
  `black`,
  `red`,
  `orange`,
  `yellow`,
  `lime`,
  `green`,
  `cyan`,
  `blue`,
  `purple`,
  `magenta`,
  `gray`,
  `pink`,
  `#ffd8b1`,
  `beige`,
  `#aaffc3`,
  `lavender`,
  `white`,
];

let gridSize;

// Functions

function init() {
  gridSize = 16;

  generateGrid(gridSize);
}

function randomColour() {
  const num = Math.floor(Math.random() * 21);
}

randomColour();

function removeGrid() {
  sketch.innerHTML = ``;
}

function generateGrid(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    const row = document.createElement("div");
    row.style.width = `100%`;
    row.style.height = `${600 / gridSize}px`;
    row.style.display = `flex`;
    sketch.appendChild(row);
    for (let j = 1; j <= gridSize; j++) {
      const square = document.createElement(`div`);
      square.style.height = `${600 / gridSize}px`;
      square.style.width = `${600 / gridSize}px`;

      row.appendChild(square);
      square.addEventListener(`mouseover`, () => {
        square.style.backgroundColor = "black";
      });
    }
  }
}

init();

btnGrid.addEventListener(`click`, () => {
  if (input.value < 16 || input.value > 100) {
    alert(`Enter a size between 16 and 100`);
  } else {
    removeGrid();
    gridSize = input.value;
    displayGrid.textContent = `${gridSize} X ${gridSize}`;
    generateGrid(gridSize);
  }
});

btnReset.addEventListener(`click`, () => {
  const rows = Array.from(document.querySelector(`.sketch`).children);

  for (let row of rows) {
    const squares = row.children;
    for (let square of squares) {
      square.style.backgroundColor = `#fff`;
    }
  }
  removeGrid();
  generateGrid(gridSize);
});
