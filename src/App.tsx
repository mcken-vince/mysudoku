import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard, boardType } from './logic/Game';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState<boardType>(generateBoard());

  const clickNewGame = () => {
    setBoard(generateBoard());
  };

  return (
    <div className="App">
      <div className='buttons'>
        <Button onClick={clickNewGame}>New Game</Button>
        <Button>Restart</Button>
      </div>
      
      <RegularBoard board={board}/>
    </div>
  );
};

export default App;
