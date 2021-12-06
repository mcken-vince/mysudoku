import { MouseEvent } from 'react';
import '../styles/Square.scss';
import classNames from 'classnames';

const Square = (props: SquareProps) => {
  const { square, selectSquare } = props;
  
  const handleSquareClick = (event: MouseEvent<HTMLDivElement>) => {
    if (square.changeable) {
      selectSquare({row: square.row, col: square.col});
    } else {
      selectSquare(null);
    }
  };

  const squareClasses: string = classNames('square', { changeable: square.changeable, zero: (square.value === 0) });

  return (
    <div  onClick={handleSquareClick} className={squareClasses}>         
      {square.value}
    </div>
    
  );
};

export default Square;

export interface SquareProps {
  square: {col: number, row: number, value: number, changeable: boolean};
  selectSquare: Function;
};