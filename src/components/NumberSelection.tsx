import classNames from 'classnames';
import '../styles/NumberSelection.scss';

const NumberSelection = (props: NumberSelectionProps) => {
  const { handleClick, disabled } = props;
  const numberButtonClasses: string = classNames('clickable number-selection-number', { disabled });
  const clearButtonClasses: string = classNames('clickable number-selection-clear', { disabled });
  
  return (
    <div className='number-selection'>
      <div className={numberButtonClasses} onClick={() => handleClick(1)} data-testid='num-select-button-1'>1</div>
      <div className={numberButtonClasses} onClick={() => handleClick(2)} data-testid='num-select-button-2'>2</div>
      <div className={numberButtonClasses} onClick={() => handleClick(3)} data-testid='num-select-button-3'>3</div>
      <div className={numberButtonClasses} onClick={() => handleClick(4)} data-testid='num-select-button-4'>4</div>
      <div className={numberButtonClasses} onClick={() => handleClick(5)} data-testid='num-select-button-5'>5</div>
      <div className={numberButtonClasses} onClick={() => handleClick(6)} data-testid='num-select-button-6'>6</div>
      <div className={numberButtonClasses} onClick={() => handleClick(7)} data-testid='num-select-button-7'>7</div>
      <div className={numberButtonClasses} onClick={() => handleClick(8)} data-testid='num-select-button-8'>8</div>
      <div className={numberButtonClasses} onClick={() => handleClick(9)} data-testid='num-select-button-9'>9</div>
      <div className={clearButtonClasses} onClick={() => handleClick(null)} data-testid='num-select-button-clear'>Clear</div>
    </div>
  );
};

export default NumberSelection;

export interface NumberSelectionProps {
  handleClick: Function;
  disabled: boolean;
};