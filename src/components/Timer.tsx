const Timer = (props: TimerProps) => {
  const { time } = props;

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
    </div>
  );
};

export default Timer;

export interface TimerProps {
  time: number;
};