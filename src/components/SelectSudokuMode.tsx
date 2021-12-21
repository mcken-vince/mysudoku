import Button from 'react-bootstrap/Button';
import '../styles/SelectSudokuMode.scss';

const SelectSudokuMode = (props: SelectSudokuModeProps) => {
  const onSelect = props.onSelect;
  return (
    <div className='select-mode-container'>
      <h2>Select mode:</h2>
      <Button className='classic-button' onClick={() => onSelect('classic')}>Classic</Button>
      <Button className='diagonal-button' onClick={() => onSelect('diagonal')}>Diagonal</Button>
      <Button className='odd-button' onClick={() => onSelect('odd')}>Odd</Button>
      <Button disabled className='even-button' onClick={() => onSelect('even')}>Even</Button>
      <Button disabled className='sum-button' onClick={() => onSelect('sum')}>Sum</Button>
    </div>
  );
};

export default SelectSudokuMode;

export interface SelectSudokuModeProps {
  onSelect: Function;
};