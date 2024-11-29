import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const CountDown = ({ time = 8 }) => (
  <CountdownCircleTimer
    isPlaying
    duration={time}
    // colors={["#004777", "#8B5CF6", "#A30000", "#8B5CF6"]}
    colors={["#028b16", "#a4b004", "#da0808", "#da0808"]}
    colorsTime={[5, 2, 1, 0]}
    size={40}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);
