import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard, boardType } from './logic/Game';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState<boardType | null>(null);

  const clickNewGame = () => {
    const newBoard = generateBoard();
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <div className='buttons'>
        <Button onClick={clickNewGame}>New Game</Button>
        <Button>Restart</Button>
      </div>
      <div className='board'>
        <RegularBoard board={board}/>
      </div>
    </div>
  );
};

export default App;
