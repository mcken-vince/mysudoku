import '../styles/Square.scss';

const Square = (props: SquareProps) => {
  const { square } = props;

  const squareClass = 'square';
  return (
    <div className={squareClass}>
      {square}
    </div>
  );
};

export default Square;

export interface SquareProps {
  square: number;
}