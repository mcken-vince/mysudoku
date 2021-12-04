import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard, nonEmptySquares, isEqualGrid } from './logic/Game';
import {  checkGrid, gridType } from './logic/Main';
import { useState } from 'react';
import NumberSelection from './components/NumberSelection';

function App() {
  const [grid, setGrid] = useState<gridType | null>(null);
  const [initialGrid, setInitialGrid] = useState<{row: number, col: number}[] | null>(null);
  const [solutionGrid, setSolutionGrid] = useState<gridType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [selectedSquare, setSelectedSquare] = useState<{row: number ,col: number, value: number, changeable: boolean} | null>(null);

  const handleValueChange = (row: number, col: number, value: number) => {
    setGrid(prev => {
      const updatedGrid: gridType | null = prev ? [[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]], [...prev[4]], [...prev[5]], [...prev[6]], [...prev[7]], [...prev[8]] ] : null;
      updatedGrid && (updatedGrid[row][col] = value);
      return updatedGrid;
    });
  };

  const clickNewGame = async () => {
    setComplete(false);
    setLoading(true);
    let [newGrid, solvedGrid] = await generateBoard();
    setGrid(newGrid);
    setSolutionGrid(solvedGrid);
    setInitialGrid(nonEmptySquares(newGrid));
    setLoading(false);
  };

  const clickValidate = () => {

    if (grid && solutionGrid && isEqualGrid(grid, solutionGrid)) {
      setComplete(true);
    }
  };

  const clickNumber = (value: number | null) => {
    if (value) {
      // if selectedSquare
        // selectedSquare = value
    
    } else {
      // if selectedSquare
        // selectedSquare = 0  
    }
  };

  return (
    <div className="App">
      <div className='buttons'>
        {loading ? <h1>Workin' it...</h1> : 
          <>
            <Button onClick={clickNewGame}>New Game</Button>
            <Button>Restart</Button>
            { complete ?  <h1>You win!</h1> : <Button onClick={clickValidate}>Check Solution</Button> }
          </>
        }
      </div>
        <RegularBoard grid={grid} onValueChange={handleValueChange}/>
        <NumberSelection handleClick={clickNumber}/>
    </div>
  );
};

export default App;
