import { fireEvent, render, screen } from '@testing-library/react';
import SelectDifficulty, { SelectDifficultyProps } from '../components/SelectDifficulty';

const onSelect = jest.fn();

const renderSelectDifficulty = (props: Partial<SelectDifficultyProps> = {}) => {
  const defaultProps = {
    onSelect,
    disableButtons: false
  };

  return render(
    <SelectDifficulty {...defaultProps} {...props} />
  );
};

describe('<SelectDifficulty />', () => {
  it('renders without crashing and calls onSelect when a button is clicked', () => {
    renderSelectDifficulty();
    fireEvent.click(screen.getByTestId('select-diff-button-easy'));
    expect(onSelect).toHaveBeenCalled();
  });

  it('buttons are disabled when disableButtons prop is true, and onSelect is not called when buttons are clicked', () => {
    renderSelectDifficulty({ disableButtons: true });
    const easyButton = screen.getByTestId('select-diff-button-easy');
    expect(easyButton).toBeDisabled();
    easyButton.click();
    expect(onSelect).not.toHaveBeenCalled();
  });
});