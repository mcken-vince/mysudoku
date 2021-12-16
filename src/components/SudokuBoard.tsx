import { rowsToRegions, GridType, squareType } from '../logic/Game';
import '../styles/SudokuBoard.scss';
import Region from './Region';


const SudokuBoard = (props: SudokuBoardProps) => {
  const { grid, selectSquare, selectedSquare } = props;
  const regions = grid ? rowsToRegions(grid) : [[],[],[],[],[],[],[],[],[]];

  const regionComponents = regions.map((region, idx) => (
    <Region 
      region={region} 
      selectedSquare={selectedSquare} 
      selectSquare={selectSquare} 
      key={idx} 
    />
  )); 

  return (
    <div className='regular-board-container'>
     {regionComponents}
    </div>
  );
};

export default SudokuBoard;

export interface SudokuBoardProps {
  grid: GridType | null;
  selectSquare: Function;
  selectedSquare: null | squareType;
};
