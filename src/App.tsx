import './styles/App.scss';
import RegularBoard from './components/RegularBoard';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <div className='buttons'>
        <Button>New Game</Button>
        <Button>Restart</Button>
      </div>
      
      <RegularBoard />
    </div>
  );
};

export default App;
