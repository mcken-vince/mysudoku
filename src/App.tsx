import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard } from './logic/Game';
import {  checkGrid, gridType } from './logic/Main';
import { useState } from 'react';
import NumberSelection from './components/NumberSelection';

function App() {
  const [grid, setGrid] = useState<gridType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  const handleValueChange = (row: number, col: number, value: number) => {
    setGrid(prev => {
      const updatedGrid: gridType | null = prev ? [[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]], [...prev[4]], [...prev[5]], [...prev[6]], [...prev[7]], [...prev[8]] ] : null;
      updatedGrid && (updatedGrid[row][col] = value);
      return updatedGrid;
    });
  };

  const clickNewGame = () => {
    setComplete(false);
    setLoading(true);
    let newGrid = generateBoard();
    setGrid(newGrid);
    setLoading(false);
  };

  const clickValidate = () => {
    if (grid && checkGrid(grid)) {
      setComplete(true);
    }
  };

  const clickNumber = (value: number | null) => {
    if (value) {

    } else {
      
    }
  };

  return (
    <div className="App">
      <div className='buttons'>
        {loading ? <h1>Workin' it...</h1> : 
          <>
            <Button onClick={clickNewGame}>New Game</Button>
            <Button>Restart</Button>
            <Button onClick={clickValidate}>Validate</Button>
          </>
        }
      </div>
        {complete && <h1>You win!</h1>}
        <RegularBoard grid={grid} onValueChange={handleValueChange}/>
        <NumberSelection handleClick={clickNumber}/>
    </div>
  );
};

export default App;
