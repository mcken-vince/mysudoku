import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard, isEqualGrid, makeCopyOfGrid, GridType } from './logic/Game';
import { useState } from 'react';
import NumberSelection from './components/NumberSelection';

function App() {
  const [activeGrid, setActiveGrid] = useState<GridType | null>(null);
  // const [initialGrid, setInitialGrid] = useState<GridType | null>(null);
  const [solutionGrid, setSolutionGrid] = useState<GridType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [selectedSquare, setSelectedSquare] = useState<{row: number ,col: number, value: number, changeable: boolean} | null>(null);

  const handleValueChange = (row: number, col: number, value: number) => {
    setActiveGrid(prev => {
      const updatedGrid: GridType | null = prev ? [[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]], [...prev[4]], [...prev[5]], [...prev[6]], [...prev[7]], [...prev[8]] ] : null;
      updatedGrid && (updatedGrid[row][col].value = value);
      return updatedGrid;
    });
  };

  const clickNewGame = async () => {
    setComplete(false);
    setLoading(true);
    let [newGrid, solvedGrid] = await generateBoard();
    setActiveGrid(newGrid);
    setSolutionGrid(solvedGrid);
    // const gridAtStart = makeCopyOfGrid(newGrid);
    // setInitialGrid(gridAtStart);
    setLoading(false);
  };

  const clickValidate = () => {
    if (activeGrid && solutionGrid && isEqualGrid(activeGrid, solutionGrid)) {
      setComplete(true);
    }
  };

  const clickNumber = (value: number | null) => {
    if (selectedSquare) {
      if (value) {
        handleValueChange(selectedSquare.row, selectedSquare.col, value);
      } else {
        handleValueChange(selectedSquare.row, selectedSquare.col, 0);
      }
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
        <RegularBoard grid={activeGrid} selectSquare={setSelectedSquare}/>
        <NumberSelection handleClick={clickNumber}/>
    </div>
  );
};

export default App;
