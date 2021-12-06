import { rowsToRegions, GridType } from '../logic/Game';
import '../styles/RegularBoard.scss';
import Region from './Region';


const RegularBoard = (props: RegularBoardProps) => {
  const { grid, selectSquare } = props;
  const regions = grid ? rowsToRegions(grid) : [[],[],[],[],[],[],[],[],[]];
  const regionComponents = regions.map((region, idx) => <Region region={region} selectSquare={selectSquare} key={idx} />); 

  return (
    <div className='regular-board-container'>
     {regionComponents}
    </div>
  );
};

export default RegularBoard;

export interface RegularBoardProps {
  grid: GridType | null;
  selectSquare: Function;
};
