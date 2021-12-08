import { MouseEvent } from 'react';
import '../styles/Square.scss';
import classNames from 'classnames';

const Square = (props: SquareProps) => {
  const { square, selectSquare, selectedSquare } = props;
  
  const handleSquareClick = (event: MouseEvent<HTMLDivElement>) => {
    if (selectedSquare && (selectedSquare.row === square.row && selectedSquare.col === square.col)) {
      selectSquare(null);
    } else {
      selectSquare(square);
    }
  };

  const isSelectedSquare: boolean = selectedSquare ? ((selectedSquare.col === square.col) && (selectedSquare.row === square.row)) : false;
  const isSameValueAsSelectedSquare: boolean = (selectedSquare && square.value !== 0) ? (selectedSquare.value === square.value) : false;
  const sameRowOrCol: boolean = (selectedSquare && !isSelectedSquare) ? (selectedSquare.row === square.row || selectedSquare.col === square.col) : false;
  const squareClasses: string = classNames('square', 'noselect', { changeable: square.changeable, zero: (square.value === 0), selected: isSelectedSquare, highlight: isSameValueAsSelectedSquare, sameRowOrCol });
  
  return (
    <div onClick={handleSquareClick} className={squareClasses}>         
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