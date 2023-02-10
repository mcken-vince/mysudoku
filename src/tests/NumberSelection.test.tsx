import {fireEvent, render, screen} from '@testing-library/react';
import NumberSelection, {NumberSelectionProps} from '../components/NumberSelection';

const handleClick = jest.fn();

const renderNumberSelection = (props: Partial<NumberSelectionProps> = {}) => {
  const defaultProps = {
    handleClick,
    disabled: false
  };

  return render(
    <NumberSelection {...defaultProps} {...props} />
  );
};

describe('<NumberSelection />', () => {
  it('renders without crashing, calls handleClick each time a button is clicked', () => {
    renderNumberSelection();
    fireEvent.click(screen.getByTestId('num-select-button-1'));
    expect(handleClick).toHaveBeenCalledWith(1);
    fireEvent.click(screen.getByTestId('num-select-button-5'));
    fireEvent.click(screen.getByTestId('num-select-button-9'));
    fireEvent.click(screen.getByTestId('num-select-button-clear'));

    expect(handleClick).toHaveBeenCalledTimes(4);
  });

  it('disables all buttons if disabled prop is true', () => {
    const handleClick = jest.fn();

    renderNumberSelection({handleClick: handleClick, disabled: true});

    const num1 = screen.getByTestId('num-select-button-1'); 
    expect(num1).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-2')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-3')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-4')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-5')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-6')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-7')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-8')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-9')).toHaveClass('disabled');
    expect(screen.getByTestId('num-select-button-clear')).toHaveClass('disabled');
    fireEvent.click(num1);
    // Make sure that .disabled class prevents call to 'handleClick()'
    setTimeout(() => {
      expect(handleClick).not.toHaveBeenCalled()
    }, 0);
  });
});