import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';
import { generateBoard } from './logic/Game';
import {  gridType } from './logic/Main';
import { useState } from 'react';

function App() {
  const [board, setBoard] = useState<gridType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const clickNewGame = async () => {
    try {
      setLoading(true);
      let newGrid = await generateBoard();
      setBoard(newGrid);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
    
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
