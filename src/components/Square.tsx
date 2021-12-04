import { MouseEvent, Ref } from 'react';
import '../styles/Square.scss';

const Square = (props: SquareProps) => {
  const { value, onValueChange } = props;
  
  const handleSquareClick = (event: MouseEvent<HTMLDivElement>) => {
    // event.currentTarget.classList.toggle('selected');
  };

  const squareClasses: string = (value === 0) ? 'square zero' : 'square';

  return (
    <div  onClick={handleSquareClick} className={squareClasses}>         
      {value}
    </div>
    
  );
};

export default Square;

export interface SquareProps {
  value: number;
  onValueChange: Function;
};