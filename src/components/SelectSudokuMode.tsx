import Button from 'react-bootstrap/Button';
import '../styles/SelectSudokuMode.scss';
import { ModeType } from '../logic/Main';
import { useState } from 'react';

const SelectSudokuMode = (props: SelectSudokuModeProps) => {
  const [selectedMode, setSelectedMode] = useState<ModeType | null>(null);
  const onConfirm = props.onConfirm;

  const classicMode = {
    title: 'Classic Sudoku',
    description: "Regular 9x9 sudoku. Each row, each column, and each 9x9 area must have the numbers 1-9, no duplicates allowed."
  };

  const diagonalMode = {
    title: 'Diagonal Sudoku',
    description: "Just like classic sudoku, except now both diagonals have the numbers 1-9 also, no duplicates."
  };

  return (
    <div className='select-mode-container'>
      <h2>Select mode:</h2>   
        <Button 
          variant={selectedMode === 'classic' ? 'secondary' : 'primary'} 
          className='classic-button' 
          onClick={() => setSelectedMode('classic')}
        >
          Classic
        </Button>

        <Button 
        variant={selectedMode === 'diagonal' ? 'secondary' : 'primary'}
        className='diagonal-button' 
        onClick={() => setSelectedMode('diagonal')}
        >
          Diagonal
        </Button>


      <Button variant={selectedMode === 'odd' ? 'secondary' : 'primary'}className='odd-button' onClick={() => setSelectedMode('odd')}>Odd</Button>
      <Button variant={selectedMode === 'even' ? 'secondary' : 'primary'}disabled className='even-button' onClick={() => setSelectedMode('even')}>Even</Button>
      <Button variant={selectedMode === 'sum' ? 'secondary' : 'primary'}disabled className='sum-button' onClick={() => setSelectedMode('sum')}>Sum</Button>
      <Button variant={selectedMode === 'multi' ? 'secondary' : 'primary'} disabled className='multi-button' onClick={() => setSelectedMode('multi')}>Multi</Button>
      <Button variant='success' onClick={() => onConfirm(selectedMode)}>Confirm</Button>
    </div>
  );
};

export default SelectSudokuMode;

export interface SelectSudokuModeProps {
  onConfirm: Function;
};