import { generateBoard } from './Game';

describe('generateBoard', () => {
  it('generates a new board when calling method generateBoard', () => {
    const result = generateBoard();
    expect(result.length).toBe(81);
  });

});