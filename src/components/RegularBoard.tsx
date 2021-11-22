import { useState } from 'react';
import '../styles/RegularBoard.scss';
import Region from './Region';

const RegularBoard = () => {
  const [board, setBoard] = useState<any | null>(null);

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

