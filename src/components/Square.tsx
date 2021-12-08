import { MouseEvent } from 'react';
import '../styles/Square.scss';
import classNames from 'classnames';
import { squareType } from '../logic/Game';

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
  const sameRowColSquare: boolean = (selectedSquare && !isSelectedSquare) ? (selectedSquare.row === square.row || selectedSquare.col === square.col || selectedSquare.square === square.square) : false;
  const squareClasses: string = classNames('square', 'noselect', { changeable: square.changeable, zero: (square.value === 0), selected: isSelectedSquare, highlight: isSameValueAsSelectedSquare, sameRowColSquare });
  
  return (
    <div onClick={handleSquareClick} className={squareClasses}>         
      <span className='square-value'>{square.value}</span>
    </div>
  );
};

export default Square;

export interface SquareProps {
  square: squareType;
  selectedSquare: null | squareType;
  selectSquare: Function;
};