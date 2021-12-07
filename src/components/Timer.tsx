import Button from 'react-bootstrap/Button';

const Timer = (props: TimerProps) => {
  const { time, pause, start, timerPaused, disabled } = props;

  const handlePause = () => {
    console.log('timerPaused:', timerPaused);
    if (timerPaused) {
      start();
    } else {
      pause();
    }
  };

  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  const hours = Math.floor(time / (60 * 60));
  return (
    <div className='timer'>
      <span>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
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