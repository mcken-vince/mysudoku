import { num } from '../logic/Game';
import '../styles/Square.scss';

const Square = (props: SquareProps) => {
  const num = props.num;

  return (
    <div className='square'>
      {num}
    </div>
  );
};

export default Square;

export interface SquareProps {
  num: num;
}