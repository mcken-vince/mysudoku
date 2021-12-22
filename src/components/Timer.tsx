import Button from 'react-bootstrap/Button';
import { secondsToTimeString } from '../logic/Game';
const Timer = (props: TimerProps) => {
  const { time, pause, start, timerPaused, disabled } = props;

  const handlePause = () => {
    // console.log('timerPaused:', timerPaused);
    if (timerPaused) {
      start();
    } else {
      pause();
    }
  };

  return (
    <div className='timer'>
      <span>
        {secondsToTimeString(time)}
      </span>
      { !disabled && 
        <Button onClick={handlePause}>{timerPaused ? 'Resume' : 'Pause'}</Button>
      }
    </div>
  );
};

export default Timer;

export interface TimerProps {
  time: number;
  pause: Function;
  timerPaused: boolean;
  start: Function;
  disabled: boolean;
};