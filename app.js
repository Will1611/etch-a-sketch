"use strict";

// Variables
const sketch = document.querySelector(`.sketch`);
let rows;

const btnGrid = document.querySelector(`.btn-grid`);
const btnReset = document.querySelector(`.btn-reset`);

const input = document.querySelector(`.input`);
const inputColor = document.querySelector(`.input-color`);

const displayGrid = document.querySelector(`.display-grid`);
const headingMain = document.querySelector(`.heading-main`);

const radioEraser = document.querySelector(`.radio-eraser`);
const radioRainbow = document.querySelector(`.radio-rainbow`);

const hexValues = [
  `0`,
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `A`,
  `B`,
  `C`,
  `D`,
  `E`,
  `F`,
];

let gridSize;

// Functions

function init() {
  gridSize = 16;
  document.body.style.backgroundColor = randomColor();
  randomColorH1();
  generateGrid(gridSize);
}

function randomColor() {
  let arr = [`#`, ``, ``, ``, ``, ``, ``];
  for (let i = 1; i < arr.length; i++) {
    const num = Math.floor(Math.random() * 15);
    arr[i] = hexValues[num];
  }
  // Convert array to string without commas
  const color = arr.join(``);
  return color;
}

function randomColorH1() {
  const letters = Array.from(headingMain.children);

  for (let letter of letters) {
    letter.style.color = randomColor();
  }
}

function removeGrid() {
  sketch.innerHTML = ``;
}

function resetRadios() {
  radioEraser.checked = false;
  radioRainbow.checked = false;
}

function useGrid() {
  // inputColor.value = `#000000`;
  rows = Array.from(sketch.children);
  for (let row of rows) {
    const squares = Array.from(row.children);
    for (let square of squares) {
      square.addEventListener(`mouseenter`, () => {
        square.style.backgroundColor = inputColor.value;
      });
      radioEraser.addEventListener(`click`, () => {
        square.addEventListener(`mouseenter`, () => {
          square.style.backgroundColor = ``;
        });
      });
      radioRainbow.addEventListener(`click`, () => {
        square.addEventListener(`mouseenter`, () => {
          square.style.backgroundColor = randomColor();
        });
      });
    }
  }
}

function generateGrid(gridSize) {
  resetRadios();
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
    }
  }
  useGrid();
}

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
  for (let row of rows) {
    const squares = row.children;
    for (let square of squares) {
      square.style.backgroundColor = `#fff`;
    }
  }
  resetRadios();
  removeGrid();
  generateGrid(gridSize);
});

inputColor.addEventListener(`click`, (event) => {
  resetRadios();

  rows = Array.from(sketch.children);
  for (let row of rows) {
    const squares = Array.from(row.children);
    for (let square of squares) {
      square.addEventListener(`mouseenter`, () => {
        square.style.backgroundColor = inputColor.value;
      });
    }
  }
});

init();
