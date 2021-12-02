import { shuffleRow } from "./Game";

export const blankGrid: gridType = [ [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] ];
let counter = 0;
const numberList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
/**
 * Checks every square in the grid and returns false if any one has a value of 0, returns true if all squares are filled.
 * @param grid 
 * @returns isFilled
 */
export const checkGrid = (grid: gridType): boolean => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        // console.log('checkGrid: false');
        return false;
      }
    };
  };
  // console.log('checkGrid: true');
  return true;
};

const whichSquare = (grid: gridType, row: number, col: number) => {
  let square = [];
  if (row < 3) {
    if (col < 3) {
      square = [...grid[0].slice(0, 3), ...grid[1].slice(0, 3), ...grid[2].slice(0, 3)];
    } else if (col < 6) {
      square = [...grid[0].slice(3, 6), ...grid[1].slice(3, 6), ...grid[2].slice(3, 6)];
    } else {
      square = [...grid[0].slice(6, 9), ...grid[1].slice(6, 9), ...grid[2].slice(6, 9)];
    }
  } else if (row < 6) {
    if (col < 3) {
      square = [...grid[3].slice(0, 3), ...grid[4].slice(0, 3), ...grid[5].slice(0, 3)];
    } else if (col < 6) {
      square = [...grid[3].slice(3, 6), ...grid[4].slice(3, 6), ...grid[5].slice(3, 6)];
    } else {
      square = [...grid[3].slice(6, 9), ...grid[4].slice(6, 9), ...grid[5].slice(6, 9)];
    }
  } else {
    if (col < 3) {
      square = [...grid[6].slice(0, 3), ...grid[7].slice(0, 3), ...grid[8].slice(0, 3)];
    } else if (col < 6) {
      square = [...grid[6].slice(3, 6), ...grid[7].slice(3, 6), ...grid[8].slice(3, 6)];
    } else {
      square = [...grid[6].slice(6, 9), ...grid[7].slice(6, 9), ...grid[8].slice(6, 9)];
    }
  }
  return square;
};

export const solveGrid = (grid: gridType) => {
  for (let i = 0; i < 81; i++) {
    let row: number = Math.floor(i / 9);
    let col: number = i % 9;
      
    if (grid[row][col] === 0) {
      for (let value = 1; value <= 9; value++) {
        // Check that this value is not already in this row
        if (!grid[row].includes(value)) {
          // Check that this value is not already in this column
          const column = [grid[0][col], grid[1][col], grid[2][col], grid[3][col], grid[4][col], grid[5][col], grid[6][col], grid[7][col], grid[8][col]];
          if (!column.includes(value)) {
            let square = whichSquare(grid, row, col);
            if (!square.includes(value)) {
              grid[row][col] = value;
            }
            if (checkGrid(grid)) {
              counter++;
              console.log('counter: ', counter);
              break;
            } else {
              if (solveGrid(grid)) return true;
            }
          }
          break;
        }
      };
    }
    // grid[row][col] = 0;
  };
};

export const fillGrid = (grid: gridType) => {
  for (let i = 0; i < 81; i++) {
    let row = Math.floor(i / 9);
    let col = i % 9;
    if (grid[row][col] === 0) {
      const thisNumberList: number[] = shuffleRow([ ...numberList ]);
      for (let value of thisNumberList) {
        // Check if value is already in this row
        if (!grid[row].includes(value)) {
          const column = [grid[0][col], grid[1][col], grid[2][col], grid[3][col], grid[4][col], grid[5][col], grid[6][col], grid[7][col], grid[8][col]];
          // Check if value is already in this column
          if (!column.includes(value)) {
            let square = whichSquare(grid, row, col);
            // Check if value is already in this block
            if (!square.includes(value)) {
              grid[row][col] = value;
              if (checkGrid(grid)) {
                return true;
              } else {
                if (fillGrid(grid)) {
                  return true;
                } 
              }
            }
          }
        }

      };
      break;
    }
    // There's a hole here somewhere, incomplete grids can slip through the cracks.
    // console.log(`${row}${col} = 0`)
    // grid[row][col] = 0;
  };
};


export type gridType = number[][];