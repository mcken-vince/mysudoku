import { checkNumberGrid } from '../logic/Main';

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