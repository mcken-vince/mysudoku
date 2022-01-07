import Button from 'react-bootstrap/Button';
import '../styles/SelectSudokuMode.scss';
import { ModeType } from '../logic/Main';
import { useState } from 'react';

const SelectSudokuMode = (props: SelectSudokuModeProps) => {
  const [selectedMode, setSelectedMode] = useState<ModeType | null>(null);
  const onConfirm = props.onConfirm;

  const classicDescription = {
    title: 'Classic Sudoku',
    description: "Regular 9x9 sudoku. Each row, each column, and each 9x9 area must have the numbers 1-9, no duplicates allowed."
  };
  const diagonalDescription = {
    title: 'Diagonal Sudoku',
    description: "Just like classic sudoku, except now both diagonals have the numbers 1-9 also, no duplicates."
  };
  const oddDescription = {
    title: 'Odd Sudoku',
    description: "Just like classic sudoku, but the highlighted squares must be odd numbers."
  };
  const evenDescription = {
    title: 'Even Sudoku',
    description: "Just like classic sudoku, but the highlighted squares must be even numbers."
  };
  const sumDescription = {
    title: 'Sum Sudoku',
    description: ""
  };
  const multiDescription = {
    title: 'Multi Sudoku',
    description: ""
  };

  let displayDescription;
  if (selectedMode === 'multi') displayDescription = multiDescription;
  else if (selectedMode === 'diagonal') displayDescription = diagonalDescription;
  else if (selectedMode === 'odd') displayDescription = oddDescription;
  else if (selectedMode === 'even') displayDescription = evenDescription;
  else if (selectedMode === 'sum') displayDescription = sumDescription;
  else displayDescription = classicDescription;

  return (
    <div className='select-mode-container'>
      <h2>Select mode:</h2>   
      
      <div className='buttons-container'>

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


        <Button 
          variant={selectedMode === 'odd' ? 'secondary' : 'primary'} 
          className='odd-button' 
          onClick={() => setSelectedMode('odd')}

        >
          Odd
        </Button>
        
        <Button 
          variant={selectedMode === 'even' ? 'secondary' : 'primary'}
          className='even-button' 
          onClick={() => setSelectedMode('even')}
        >
          Even
        </Button>
        
        <Button variant={selectedMode === 'sum' ? 'secondary' : 'primary'}disabled className='sum-button' onClick={() => setSelectedMode('sum')}>Sum</Button>
        <Button variant={selectedMode === 'multi' ? 'secondary' : 'primary'} disabled className='multi-button' onClick={() => setSelectedMode('multi')}>Multi</Button>
      </div>

      { selectedMode && displayDescription && 
        <>
          <div className='description'>
            <div className='description-header'>
              <h3 className='description-title'>{displayDescription && displayDescription.title}</h3>
              <Button className='confirm-button' variant='success' onClick={() => onConfirm(selectedMode)}>Continue</Button>
            </div>
            <p className='description-body'>{displayDescription && displayDescription.description}</p>
          </div>
          
        </>
      }
    </div>
  );
};

export default SelectSudokuMode;

export interface SelectSudokuModeProps {
  onConfirm: Function;
};