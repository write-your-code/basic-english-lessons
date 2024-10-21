import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const CountDown = ({ time = 8 }) => (
  <CountdownCircleTimer
    isPlaying
    duration={time}
    colors={["#004777", "#8B5CF6", "#A30000", "#8B5CF6"]}
    // colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[7, 5, 2, 0]}
    size={60}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);
