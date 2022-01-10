import {render, screen} from '@testing-library/react';
import NumberSelection, {NumberSelectionProps} from '../components/NumberSelection';

const renderNumberSelection = (props: Partial<NumberSelectionProps> = {}) => {
  const defaultProps = {
    handleClick: jest.fn()
  };

  return render(
    <NumberSelection {...defaultProps} {...props} />
  );
};

describe('<NumberSelection />', () => {
  it('renders without crashing', () => {
    renderNumberSelection();
  });
});