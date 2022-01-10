import { render, screen } from '@testing-library/react';
import Region, { RegionProps } from '../components/Region';

const selectSquare = jest.fn();

const renderRegion = (props: Partial<RegionProps> = {}) => {
  const defaultProps = {
    region: [
      {row: 0, col: 0, value: 1, square: 0, solution: 1},
      {row: 0, col: 1, value: 2, square: 0, solution: 2},
      {row: 0, col: 2, value: 3, square: 0, solution: 3},
      {row: 1, col: 0, value: 4, square: 0, solution: 4},
      {row: 1, col: 1, value: 5, square: 0, solution: 5},
      {row: 1, col: 2, value: 6, square: 0, solution: 6},
      {row: 2, col: 0, value: 7, square: 0, solution: 7},
      {row: 2, col: 1, value: 8, square: 0, solution: 8},
      {row: 2, col: 2, value: 9, square: 0, solution: 9}
    ],
    selectSquare,
    selectedSquare: null,
    mode: 'classic'
  };

  return render(
    <Region {...defaultProps} {...props} />
  );
};

describe('<Region />', () => {
  it('renders without crashing and calls selectSquare() when a square is clicked', () => {
    renderRegion();
    const square = screen.getByText(1);
    square.click();
    expect(selectSquare).toHaveBeenCalled();
  });
});