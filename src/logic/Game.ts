const availableNumbers: num[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];



const generateBoard = (difficulty: DifficultyType = 'default'): num[]  => {
  const numbers: num[] = [...availableNumbers];

  const row: rowType = [9,8,7,6,5,4,3,2,1]

  return numbers;

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

export { generateBoard };

type DifficultyType = 'default' | 'easy' | 'medium' | 'difficult';
type boardType = [ rowType, rowType, rowType, rowType, rowType, rowType, rowType, rowType, rowType ];
type rowType = [num, num, num, num, num, num, num, num, num];
type num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;