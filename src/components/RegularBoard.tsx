import { rowsToRegions, boardType } from '../logic/Game';
import '../styles/RegularBoard.scss';
import Region from './Region';


const RegularBoard = (props: RegularBoardProps) => {
  const board = props.board;

  const regions = board ? rowsToRegions(board) : [[],[],[],[],[],[],[],[],[]];
  const regionComponents = regions.map((region, idx) => <Region region={region} key={idx} />); 

  return (
    <div className='regular-board-container'>
     {regionComponents}
    </div>
  );
};

export default RegularBoard;

export interface RegularBoardProps {
  board: boardType | null;
}
