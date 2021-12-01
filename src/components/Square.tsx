import { squareType } from '../logic/Game';
import '../styles/Square.scss';

const Square = (props: SquareProps) => {
  const { square } = props;

  const squareClass = square.conflict ? 'square conflict' : 'square';
  return (
    <div className={squareClass}>
      {square.num}
    </div>
  );
};

export default Square;

export interface SquareProps {
  square: squareType;
}