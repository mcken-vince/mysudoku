import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard, isEqualGrid, GridType } from './logic/Game';
import { useState, useRef } from 'react';
import NumberSelection from './components/NumberSelection';
import Timer from './components/Timer';

function App() {
  const [activeGrid, setActiveGrid] = useState<GridType | null>(null);
  const [solutionGrid, setSolutionGrid] = useState<GridType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [selectedSquare, setSelectedSquare] = useState<{row: number ,col: number, value: number, changeable: boolean} | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);
  const countRef = useRef<any>(null);

  const startTimer = () => {
    // Clear any existing intervals before starting a new one
    clearInterval(countRef.current);
    setPause(false);
    countRef.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
  };

  const pauseTimer = () => {
    if (!pause) {
      setPause(true);
      clearInterval(countRef.current);
    }
  };

  const handleValueChange = (row: number, col: number, value: number) => {
    setActiveGrid(prev => {
      const updatedGrid: GridType | null = prev ? [[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]], [...prev[4]], [...prev[5]], [...prev[6]], [...prev[7]], [...prev[8]] ] : null;
      updatedGrid && (updatedGrid[row][col].value = value);
      return updatedGrid;
    });
    setTimeout(() => checkSolution(), 1);
  };

  const clickNewGame = async () => {
    setLoading(true);
    setMessage(null);
    setComplete(false);
    let [newGrid, solvedGrid] = await generateBoard();
    setActiveGrid(newGrid);
    setSolutionGrid(solvedGrid);
    setLoading(false);
    setTimer(0);
    startTimer();
  };

  const clickRestart = () => {
    const resetBoard = [];
    if (activeGrid) {
      for (let row = 0; row < 9; row++) {
        resetBoard.push(activeGrid[row].map(square => {
          return { ...square, value: square.changeable ? 0 : square.value }
        }));
      };
    }
    setActiveGrid(resetBoard);
    setTimer(0);
    startTimer();
  };

  const checkSolution = () => {
    if (activeGrid && solutionGrid && isEqualGrid(activeGrid, solutionGrid)) {
      pauseTimer();
      setMessage(null);
      setComplete(true);
    } else {
      setTimeout(() => setMessage(null), 3000)
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
            <Button onClick={clickRestart}>Restart</Button>
            { complete ?  <h1>You win!</h1> : <Button onClick={checkSolution}>Check Solution</Button> }
            { message && <h3>{message}</h3>}
            <Timer time={timer} pause={pauseTimer} start={startTimer} timerPaused={pause}/>
          </>
        }
      </div>
        {pause && !complete ? <h1>Game is paused.</h1>:
        <>
        <RegularBoard 
        grid={activeGrid}
        selectedSquare={selectedSquare}
        selectSquare={setSelectedSquare}
        />
        <NumberSelection handleClick={clickNumber}/>
      </>
      }
    </div>
  );
};

export default App;
