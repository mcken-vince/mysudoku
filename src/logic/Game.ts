import { blankGrid, checkGrid, fillGrid, gridType, solveGrid } from "./Main";

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

const randomIndex = (max: number): number => {
  const number: number = Math.floor(Math.random() * max);
  console.log('randomNumber: ', number)
  return number;
};

const switchSquares = (board: boardType, index1: {row: number, column: number}, index2: {row: number, column: number}) => {
  board[index1.row][index1.column].conflict = false;
  board[index2.row][index2.column].conflict = false;
  let temp = board[index1.row][index1.column];
  board[index1.row][index1.column] = board[index2.row][index2.column];
  board[index2.row][index2.column] = temp;
};


export const generateBoard = (difficulty: DifficultyType = 'default'): any  => {
  const newGrid = [ [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] ];
 
  fillGrid(newGrid);
  if (checkGrid(newGrid)) return newGrid;
};

export const checkRows = (board: boardType): boolean => {
  let conflict = false;
  let numbersInRow: any[] = [];
  for (let row = 0; row < board.length; row++) {
    numbersInRow.length = 0;
    for (let i = 0; i < board[row].length; i++) {
      if (numbersInRow.includes(board[row][i].num)) {
        board[row][i].conflict = true;
        console.log(`row conflict at ${row}, ${i} `);
        conflict = true;
      } else {
        numbersInRow.push(board[row][i].num);
      }
    }
  }
  return conflict;
};

export const checkColumns = (board: boardType): [boolean, conflictType[]] => {
  // not catching all conflicts
  let conflict = false;
  const conflictIndexes = [];
  let numbersInColumn: any[] = [];
  for (let column = 0; column < board.length; column++) {
    numbersInColumn.length = 0;
    // console.log(`--------------------checking column ${column}-------------------------`)
    for (let i = 0; i < board[column].length; i++) {
      // console.log('numbersInColumn in second for loop', numbersInColumn)
      if (numbersInColumn.includes(board[i][column].num)) {
        board[i][column].conflict = true;
        conflictIndexes.push({column, row: i});
        // console.log(`column conflict at ${column}, ${i} `);
        conflict = true;
      } else {
        // console.log(`adding ${board[i][column].num} to column ${column}`)
        numbersInColumn.push(board[i][column].num);
      }
    }
  };
  console.log('totalConflicts: ', conflictIndexes.length);
  return [conflict, conflictIndexes];
};

export const checkRegions = (board: boardType): boolean => {
  let conflict = false;

  return conflict;
};

export const hasConflicts = (board: boardType): boolean => {
  
  return true;
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