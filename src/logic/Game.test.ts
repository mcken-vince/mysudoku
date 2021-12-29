import { generateBoard } from './Game';

describe('generateBoard', () => {
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