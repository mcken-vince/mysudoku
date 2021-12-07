import '../styles/SelectDifficulty.scss';
import Button from 'react-bootstrap/Button';

const SelectDifficulty = (props: SelectDifficultyProps) => {
  const onSelect = props.onSelect;

  return (
    <div className='select-difficulty-container'>
      <h2>Select difficulty:</h2>
      <Button className='easy-button' onClick={() => onSelect('easy')}>Easy</Button>
      <Button className='medium-button' onClick={() => onSelect('medium')}>Medium</Button>
      <Button className='difficult-button' onClick={() => onSelect('difficult')}>Difficult</Button>
      <Button className='random-button' onClick={() => onSelect('random')}>Surprise Me ;)</Button>
    </div>
  );
};

export default SelectDifficulty;

export interface SelectDifficultyProps {
  onSelect: Function;
};