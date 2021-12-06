import '../styles/Region.scss';
import Square from "./Square";

const Region = (props: RegionProps) => {
  const { region, selectSquare } = props;

  const squares = region.map((square, idx) => <Square selectSquare={selectSquare} square={square} key={idx}/>);
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
};