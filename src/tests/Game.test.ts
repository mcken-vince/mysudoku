import { generateBoard, randomIndex, shuffleRow } from '../logic/Game';

describe('generateBoard()', () => {
  it("generates a new board when calling generateBoard('easy', 'classic')", async () => {
    const result = await generateBoard('easy', 'classic');
    // Should return new puzzle and solution for puzzle
    expect(result.length).toBe(2);
    // Puzzle should have 9 row arrays
    const newBoard = result[0];
    expect(newBoard.length).toBe(9);
    // Rows in puzzle should have 9 elements
    expect(newBoard[0].length).toBe(9)
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