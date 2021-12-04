import '../styles/Region.scss';
import Square from "./Square";

const Region = (props: RegionProps) => {
  const { region, onValueChange } = props;

  const squares = region.map((value, idx) => <Square  onValueChange={onValueChange} value={value} key={idx}/>);
  return (
  <div className='region'>
    {squares}
  </div>
  );
};

export default Region;

export interface RegionProps {
  region: any[];
  onValueChange: Function;
};