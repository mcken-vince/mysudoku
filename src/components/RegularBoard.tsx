import { useState } from 'react';
import '../styles/RegularBoard.scss';
import Region from './Region';

const RegularBoard = () => {
  const [board, setBoard] = useState<boardType | null>(null);

  return (
    <div className='regular-board-container'>
      <Region />
      <Region />
      <Region />
      <Region />
      <Region />
      <Region />
      <Region />
      <Region />
      <Region />
    </div>
  );
};

export default RegularBoard;

type boardType = [
  [num, num, num, num, num, num, num, num, num],
  [num, num, num, num, num, num, num, num, num],
  [num, num, num, num, num, num, num, num, num],
  [num, num, num, num, num, num, num, num, num],
  [num, num, num, num, num, num, num, num, num],
  [num, num, num, num, num, num, num, num, num],
  [num, num, num, num, num, num, num, num, num],
  [num, num, num, num, num, num, num, num, num],
  [num, num, num, num, num, num, num, num, num]
];

type num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;