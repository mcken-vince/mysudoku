import '../styles/NumberSelection.scss';

const NumberSelection = (props: NumberSelectionProps) => {
  const handleClick = props.handleClick;

  return (
    <div className='number-selection'>
      <div className='clickable number-selection-number' onClick={() => handleClick(1)}>1</div>
      <div className='clickable number-selection-number' onClick={() => handleClick(2)}>2</div>
      <div className='clickable number-selection-number' onClick={() => handleClick(3)}>3</div>
      <div className='clickable number-selection-number' onClick={() => handleClick(4)}>4</div>
      <div className='clickable number-selection-number' onClick={() => handleClick(5)}>5</div>
      <div className='clickable number-selection-number' onClick={() => handleClick(6)}>6</div>
      <div className='clickable number-selection-number' onClick={() => handleClick(7)}>7</div>
      <div className='clickable number-selection-number' onClick={() => handleClick(8)}>8</div>
      <div className='clickable number-selection-number' onClick={() => handleClick(9)}>9</div>
      <div className='clickable number-selection-clear' onClick={() => handleClick(null)}>Clear</div>
    </div>
  );
};

export default NumberSelection;

export interface NumberSelectionProps {
  handleClick: Function;
};