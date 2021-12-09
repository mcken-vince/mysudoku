import { shuffleRow, randomIndex, GridType } from "./Game";

export const blankGrid: NumberGridType = [ [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] ];

let counter = 0;

const numberList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
/**
 * Checks every square in the grid and returns false if any one has a value of 0, returns true if all squares are filled.
 * @param grid 
 * @returns isFilled
 */
export const checkNumberGrid = (grid: NumberGridType): boolean => {
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

export const checkGrid = (grid: GridType): boolean => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col].value === 0) {
        return false;
      }
    };
  };
  return true; 
};

export const isSolved = (grid: GridType): boolean => {
  const squares: number[][] = [[],[],[],[],[],[],[],[],[]];
  for (let r = 0; r < 9; r++) {
    const thisRow: number[] = [];
    const thisCol: number[] = [];
    for (let c = 0; c < 9; c++) {
      if (grid[r][c].value === 0) return false;
      if (thisRow.includes(grid[r][c].value)) {
        return false;
      } else {
        thisRow.push(grid[r][c].value);
      }
      if (thisCol.includes(grid[r][c].value)) {
        return false;
      } else {
        thisCol.push(grid[r][c].value);
      }
      if (squares[grid[r][c].square].includes(grid[r][c].value)) {
        return false;
      } else {
        squares[grid[r][c].square].push(grid[r][c].value);
      }
    };
  };
  return true;
};

export const whichBlock = (row: number, col: number, grid?: NumberGridType, ): {block: any[], square: number} => {
  let block: any[] = [];
  let square: number;
  if (row < 3) {
    if (col < 3) {
      square = 0
      if (grid) block = [...grid[0].slice(0, 3), ...grid[1].slice(0, 3), ...grid[2].slice(0, 3)];
    } else if (col < 6) {
      square = 1;
      if (grid) block = [...grid[0].slice(3, 6), ...grid[1].slice(3, 6), ...grid[2].slice(3, 6)];
    } else {
      square = 2;
      if (grid) block = [...grid[0].slice(6, 9), ...grid[1].slice(6, 9), ...grid[2].slice(6, 9)];
    }
  } else if (row < 6) {
    if (col < 3) {
      square = 3;
      if (grid) block = [...grid[3].slice(0, 3), ...grid[4].slice(0, 3), ...grid[5].slice(0, 3)];
    } else if (col < 6) {
      square = 4;
      if (grid) block = [...grid[3].slice(3, 6), ...grid[4].slice(3, 6), ...grid[5].slice(3, 6)];
    } else {
      square = 5;
      if (grid) block = [...grid[3].slice(6, 9), ...grid[4].slice(6, 9), ...grid[5].slice(6, 9)];
    }
  } else {
    if (col < 3) {
      square = 6;
      if (grid) block = [...grid[6].slice(0, 3), ...grid[7].slice(0, 3), ...grid[8].slice(0, 3)];
    } else if (col < 6) {
      square = 7;
      if (grid) block = [...grid[6].slice(3, 6), ...grid[7].slice(3, 6), ...grid[8].slice(3, 6)];
    } else {
      square = 8;
      if (grid) block = [...grid[6].slice(6, 9), ...grid[7].slice(6, 9), ...grid[8].slice(6, 9)];
    }
  }
  return {block, square};
};

export const solveGrid = (grid: NumberGridType) => {
  for (let i = 0; i < 81; i++) {
    let row: number = Math.floor(i / 9);
    let col: number = i % 9;
    const thisRow = grid[row];
    const thisColumn = [grid[0][col], grid[1][col], grid[2][col], grid[3][col], grid[4][col], grid[5][col], grid[6][col], grid[7][col], grid[8][col]];
    const thisBlock = whichBlock(row, col, grid).block;
    if (grid[row][col] === 0) {
      for (let value = 1; value <= 9; value++) {
        // Check that this value is not already in this row
        if (!thisRow.includes(value)) {
          // Check that this value is not already in this column
          if (!thisColumn.includes(value)) {
            // Check that this vlaue is not already in this block
            if (!thisBlock.includes(value)) {
              grid[row][col] = value;
            }
            if (checkNumberGrid(grid)) {
              counter++;
              break;
            } else {
              if (solveGrid(grid)) return true;
            }
           
          }
          grid[row][col] = 0;
        }
      };
      // If there is a square that does not have a compatible number then break out of the loop
      break;
    }
  };
  return false;
};

export const fillGrid = (grid: NumberGridType) => {
  let thisGrid = grid;
  counter = 0;
  for (let i = 0; i < 81; i++) {
    let row = Math.floor(i / 9);
    let col = i % 9;
    // If this single square does not yet have a number assigned to it
    if (thisGrid[row][col] === 0) {
      let thisBlock = whichBlock(row, col, thisGrid).block;
      const thisColumn = [thisGrid[0][col], thisGrid[1][col], thisGrid[2][col], thisGrid[3][col], thisGrid[4][col], thisGrid[5][col], thisGrid[6][col], thisGrid[7][col], thisGrid[8][col]];
      const thisRow = thisGrid[row];
      const thisNumberList: number[] = shuffleRow([ ...numberList ]);
      for (let value of thisNumberList) {
        counter++;
        if (counter > 20_000) throw new Error ('Recursion Timeout');
        // Check if value is already in this row
        if (!thisRow.includes(value)) {
          // Check if value is already in this column
          if (!thisColumn.includes(value)) {
            // Check if value is already in this 9x9 block
            if (!thisBlock.includes(value)) {
              thisGrid[row][col] = value;
              // If grid is complete return true
              if (checkNumberGrid(thisGrid)) {
                console.log('grid is complete!')
                return true;
              } else {
                // If a subsequent recursive call of fillGrid is complete then return true
                if (fillGrid(thisGrid)) {
                  return true;
                } 
              }
              // If subsequent calls cannot be completed, then reset this square to 0
              grid[row][col] = 0;
            }
          }
        }
      };
      break;
    }
  };
  return false;
};

export const removeNumbers = (grid: NumberGridType, removeCount: number) => {
  let attempts = removeCount;
  counter = 1;
  while (attempts > 0) {
    let row = randomIndex(8);
    let col = randomIndex(8);
    // If that square is already a 0, select a different one
    while (grid[row][col] === 0) {
      row = randomIndex(8);
      col = randomIndex(8);
    };
    let backup = grid[row][col];
    // console.log('backup: ', backup);
    grid[row][col] = 0;

    // Make a full copy of the grid;
    let copyGrid: any[] = [];
    for (let r = 0; r < 9; r++) {
      copyGrid.push([]);
      for (let c = 0; c < 9; c++) {
        copyGrid[r].push(grid[r][c]);
      };
    };
    counter = 0;
    solveGrid(copyGrid);
    // console.log('counter after solveGrid: ', counter)
    if (counter !== 1) {
      // console.log("that won't work, counter =", counter)
      grid[row][col] = backup;
      attempts--;
    }
  };
};



export type NumberGridType = number[][];
