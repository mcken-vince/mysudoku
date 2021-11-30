import '../styles/Region.scss';
import Square from "./Square";

const Region = (props: RegionProps) => {
  const region = props.region;

  const squares = region.map((num, idx) => <Square num={num} key={idx} />);
  return (
  <div className='region'>
    {squares}
  </div>
  );
};

export default Region;

export interface RegionProps {
  region: any[];
}