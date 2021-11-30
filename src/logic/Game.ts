import { arrayBuffer } from "stream/consumers";

const availableNumbers: num[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

const shuffleRow = (array: rowType) => {
  let currentIndex: number = array.length;
  let randomIndex: number;
  // console.log('starting index: ', currentIndex);
  while (currentIndex >= 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

export const generateBoard = (difficulty: DifficultyType = 'default'): boardType  => {
  const row: rowType = [1,2,3,4,5,6,7,8,9];
  const numbers: boardType = [ [...row], [...row], [...row], [...row], [...row], [...row], [...row], [...row], [...row] ];
  const board: boardType = numbers.map((r: rowType) => r);

  return board;
};

const checkRows = (board: boardType): boolean => {
  for (let row = 0; row < board.length; row++) {
    const uniqueItems = new Set(board[row]);  
    if (uniqueItems.size !== board[row].length) {
      return false;
    }
  };
  return true;
};

const checkColumns = (board: boardType): boolean => {
  for (let column = 0; column < board.length; column++) {
    
  };
  
  return true;
};

const hasConflicts = (board: boardType): boolean => {
  const allowed = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];


  return true;
};

export const rowsToRegions = (board: boardType) => {
  const boardByRegions = [];
  console.log('board by rows:', board);
  // for (let x = 0; x < 9; x++) {
  //   const region = [...board].slice()
  // };
  console.log('board[0]', board[0])

  boardByRegions.push([ ...board[0].slice(0, 3), ...board[1].slice(0, 3), ...board[2].slice(0, 3) ]);
  boardByRegions.push([...board[0].slice(3, 6), ...board[1].slice(3, 6), ...board[2].slice(3, 6) ]);
  boardByRegions.push([ ...board[0].slice(6, 9), ...board[1].slice(6, 9), ...board[2].slice(6, 9) ]);
  boardByRegions.push([ ...board[3].slice(0, 3), ...board[4].slice(0, 3), ...board[5].slice(0, 3) ]);
  boardByRegions.push([ ...board[3].slice(3, 6), ...board[4].slice(3, 6), ...board[5].slice(3, 6) ]);
  boardByRegions.push([ ...board[3].slice(6, 9), ...board[4].slice(6, 9), ...board[5].slice(6, 9) ]);
  boardByRegions.push([ ...board[6].slice(0, 3), ...board[7].slice(0, 3), ...board[8].slice(0, 3) ]);
  boardByRegions.push([ ...board[6].slice(3, 6), ...board[7].slice(3, 6), ...board[8].slice(3, 6) ]);
  boardByRegions.push([ ...board[6].slice(6, 9), ...board[7].slice(6, 9), ...board[8].slice(6, 9) ]);

  console.log('board by regions: ', boardByRegions);
  return boardByRegions;
};

export type DifficultyType = 'default' | 'easy' | 'medium' | 'difficult';
export type boardType = rowType[];
// export type boardType = [ rowType, rowType, rowType, rowType, rowType, rowType, rowType, rowType, rowType ];
export type rowType = [num, num, num, num, num, num, num, num, num];
export type num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;