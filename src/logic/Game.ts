import { fillGrid, ModeType, NumberGridType, removeNumbers, whichBlock } from "./Main";

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

export const generateBoard = async (difficulty: DifficultyType = 'default', mode: ModeType): Promise<GridType>  => {
  let blankGrid: NumberGridType = [ [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] ];
  let newGrid: NumberGridType = blankGrid;
  fillGrid(newGrid, mode);
  const solutionGrid = [[...newGrid[0]],[...newGrid[1]],[...newGrid[2]],[...newGrid[3]],[...newGrid[4]],[...newGrid[5]],[...newGrid[6]],[...newGrid[7]],[...newGrid[8]]];
  let count = 1;
  let squaresToRemove: number;
  if (difficulty === 'easy') {
    squaresToRemove = 25;
  } else if (difficulty === 'difficult') {
    squaresToRemove = 43;
  } else {
    squaresToRemove = 35;
  }



  while (emptySquares(newGrid).length < squaresToRemove) {
    try {
      removeNumbers(newGrid, 1);
    } catch {
      count++;
    }
  };
  // Add coordinates to 
  const newGridWithCoords: GridType = [];
  const solutionGridWithCoords: GridType = [];
  const oddSquares: squareType[] = [];
  const evenSquares: squareType[] = [];
  for (let r = 0; r < 9; r++) {
    newGridWithCoords.push([]);
    solutionGridWithCoords.push([]);
    for (let c = 0; c < 9; c++) {
      const square = whichBlock(r, c).square;
      newGridWithCoords[r].push({row: r, col: c, value: newGrid[r][c], changeable: (newGrid[r][c] === 0), square, solution: solutionGrid[r][c]});
      
      // If this square has been removed and its value is odd 
      if (newGrid[r][c] !== solutionGrid[r][c]) {

        if (solutionGrid[r][c] % 2 === 0) {
          evenSquares.push(newGridWithCoords[r][c]);
        } else {
          oddSquares.push(newGridWithCoords[r][c]);
        }
      }

    };
  };
  let squaresToHighlight: number;
  if (mode === 'odd') {
    // Shuffle the odd-valued squares and highlight a quarter of them
    shuffleRow(oddSquares);
    squaresToHighlight = Math.floor(oddSquares.length / 4);
    for (let x = 0; x < squaresToHighlight; x++) {
      oddSquares[x].highlight = true;
    };
  }
  if (mode === 'even') {
    shuffleRow(evenSquares);
    squaresToHighlight = Math.floor(evenSquares.length / 4);
    for (let x = 0; x < squaresToHighlight; x++) {
      evenSquares[x].highlight = true;
    }
  }

  return newGridWithCoords;
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

export const secondsToTimeString = (timeInSeconds: number): string => {
  const hours = Math.floor(timeInSeconds / (60 * 60));
  const minutes = Math.floor(timeInSeconds / 60) - (hours > 0 ? hours * 60 : 0);
  const seconds = timeInSeconds % 60;

  const timeString = 
    (hours < 10 ? `0${hours}` : hours) + ':' + 
    (minutes < 10 ? `0${minutes}` : minutes) + ':' + 
    (seconds < 10 ? `0${seconds}` : seconds);
  return timeString;
};

export type DifficultyType = 'default' | 'easy' | 'medium' | 'difficult';

export type squareType = {row: number, col: number, value: number, changeable?: boolean, square: number, solution: number, highlight?: boolean};
export type num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
// export type conflictType = {column: number, row: number};

export type GridType = squareType[][];