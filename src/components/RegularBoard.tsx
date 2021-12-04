import { useEffect, useState } from 'react';
import { rowsToRegions } from '../logic/Game';
import { gridType } from '../logic/Main';
import '../styles/RegularBoard.scss';
import Region from './Region';


const RegularBoard = (props: RegularBoardProps) => {
  const { grid, onValueChange } = props;
  const regions = grid ? rowsToRegions(grid) : [[],[],[],[],[],[],[],[],[]];
  const regionComponents = regions.map((region, idx) => <Region region={region} onValueChange={onValueChange} key={idx} />); 

  return (
    <div className='regular-board-container'>
     {regionComponents}
    </div>
  );
};

export default RegularBoard;

export interface RegularBoardProps {
  grid: gridType | null;
  onValueChange: Function;
};
