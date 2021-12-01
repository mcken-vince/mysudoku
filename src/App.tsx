import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard } from './logic/Game';
import {  checkGrid, gridType } from './logic/Main';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState<gridType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const clickNewGame = () => {
    let newGrid = generateBoard();
    while(true) {
      if (newGrid) break;
      else {
        newGrid = generateBoard();
      }    
    }
    setBoard(newGrid);
  };

  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      <div className='buttons'>
        <Button onClick={clickNewGame}>New Game</Button>
        <Button>Restart</Button>
      </div>
        <RegularBoard board={board}/>
    </div>
  );
};

export default App;
