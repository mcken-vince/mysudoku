import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard, isEqualGrid, GridType, DifficultyType, squareType } from './logic/Game';
import { useState, useRef } from 'react';
import NumberSelection from './components/NumberSelection';
import Timer from './components/Timer';
import SelectDifficulty from './components/SelectDifficulty';
import { checkGrid } from './logic/Main';

function App() {
  const [activeGrid, setActiveGrid] = useState<GridType | null>(null);
  const [solutionGrid, setSolutionGrid] = useState<GridType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [selectedSquare, setSelectedSquare] = useState<squareType | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);
  const [selectDifficulty, setSelectDifficulty] = useState<boolean>(true);
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

  /**
   * Updates the activeGrid state, takes a square's coordinates and updates the value to the given value.
   * Then calls checkSolution to see if puzzle has been solved.
   * @param row 
   * @param col 
   * @param value 
   */
  const handleValueChange = (row: number, col: number, value: number) => {
    setActiveGrid(prev => {
      const updatedGrid: GridType | null = prev ? [[...prev[0]], [...prev[1]], [...prev[2]], [...prev[3]], [...prev[4]], [...prev[5]], [...prev[6]], [...prev[7]], [...prev[8]] ] : null;
      updatedGrid && (updatedGrid[row][col].value = value);
      return updatedGrid;
    });
    setTimeout(() => checkSolution(), 1);
  };

  /**
   * Handles click of New Game button
   */
  const clickNewGame = () => {
    setSelectDifficulty(prev => !prev);
  };

  const startNewGame = async (difficulty: 'easy' | 'medium' | 'difficult' | 'random') => {
    setSelectDifficulty(false);
    setLoading(true);
    setMessage(null);
    setComplete(false);
    let setDifficulty: DifficultyType;
    if (difficulty === 'random') {
      const randomNumber: number = Math.floor(Math.random() * 3);
      if (randomNumber === 0) {
        setDifficulty = 'easy';
      } else if (randomNumber === 1) {
        setDifficulty = 'medium'
      } else {
        setDifficulty = 'difficult';
      }
    } else {
      setDifficulty = difficulty;
    }
    let [newGrid, solvedGrid] = await generateBoard(setDifficulty);
    setActiveGrid(newGrid);
    setSolutionGrid(solvedGrid);
    setLoading(false);
    setTimer(0);
    startTimer();
  };
  
  /**
   * Handles click of Restart button
   */
  const clickRestart = () => {
    setComplete(false);
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

  /**
   * Checks to see if grid has been solved, and set complete state to true if it has.
   */
  const checkSolution = () => {
    if (activeGrid && solutionGrid && (isEqualGrid(activeGrid, solutionGrid) || checkGrid(activeGrid))) {
      pauseTimer();
      setMessage(null);
      setComplete(true);
    }
  };

  /**
   * Passes the clicked value from NumberSelection to the selectedSquare if there is one.
   * @param value 
   */
  const clickNumber = (value: number | null) => {
    if (selectedSquare && selectedSquare.changeable) {
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
            { complete && 
              <h1>{`Puzzle completed in ${timer} seconds!`}</h1>
            }
            { message && 
              <h3>{message}</h3>
            }
            {!selectDifficulty && 
              <Timer 
                time={timer} 
                pause={pauseTimer} 
                start={startTimer} 
                timerPaused={pause} 
                disabled={complete} 
              />
            }
          </>
        }
      </div>
        {selectDifficulty ? <SelectDifficulty onSelect={startNewGame} /> :
        <div className='game-container'>{pause && !complete ? <h1>Game is paused.</h1>:
          <>
            <RegularBoard 
              grid={activeGrid}
              selectedSquare={selectedSquare}
              selectSquare={setSelectedSquare}
              />
            {!complete && 
              <NumberSelection handleClick={clickNumber}/>
            }
          </>
        }</div>
      }
        </div>
  );
};

export default App;
