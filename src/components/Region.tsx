import { squareType } from '../logic/Game';
import '../styles/Region.scss';
import Square from "./Square";

const Region = (props: RegionProps) => {
  const { region, selectSquare, selectedSquare } = props;

  const squares = region.map((square, idx) => (
    <Square 
      selectedSquare={selectedSquare}
      selectSquare={selectSquare} 
      square={square} 
      key={idx}
    />
  ));
  return (
  <div className='region'>
    {squares}
  </div>
  );
};

export default Region;

export interface RegionProps {
  region: any[];
  selectSquare: Function;
  selectedSquare: null | squareType;
};