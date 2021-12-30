import { GridType } from '../logic/Game';
import { checkGrid, checkNumberGrid } from '../logic/Main';

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

  });
});