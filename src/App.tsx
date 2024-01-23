import "./styles/App.scss";
import SudokuBoard from "./components/SudokuBoard";
import Button from "react-bootstrap/Button";
import {
  generateBoard,
  GridType,
  DifficultyType,
  squareType,
  secondsToTimeString,
} from "./logic/Game";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import NumberSelection from "./components/NumberSelection";
import Timer from "./components/Timer";
import SelectDifficulty from "./components/SelectDifficulty";
import { isSolved, ModeType } from "./logic/Main";
import classNames from "classnames";
import SelectSudokuMode from "./components/SelectSudokuMode";
import Loading from "./components/Loading";
import { keyUpListenerLogic } from "./logic/EventListeners";

function App() {
  const [activeGrid, setActiveGrid] = useState<GridType | null>(null);
  // const [solutionGrid, setSolutionGrid] = useState<GridType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [selectedSquare, setSelectedSquare] = useState<squareType | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);
  const [selectMode, setSelectMode] = useState<"mode" | "difficulty" | null>(
    null
  );

  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );
  const [sudokuMode, setSudokuMode] = useState<ModeType>("classic");
  const countRef = useRef<any>(null);

function setSquareValue(value: number): void {
  if (selectedSquare?.row && selectedSquare?.col) {
    handleValueChange(selectedSquare?.row, selectedSquare?.col, value)
  }
}

  useEffect(() => {
    const arrowKeyUpListener = (event: any) => {
      keyUpListenerLogic(event, setSelectedSquare, setSquareValue);
    }
    document.addEventListener("keyup", arrowKeyUpListener);

    const cleanup = () => {
      document.removeEventListener("keyup", arrowKeyUpListener);
    };
    return cleanup;
  }, []);

  useEffect(() => {
    const valueKeyUpListener = (event: any) => {
      if (event.code.includes('Digit')) {
        const digitValue = parseInt(event?.code?.slice(-1) || '0')
        return clickNumber(digitValue)
      } 
      if (event.code === 'Backspace') {
        return clickNumber(null);
      }
    }
    document.addEventListener("keyup", valueKeyUpListener);

    const cleanup = () => {
      document.removeEventListener("keyup", valueKeyUpListener);
    };
    return cleanup;
  }, [selectedSquare])

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
    setActiveGrid((prev) => {
      const updatedGrid: GridType | null = prev
        ? [
            [...prev[0]],
            [...prev[1]],
            [...prev[2]],
            [...prev[3]],
            [...prev[4]],
            [...prev[5]],
            [...prev[6]],
            [...prev[7]],
            [...prev[8]],
          ]
        : null;
      if (updatedGrid) updatedGrid[row][col].value = value;
      return updatedGrid;
    });
    setTimeout(() => checkSolution(), 1);
  };

  /**
   * Handles click of New Game button
   */
  const clickNewGame = () => {
    setSelectMode("mode");
  };

  /**
   * Sets loading state to true before passing difficulty argument to startNewGame function.
   * @param difficulty
   */
  const handleStartNewGame = (
    difficulty: "easy" | "medium" | "difficult" | "random"
  ) => {
    setLoading(true);
    // This setTimeout causes loading state to be set to true before the entirety of startNewGame is called
    setTimeout(() => {
      startNewGame(difficulty);
    }, 0);
  };

  const startNewGame = async (
    difficulty: "easy" | "medium" | "difficult" | "random"
  ) => {
    setSelectMode(null);
    setMessage(null);
    setComplete(false);
    setSelectedSquare(null);
    let setDifficulty: DifficultyType;
    // Pick a random difficulty
    if (difficulty === "random") {
      const randomNumber: number = Math.floor(Math.random() * 3);
      if (randomNumber === 0) {
        setDifficulty = "easy";
      } else if (randomNumber === 1) {
        setDifficulty = "medium";
      } else {
        setDifficulty = "difficult";
      }
    } else {
      setDifficulty = difficulty;
    }
    setSelectedDifficulty(setDifficulty);
    // const [newGrid, solvedGrid] = await generateBoard(setDifficulty, sudokuMode);
    const newGrid = await generateBoard(setDifficulty, sudokuMode);

    setActiveGrid(newGrid);
    // setSolutionGrid(solvedGrid);
    setLoading(false);
    setTimer(0);
    startTimer();
  };

  /**
   * Handles click of Restart button
   */
  const clickRestart = () => {
    setComplete(false);
    setSelectedSquare(null);
    const resetBoard = [];
    if (activeGrid) {
      for (let row = 0; row < 9; row++) {
        resetBoard.push(
          activeGrid[row].map((square) => {
            return { ...square, value: square.changeable ? 0 : square.value };
          })
        );
      }
    }
    setActiveGrid(resetBoard);
    setTimer(0);
    startTimer();
  };

  /**
   * Checks to see if grid has been solved, and set complete state to true if it has.
   */
  const checkSolution = () => {
    // if (activeGrid && solutionGrid && (isEqualGrid(activeGrid, solutionGrid) || isSolved(activeGrid))) {
    if (activeGrid && isSolved(activeGrid)) {
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

  const handleSelectSudokuMode = (mode: ModeType) => {
    setSudokuMode(mode);
    setSelectMode("difficulty");
  };

  const selectedDifficultyClasses = classNames("selected-difficulty", {
    easy: selectedDifficulty === "easy",
    medium: selectedDifficulty === "medium",
    difficult: selectedDifficulty === "difficult",
  });

  return (
    <div className="App">
      {selectedDifficulty && !loading && selectMode === null && (
        <span className={selectedDifficultyClasses}>
          {sudokuMode[0].toUpperCase() + sudokuMode.slice(1)} -{" "}
          {selectedDifficulty[0].toUpperCase() + selectedDifficulty.slice(1)}
        </span>
      )}
      <div className="buttons">
        {loading ? (
          <Loading />
        ) : (
          <>
            {!activeGrid && <h1>Welcome to MySudoku!</h1>}
            <Button disabled={loading} onClick={clickNewGame}>
              New Game
            </Button>
            {activeGrid && selectMode === null && (
              <Button disabled={loading} onClick={clickRestart}>
                Restart
              </Button>
            )}
            {complete && selectMode === null && (
              <h1>{`Puzzle completed in ${secondsToTimeString(timer)}!`}</h1>
            )}
            {message && <h3>{message}</h3>}
            {selectMode === null && !complete && activeGrid && (
              <Timer
                time={timer}
                pause={pauseTimer}
                start={startTimer}
                timerPaused={pause}
                disabled={complete}
              />
            )}
          </>
        )}
      </div>
      {selectMode === "mode" && (
        <SelectSudokuMode onConfirm={handleSelectSudokuMode} />
      )}
      {selectMode === "difficulty" && (
        <SelectDifficulty
          onSelect={handleStartNewGame}
          disableButtons={loading}
        />
      )}

      {selectMode === null && activeGrid && (
        <div className="game-container">
          {pause && !complete ? (
            <h1>Game is paused.</h1>
          ) : (
            <>
              <SudokuBoard
                grid={activeGrid}
                selectedSquare={selectedSquare}
                selectSquare={setSelectedSquare}
                mode={sudokuMode}
              />
              {!complete && activeGrid && (
                <NumberSelection
                  handleClick={clickNumber}
                  disabled={
                    !selectedSquare ||
                    (selectedSquare && !selectedSquare.changeable)
                  }
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
