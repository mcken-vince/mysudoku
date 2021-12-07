import { fillGrid, NumberGridType, removeNumbers } from "./Main";

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

const emptySquares = (grid: NumberGridType): {row: number, col: number}[] => {
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

export const generateBoard = async (difficulty: DifficultyType = 'default'): Promise<[GridType, GridType]>  => {
  let blankGrid: NumberGridType = [ [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] ];
  let newGrid: NumberGridType = blankGrid;
  fillGrid(newGrid);
  const solutionGrid = [[...newGrid[0]],[...newGrid[1]],[...newGrid[2]],[...newGrid[3]],[...newGrid[4]],[...newGrid[5]],[...newGrid[6]],[...newGrid[7]],[...newGrid[8]]];
  let count = 1;
  let squaresToRemove: number;

  if (difficulty === 'easy') {
    squaresToRemove = 25;
  } else if (difficulty === 'difficult') {
    squaresToRemove = 45;
  } else {
    squaresToRemove = 35;
  }
  // change 1 back to squaresToRemove
  while (emptySquares(newGrid).length < 1) {
    try {
      removeNumbers(newGrid, 1);
    } catch {
      count++
    }
  };
  // Add coordinates to 
  const newGridWithCoords: GridType = [];
  const solutionGridWithCoords: GridType = [];
  for (let r = 0; r < 9; r++) {
    newGridWithCoords.push([]);
    solutionGridWithCoords.push([]);
    for (let c = 0; c < 9; c++) {
      newGridWithCoords[r].push({row: r, col: c, value: newGrid[r][c], changeable: (newGrid[r][c] === 0)});
      solutionGridWithCoords[r].push({row: r, col: c, value: solutionGrid[r][c]})
    };
  };
  console.log('try count: ', count);
  console.log('squares removed: ', emptySquares(newGrid).length)
  return [newGridWithCoords, solutionGridWithCoords];
};

export const isEqualGrid = (grid1: GridType, grid2: GridType): boolean => {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (grid1[r][c].value !== grid2[r][c].value) return false;
    };
  };
  return true;
};

export const rowsToRegions = (grid: GridType) => {
  const boardByRegions = [];
  // This works, but could be refactored
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

export const makeCopyOfGrid = (grid: GridType): GridType => {
  return [
    [...grid[0]],
    [...grid[1]],
    [...grid[2]],
    [...grid[3]],
    [...grid[4]],
    [...grid[5]],
    [...grid[6]],
    [...grid[7]],
    [...grid[8]]
  ];
};

export type DifficultyType = 'default' | 'easy' | 'medium' | 'difficult';
export type boardType = rowType[];
// export type boardType = [ rowType, rowType, rowType, rowType, rowType, rowType, rowType, rowType, rowType ];
export type rowType = squareType[];
export type squareType = {num: num, conflict: boolean};
export type num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
export type conflictType = {column: number, row: number};
export type GridType = {row: number, col: number, value: number, changeable?: boolean}[][];