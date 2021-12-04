import { fillGrid, gridType, removeNumbers } from "./Main";

export const shuffleRow = (array: any[]): any[] => {
  let currentIndex: number = array.length;
  let randomIndex: number;
  // console.log('starting index: ', currentIndex);
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  };
  return array;
};

export const randomIndex = (max: number): number => {
  const number: number = Math.floor(Math.random() * max);
  return number;
};

const emptySquares = (grid: gridType): {row: number, col: number}[] => {
  let emptySquares = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        emptySquares.push({row, col});
      }
    };
  };
  return emptySquares;
};

export const nonEmptySquares = (grid: gridType): {row: number, col: number}[] => {
  let nonEmptySquares = [];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] !== 0) {
        nonEmptySquares.push({row, col});
      }
    };
  };
  return nonEmptySquares;
};

export const generateBoard = async (difficulty: DifficultyType = 'default'): Promise<gridType>  => {
  let blankGrid: gridType = [ [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] ];
  let newGrid: gridType = blankGrid;
  fillGrid(newGrid);
  let count = 1;
  let squaresToRemove: number;

  if (difficulty === 'easy') {
    squaresToRemove = 17;
  } else if (difficulty === 'difficult') {
    squaresToRemove = 35;
  } else {
    squaresToRemove = 25;
  }

  while (emptySquares(newGrid).length < squaresToRemove) {
    try {
      removeNumbers(newGrid, 17);
    } catch {
      count++
    }
  };
  console.log('try count: ', count);
  return newGrid;
};

export const rowsToRegions = (grid: gridType) => {
  const boardByRegions = [];
  // This works, but should be refactored
  boardByRegions.push([ ...grid[0].slice(0, 3), ...grid[1].slice(0, 3), ...grid[2].slice(0, 3) ]);
  boardByRegions.push([ ...grid[0].slice(3, 6), ...grid[1].slice(3, 6), ...grid[2].slice(3, 6) ]);
  boardByRegions.push([ ...grid[0].slice(6, 9), ...grid[1].slice(6, 9), ...grid[2].slice(6, 9) ]);
  boardByRegions.push([ ...grid[3].slice(0, 3), ...grid[4].slice(0, 3), ...grid[5].slice(0, 3) ]);
  boardByRegions.push([ ...grid[3].slice(3, 6), ...grid[4].slice(3, 6), ...grid[5].slice(3, 6) ]);
  boardByRegions.push([ ...grid[3].slice(6, 9), ...grid[4].slice(6, 9), ...grid[5].slice(6, 9) ]);
  boardByRegions.push([ ...grid[6].slice(0, 3), ...grid[7].slice(0, 3), ...grid[8].slice(0, 3) ]);
  boardByRegions.push([ ...grid[6].slice(3, 6), ...grid[7].slice(3, 6), ...grid[8].slice(3, 6) ]);
  boardByRegions.push([ ...grid[6].slice(6, 9), ...grid[7].slice(6, 9), ...grid[8].slice(6, 9) ]);

  return boardByRegions;
};


export type DifficultyType = 'default' | 'easy' | 'medium' | 'difficult';
export type boardType = rowType[];
// export type boardType = [ rowType, rowType, rowType, rowType, rowType, rowType, rowType, rowType, rowType ];
export type rowType = squareType[];
export type squareType = {num: num, conflict: boolean};
export type num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
export type conflictType = {column: number, row: number};