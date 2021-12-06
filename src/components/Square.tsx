import { MouseEvent } from 'react';
import '../styles/Square.scss';
import classNames from 'classnames';

const Square = (props: SquareProps) => {
  const { square, selectSquare, selectedSquare } = props;
  
  const handleSquareClick = (event: MouseEvent<HTMLDivElement>) => {
    if (square.changeable) {
      selectSquare({row: square.row, col: square.col});
    } else {
      selectSquare(null);
    }
  };

  const isSelectedSquare: boolean = selectedSquare ? ((selectedSquare.col === square.col) && (selectedSquare.row === square.row)) : false;
  const squareClasses: string = classNames('square', { changeable: square.changeable, zero: (square.value === 0), selected: isSelectedSquare });
  
  return (
    <div  onClick={handleSquareClick} className={squareClasses}>         
      <span className='square-value'>{square.value}</span>
    </div>
    
  );
};

export default Square;

export interface SquareProps {
  square: {col: number, row: number, value: number, changeable: boolean};
  selectedSquare: null | {row: number, col: number, value: number, changeable: boolean};
  selectSquare: Function;
};