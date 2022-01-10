import { squareType } from '../logic/Game';
import { ModeType } from '../logic/Main';
import '../styles/Region.scss';
import Square from "./Square";

const Region = (props: RegionProps) => {
  const { region, selectSquare, selectedSquare, mode } = props;

  const squares = region.map((square, idx) => (
    <Square 
      selectedSquare={selectedSquare}
      selectSquare={selectSquare} 
      square={square} 
      key={idx}
      mode={mode}
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
  region: squareType[];
  selectSquare: Function;
  selectedSquare: null | squareType;
  mode: ModeType;
};