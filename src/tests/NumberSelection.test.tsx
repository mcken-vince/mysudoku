import {render, screen} from '@testing-library/react';
import NumberSelection, {NumberSelectionProps} from '../components/NumberSelection';

const renderNumberSelection = (props: Partial<NumberSelectionProps> = {}) => {
  const defaultProps = {
    handleClick: jest.fn(),
    disabled: false
  };

  return render(
    <NumberSelection {...defaultProps} {...props} />
  );
};

describe('<NumberSelection />', () => {
  it('renders without crashing', () => {
    renderNumberSelection();
  });

  it('disables all buttons if disabled prop is true', () => {
    renderNumberSelection({disabled: true});
    expect(screen.getByTestId('num-select-button-1')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-2')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-3')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-4')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-5')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-6')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-7')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-8')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-9')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-clear')).toHaveClass('disabled');
  });
});