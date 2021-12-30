import classNames from 'classnames';
import { rowsToRegions, GridType, squareType } from '../logic/Game';
import { ModeType } from '../logic/Main';
import '../styles/SudokuBoard.scss';
import Region from './Region';


const SudokuBoard = (props: SudokuBoardProps) => {
  const { grid, selectSquare, selectedSquare, mode } = props;
  const regions = grid ? rowsToRegions(grid) : [[],[],[],[],[],[],[],[],[]];

  const regionComponents = regions.map((region, idx) => (
    <Region 
      region={region} 
      selectedSquare={selectedSquare} 
      selectSquare={selectSquare} 
      key={idx} 
      mode={mode}
    />
  )); 
  
  const boardClasses = classNames('sudoku-board-container', {classic: mode === 'classic', diagonal: mode === 'diagonal', odd: mode === 'odd'});
  return (
    <div className={boardClasses}>
     {regionComponents}
    </div>
  );
};

export default SudokuBoard;

export interface SudokuBoardProps {
  grid: GridType | null;
  selectSquare: Function;
  selectedSquare: null | squareType;
  mode: ModeType;
};
