import { GridType } from '../logic/Game';
import { checkGrid, checkNumberGrid, diagonalCheck, NumberGridType } from '../logic/Main';

const gridNoZeros: GridType = [
  [ {row: 0, col: 0, value: 1, square: 0},{row: 0, col: 1, value: 2, square: 0},{row: 0, col: 2, value: 3, square: 0},
    {row: 0, col: 3, value: 4, square: 1},{row: 0, col: 4, value: 5, square: 1},{row: 0, col: 5, value: 6, square: 1},
    {row: 0, col: 6, value: 7, square: 2},{row: 0, col: 7, value: 8, square: 2},{row: 0, col: 8, value: 9, square: 2}
  ],
  [
    {row: 1, col: 0, value: 1, square: 0},{row: 1, col: 1, value: 2, square: 0},{row: 1, col: 2, value: 3, square: 0},
    {row: 1, col: 3, value: 4, square: 1},{row: 1, col: 4, value: 5, square: 1},{row: 1, col: 5, value: 6, square: 1},
    {row: 1, col: 6, value: 7, square: 2},{row: 1, col: 7, value: 8, square: 2},{row: 1, col: 8, value: 9, square: 2}
  ],
  [
    {row: 2, col: 0, value: 1, square: 0},{row: 2, col: 1, value: 2, square: 0},{row: 2, col: 2, value: 3, square: 0},
    {row: 2, col: 3, value: 4, square: 1},{row: 2, col: 4, value: 5, square: 1},{row: 2, col: 5, value: 6, square: 1},
    {row: 2, col: 6, value: 7, square: 2},{row: 2, col: 7, value: 8, square: 2},{row: 2, col: 8, value: 9, square: 2}
  ],
  [
    {row: 3, col: 0, value: 1, square: 3},{row: 3, col: 1, value: 2, square: 3},{row: 3, col: 2, value: 3, square: 3},
    {row: 3, col: 3, value: 4, square: 4},{row: 3, col: 4, value: 5, square: 4},{row: 3, col: 5, value: 6, square: 4},
    {row: 3, col: 6, value: 7, square: 5},{row: 3, col: 7, value: 8, square: 5},{row: 3, col: 8, value: 9, square: 5}
  ],
  [
    {row: 4, col: 0, value: 1, square: 3},{row: 4, col: 1, value: 2, square: 3},{row: 4, col: 2, value: 3, square: 3},
    {row: 4, col: 3, value: 4, square: 4},{row: 4, col: 4, value: 5, square: 4},{row: 4, col: 5, value: 6, square: 4},
    {row: 4, col: 6, value: 7, square: 5},{row: 4, col: 7, value: 8, square: 5},{row: 4, col: 8, value: 9, square: 5}
  ],
  [
    {row: 5, col: 0, value: 1, square: 3},{row: 5, col: 1, value: 2, square: 3},{row: 5, col: 2, value: 3, square: 3},
    {row: 5, col: 3, value: 4, square: 4},{row: 5, col: 4, value: 5, square: 4},{row: 5, col: 5, value: 6, square: 4},
    {row: 5, col: 6, value: 7, square: 5},{row: 5, col: 7, value: 8, square: 5},{row: 5, col: 8, value: 9, square: 5}
  ],
  [
    {row: 6, col: 0, value: 1, square: 6},{row: 6, col: 1, value: 2, square: 6},{row: 6, col: 2, value: 3, square: 6},
    {row: 6, col: 3, value: 4, square: 7},{row: 6, col: 4, value: 5, square: 7},{row: 6, col: 5, value: 6, square: 7},
    {row: 6, col: 6, value: 7, square: 8},{row: 6, col: 7, value: 8, square: 8},{row: 6, col: 8, value: 9, square: 8}
  ],
  [
    {row: 7, col: 0, value: 1, square: 6},{row: 7, col: 1, value: 2, square: 6},{row: 7, col: 2, value: 3, square: 6},
    {row: 7, col: 3, value: 4, square: 7},{row: 7, col: 4, value: 5, square: 7},{row: 7, col: 5, value: 6, square: 7},
    {row: 7, col: 6, value: 7, square: 8},{row: 7, col: 7, value: 8, square: 8},{row: 7, col: 8, value: 9, square: 8}
  ],
  [
    {row: 8, col: 0, value: 1, square: 6},{row: 8, col: 1, value: 2, square: 6},{row: 8, col: 2, value: 3, square: 6},
    {row: 8, col: 3, value: 4, square: 7},{row: 8, col: 4, value: 5, square: 7},{row: 8, col: 5, value: 6, square: 7},
    {row: 8, col: 6, value: 7, square: 8},{row: 8, col: 7, value: 8, square: 8},{row: 8, col: 8, value: 9, square: 8}
  ]
];
const gridWithZeros: GridType = [
  [ {row: 0, col: 0, value: 0, square: 0},{row: 0, col: 1, value: 2, square: 0},{row: 0, col: 2, value: 3, square: 0},
    {row: 0, col: 3, value: 4, square: 1},{row: 0, col: 4, value: 5, square: 1},{row: 0, col: 5, value: 6, square: 1},
    {row: 0, col: 6, value: 7, square: 2},{row: 0, col: 7, value: 8, square: 2},{row: 0, col: 8, value: 9, square: 2}
  ],
  [
    {row: 1, col: 0, value: 1, square: 0},{row: 1, col: 1, value: 2, square: 0},{row: 1, col: 2, value: 3, square: 0},
    {row: 1, col: 3, value: 4, square: 1},{row: 1, col: 4, value: 5, square: 1},{row: 1, col: 5, value: 6, square: 1},
    {row: 1, col: 6, value: 7, square: 2},{row: 1, col: 7, value: 8, square: 2},{row: 1, col: 8, value: 9, square: 2}
  ],
  [
    {row: 2, col: 0, value: 1, square: 0},{row: 2, col: 1, value: 2, square: 0},{row: 2, col: 2, value: 3, square: 0},
    {row: 2, col: 3, value: 4, square: 1},{row: 2, col: 4, value: 5, square: 1},{row: 2, col: 5, value: 6, square: 1},
    {row: 2, col: 6, value: 7, square: 2},{row: 2, col: 7, value: 8, square: 2},{row: 2, col: 8, value: 9, square: 2}
  ],
  [
    {row: 3, col: 0, value: 1, square: 3},{row: 3, col: 1, value: 2, square: 3},{row: 3, col: 2, value: 3, square: 3},
    {row: 3, col: 3, value: 4, square: 4},{row: 3, col: 4, value: 5, square: 4},{row: 3, col: 5, value: 6, square: 4},
    {row: 3, col: 6, value: 7, square: 5},{row: 3, col: 7, value: 8, square: 5},{row: 3, col: 8, value: 9, square: 5}
  ],
  [
    {row: 4, col: 0, value: 1, square: 3},{row: 4, col: 1, value: 2, square: 3},{row: 4, col: 2, value: 3, square: 3},
    {row: 4, col: 3, value: 4, square: 4},{row: 4, col: 4, value: 5, square: 4},{row: 4, col: 5, value: 6, square: 4},
    {row: 4, col: 6, value: 7, square: 5},{row: 4, col: 7, value: 8, square: 5},{row: 4, col: 8, value: 9, square: 5}
  ],
  [
    {row: 5, col: 0, value: 1, square: 3},{row: 5, col: 1, value: 2, square: 3},{row: 5, col: 2, value: 3, square: 3},
    {row: 5, col: 3, value: 4, square: 4},{row: 5, col: 4, value: 5, square: 4},{row: 5, col: 5, value: 6, square: 4},
    {row: 5, col: 6, value: 7, square: 5},{row: 5, col: 7, value: 8, square: 5},{row: 5, col: 8, value: 9, square: 5}
  ],
  [
    {row: 6, col: 0, value: 1, square: 6},{row: 6, col: 1, value: 2, square: 6},{row: 6, col: 2, value: 3, square: 6},
    {row: 6, col: 3, value: 4, square: 7},{row: 6, col: 4, value: 5, square: 7},{row: 6, col: 5, value: 6, square: 7},
    {row: 6, col: 6, value: 7, square: 8},{row: 6, col: 7, value: 8, square: 8},{row: 6, col: 8, value: 9, square: 8}
  ],
  [
    {row: 7, col: 0, value: 1, square: 6},{row: 7, col: 1, value: 2, square: 6},{row: 7, col: 2, value: 3, square: 6},
    {row: 7, col: 3, value: 4, square: 7},{row: 7, col: 4, value: 5, square: 7},{row: 7, col: 5, value: 6, square: 7},
    {row: 7, col: 6, value: 7, square: 8},{row: 7, col: 7, value: 8, square: 8},{row: 7, col: 8, value: 9, square: 8}
  ],
  [
    {row: 8, col: 0, value: 1, square: 6},{row: 8, col: 1, value: 2, square: 6},{row: 8, col: 2, value: 3, square: 6},
    {row: 8, col: 3, value: 4, square: 7},{row: 8, col: 4, value: 5, square: 7},{row: 8, col: 5, value: 6, square: 7},
    {row: 8, col: 6, value: 7, square: 8},{row: 8, col: 7, value: 8, square: 8},{row: 8, col: 8, value: 9, square: 8}
  ]
];

const gridNoConflicts: GridType = [
  [ {row: 0, col: 0, value: 4, square: 0},{row: 0, col: 1, value: 5, square: 0},{row: 0, col: 2, value: 2, square: 0},
    {row: 0, col: 3, value: 3, square: 1},{row: 0, col: 4, value: 8, square: 1},{row: 0, col: 5, value: 1, square: 1},
    {row: 0, col: 6, value: 6, square: 2},{row: 0, col: 7, value: 9, square: 2},{row: 0, col: 8, value: 7, square: 2}
  ],
  [
    {row: 1, col: 0, value: 3, square: 0},{row: 1, col: 1, value: 6, square: 0},{row: 1, col: 2, value: 9, square: 0},
    {row: 1, col: 3, value: 5, square: 1},{row: 1, col: 4, value: 4, square: 1},{row: 1, col: 5, value: 7, square: 1},
    {row: 1, col: 6, value: 8, square: 2},{row: 1, col: 7, value: 2, square: 2},{row: 1, col: 8, value: 1, square: 2}
  ],
  [
    {row: 2, col: 0, value: 7, square: 0},{row: 2, col: 1, value: 1, square: 0},{row: 2, col: 2, value: 8, square: 0},
    {row: 2, col: 3, value: 2, square: 1},{row: 2, col: 4, value: 9, square: 1},{row: 2, col: 5, value: 6, square: 1},
    {row: 2, col: 6, value: 5, square: 2},{row: 2, col: 7, value: 4, square: 2},{row: 2, col: 8, value: 3, square: 2}
  ],
  [
    {row: 3, col: 0, value: 2, square: 3},{row: 3, col: 1, value: 8, square: 3},{row: 3, col: 2, value: 4, square: 3},
    {row: 3, col: 3, value: 7, square: 4},{row: 3, col: 4, value: 6, square: 4},{row: 3, col: 5, value: 3, square: 4},
    {row: 3, col: 6, value: 9, square: 5},{row: 3, col: 7, value: 1, square: 5},{row: 3, col: 8, value: 5, square: 5}
  ],
  [
    {row: 4, col: 0, value: 5, square: 3},{row: 4, col: 1, value: 9, square: 3},{row: 4, col: 2, value: 3, square: 3},
    {row: 4, col: 3, value: 4, square: 4},{row: 4, col: 4, value: 1, square: 4},{row: 4, col: 5, value: 8, square: 4},
    {row: 4, col: 6, value: 7, square: 5},{row: 4, col: 7, value: 6, square: 5},{row: 4, col: 8, value: 2, square: 5}
  ],
  [
    {row: 5, col: 0, value: 6, square: 3},{row: 5, col: 1, value: 7, square: 3},{row: 5, col: 2, value: 1, square: 3},
    {row: 5, col: 3, value: 9, square: 4},{row: 5, col: 4, value: 5, square: 4},{row: 5, col: 5, value: 2, square: 4},
    {row: 5, col: 6, value: 4, square: 5},{row: 5, col: 7, value: 3, square: 5},{row: 5, col: 8, value: 8, square: 5}
  ],
  [
    {row: 6, col: 0, value: 9, square: 6},{row: 6, col: 1, value: 2, square: 6},{row: 6, col: 2, value: 6, square: 6},
    {row: 6, col: 3, value: 1, square: 7},{row: 6, col: 4, value: 7, square: 7},{row: 6, col: 5, value: 5, square: 7},
    {row: 6, col: 6, value: 3, square: 8},{row: 6, col: 7, value: 8, square: 8},{row: 6, col: 8, value: 4, square: 8}
  ],
  [
    {row: 7, col: 0, value: 1, square: 6},{row: 7, col: 1, value: 4, square: 6},{row: 7, col: 2, value: 7, square: 6},
    {row: 7, col: 3, value: 8, square: 7},{row: 7, col: 4, value: 3, square: 7},{row: 7, col: 5, value: 9, square: 7},
    {row: 7, col: 6, value: 2, square: 8},{row: 7, col: 7, value: 5, square: 8},{row: 7, col: 8, value: 6, square: 8}
  ],
  [
    {row: 8, col: 0, value: 8, square: 6},{row: 8, col: 1, value: 3, square: 6},{row: 8, col: 2, value: 5, square: 6},
    {row: 8, col: 3, value: 6, square: 7},{row: 8, col: 4, value: 2, square: 7},{row: 8, col: 5, value: 4, square: 7},
    {row: 8, col: 6, value: 1, square: 8},{row: 8, col: 7, value: 7, square: 8},{row: 8, col: 8, value: 9, square: 8}
  ]
];

const numberGridNoConflicts: NumberGridType = 
  [
    [4,5,2,3,8,1,6,9,7],
    [3,6,9,5,4,7,8,2,1],
    [7,1,8,2,9,6,5,4,3],
    [2,8,4,7,6,3,9,1,5],
    [5,9,3,4,1,8,7,6,2],
    [6,7,1,9,5,2,4,3,8],
    [9,2,6,1,7,5,3,8,4],
    [1,4,7,8,3,9,2,5,6],
    [8,3,5,6,2,4,1,7,9]
  ];

describe('checkNumberGrid()', () => {
  it("returns false if grid contains any 0's", () => {
    const incompleteGrid = [[1,2,3,4,5,6,7,0 ],[0,0,0,0,0,0,0,0,0],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[0,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[0,0,0,0,3,4,5,6],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8]];
    const result = checkNumberGrid(incompleteGrid);
    expect(result).toBe(false);
  });

  it("returns true if grid contains no 0's", () => {
    const completeGrid = [[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8]];
    const result = checkNumberGrid(completeGrid);
    expect(result).toBe(true);
  });
});

describe('checkGrid()', () => {
  it("returns false if grid contains any 0's", () => {
    const result = checkGrid(gridWithZeros);
    expect(result).toBe(false);
  });

  it("returns true if grid contains no 0's", () => {
    const result = checkGrid(gridNoZeros);
    expect(result).toBe(true);
  });
});

describe('diagonalCheck()', () => {
  it('returns true if square is not in either diagonal', () => {
    const result = diagonalCheck(numberGridNoConflicts, 1, 5, 8);
    expect(result).toBe(true);
  });
});