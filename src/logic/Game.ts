import { checkGrid, fillGrid, gridType } from "./Main";

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

// const randomIndex = (max: number): number => {
//   const number: number = Math.floor(Math.random() * max);
//   console.log('randomNumber: ', number)
//   return number;
// };

export const generateBoard = (difficulty: DifficultyType = 'default'): gridType  => {
  let blankGrid: gridType = [ [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] ];
  let newGrid: gridType = blankGrid;
  fillGrid(newGrid);

  while (true) {
    if (checkGrid(newGrid)) break;
    newGrid = [ [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] ];;
    fillGrid(newGrid);
  }

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