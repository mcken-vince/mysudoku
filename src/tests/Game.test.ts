import { generateBoard, GridType, makeCopyOfGrid, randomIndex, rowsToRegions, secondsToTimeString, shuffleRow } from '../logic/Game';

const grid: GridType = [
  [ {row: 0, col: 0, value: 1, square: 0, solution: 1},{row: 0, col: 1, value: 2, square: 0, solution: 1},{row: 0, col: 2, value: 3, square: 0, solution: 1},
    {row: 0, col: 3, value: 4, square: 1, solution: 1},{row: 0, col: 4, value: 5, square: 1, solution: 1},{row: 0, col: 5, value: 6, square: 1, solution: 1},
    {row: 0, col: 6, value: 7, square: 2, solution: 1},{row: 0, col: 7, value: 8, square: 2, solution: 1},{row: 0, col: 8, value: 9, square: 2, solution: 1}
  ],
  [
    {row: 1, col: 0, value: 1, square: 0, solution: 1},{row: 1, col: 1, value: 2, square: 0, solution: 1},{row: 1, col: 2, value: 3, square: 0, solution: 1},
    {row: 1, col: 3, value: 4, square: 1, solution: 1},{row: 1, col: 4, value: 5, square: 1, solution: 1},{row: 1, col: 5, value: 6, square: 1, solution: 1},
    {row: 1, col: 6, value: 7, square: 2, solution: 1},{row: 1, col: 7, value: 8, square: 2, solution: 1},{row: 1, col: 8, value: 9, square: 2, solution: 1}
  ],
  [
    {row: 2, col: 0, value: 1, square: 0, solution: 1},{row: 2, col: 1, value: 2, square: 0, solution: 1},{row: 2, col: 2, value: 3, square: 0, solution: 1},
    {row: 2, col: 3, value: 4, square: 1, solution: 1},{row: 2, col: 4, value: 5, square: 1, solution: 1},{row: 2, col: 5, value: 6, square: 1, solution: 1},
    {row: 2, col: 6, value: 7, square: 2, solution: 1},{row: 2, col: 7, value: 8, square: 2, solution: 1},{row: 2, col: 8, value: 9, square: 2, solution: 1}
  ],
  [
    {row: 3, col: 0, value: 1, square: 3, solution: 1},{row: 3, col: 1, value: 2, square: 3, solution: 1},{row: 3, col: 2, value: 3, square: 3, solution: 1},
    {row: 3, col: 3, value: 4, square: 4, solution: 1},{row: 3, col: 4, value: 5, square: 4, solution: 1},{row: 3, col: 5, value: 6, square: 4, solution: 1},
    {row: 3, col: 6, value: 7, square: 5, solution: 1},{row: 3, col: 7, value: 8, square: 5, solution: 1},{row: 3, col: 8, value: 9, square: 5, solution: 1}
  ],
  [
    {row: 4, col: 0, value: 1, square: 3, solution: 1},{row: 4, col: 1, value: 2, square: 3, solution: 1},{row: 4, col: 2, value: 3, square: 3, solution: 1},
    {row: 4, col: 3, value: 4, square: 4, solution: 1},{row: 4, col: 4, value: 5, square: 4, solution: 1},{row: 4, col: 5, value: 6, square: 4, solution: 1},
    {row: 4, col: 6, value: 7, square: 5, solution: 1},{row: 4, col: 7, value: 8, square: 5, solution: 1},{row: 4, col: 8, value: 9, square: 5, solution: 1}
  ],
  [
    {row: 5, col: 0, value: 1, square: 3, solution: 1},{row: 5, col: 1, value: 2, square: 3, solution: 1},{row: 5, col: 2, value: 3, square: 3, solution: 1},
    {row: 5, col: 3, value: 4, square: 4, solution: 1},{row: 5, col: 4, value: 5, square: 4, solution: 1},{row: 5, col: 5, value: 6, square: 4, solution: 1},
    {row: 5, col: 6, value: 7, square: 5, solution: 1},{row: 5, col: 7, value: 8, square: 5, solution: 1},{row: 5, col: 8, value: 9, square: 5, solution: 1}
  ],
  [
    {row: 6, col: 0, value: 1, square: 6, solution: 1},{row: 6, col: 1, value: 2, square: 6, solution: 1},{row: 6, col: 2, value: 3, square: 6, solution: 1},
    {row: 6, col: 3, value: 4, square: 7, solution: 1},{row: 6, col: 4, value: 5, square: 7, solution: 1},{row: 6, col: 5, value: 6, square: 7, solution: 1},
    {row: 6, col: 6, value: 7, square: 8, solution: 1},{row: 6, col: 7, value: 8, square: 8, solution: 1},{row: 6, col: 8, value: 9, square: 8, solution: 1}
  ],
  [
    {row: 7, col: 0, value: 1, square: 6, solution: 1},{row: 7, col: 1, value: 2, square: 6, solution: 1},{row: 7, col: 2, value: 3, square: 6, solution: 1},
    {row: 7, col: 3, value: 4, square: 7, solution: 1},{row: 7, col: 4, value: 5, square: 7, solution: 1},{row: 7, col: 5, value: 6, square: 7, solution: 1},
    {row: 7, col: 6, value: 7, square: 8, solution: 1},{row: 7, col: 7, value: 8, square: 8, solution: 1},{row: 7, col: 8, value: 9, square: 8, solution: 1}
  ],
  [
    {row: 8, col: 0, value: 1, square: 6, solution: 1},{row: 8, col: 1, value: 2, square: 6, solution: 1},{row: 8, col: 2, value: 3, square: 6, solution: 1},
    {row: 8, col: 3, value: 4, square: 7, solution: 1},{row: 8, col: 4, value: 5, square: 7, solution: 1},{row: 8, col: 5, value: 6, square: 7, solution: 1},
    {row: 8, col: 6, value: 7, square: 8, solution: 1},{row: 8, col: 7, value: 8, square: 8, solution: 1},{row: 8, col: 8, value: 9, square: 8, solution: 1}
  ]
];

describe('generateBoard()', () => {
  it("generates a new board when calling generateBoard('easy', 'classic')", async () => {
    const result = await generateBoard('easy', 'classic');
    // Puzzle should have 9 row arrays
    const newBoard = result;
    expect(newBoard.length).toBe(9);
    // Rows in puzzle should have 9 elements
    expect(newBoard.length).toBe(9)
  });


});

describe('shuffleRow()', () => {
  it('returns a row array in a different order than the one inputted', () => {
    const row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffleRow(row);
    // Counts how many elements in the array are in a different position
    let differences = 0;
    let count = 1;
    row.forEach(number => {
      if (number !== count) {
        differences++;
      }
      count++;
    });

    expect(differences).toBeGreaterThan(0);
  });
});

describe('randomIndex()', () => {
  it('should return a random number between 0 and the number argument given, non-inclusive', () => {
    const num1 = randomIndex(9);
    const num2 = randomIndex(9);
    const num3 = randomIndex(9);
    const num4 = randomIndex(9);
    const num5 = randomIndex(9);

    expect(num1).toBeLessThanOrEqual(8);
    expect(num1).toBeGreaterThanOrEqual(0);
    expect(num2).toBeLessThanOrEqual(8);
    expect(num2).toBeGreaterThanOrEqual(0);
    expect(num3).toBeLessThanOrEqual(8);
    expect(num3).toBeGreaterThanOrEqual(0);
    expect(num4).toBeLessThanOrEqual(8);
    expect(num4).toBeGreaterThanOrEqual(0);
    expect(num5).toBeLessThanOrEqual(8);
    expect(num5).toBeGreaterThanOrEqual(0);
  });
});

describe('rowsToRegions()', () => {
  it('should flip a given grid from arrays of rows to arrays of regions', () => {
    const flippedGrid = rowsToRegions(grid);

    expect(flippedGrid[0][0].square).toBe(0);
    expect(flippedGrid[1][0].square).toBe(1);
    expect(flippedGrid[2][0].square).toBe(2);
    
  });
});

describe('makeCopyOfGrid()', () => {
  const copyOfGrid = makeCopyOfGrid(grid);
  expect(grid).toStrictEqual(copyOfGrid);
});

describe('secondsToTimeString()', () => {
  it('should convert a number of seconds to a string displaying hrs, minutes, seconds', () => {
    const timeString = secondsToTimeString(3660);
    expect(typeof timeString).toBe('string');
    expect(timeString).toBe('01:01:00');
  });
});