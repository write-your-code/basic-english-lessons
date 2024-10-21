import { useEffect, useState } from "react";

const ThirtySecCounter = ({ time = 8, img, color = 0, name, votes }) => {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    if (!timeLeft) return;
    if ((progress * 100).toFixed(2) >= time) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft + 0.1);
    }, 10);
    return () => {
      clearInterval(intervalId);
      // clearInterval(intervalId1);
    };
  }, [timeLeft]);
  useEffect(() => {
    const intervalId1 = setInterval(() => {
      setTimeLeft((prevTimeLeft) => time);
      console.log("sett time run");
      progress = 0;
    }, 30000);
    return () => {
      // clearInterval(intervalId);
      clearInterval(intervalId1);
    };
  }, []);

  // const progress = timeLeft ;
  let progress = (timeLeft - time) / 100;

  // const progress = time;

  return (
    <div className="mt-2 mb-1 relative">
      <div
        className="rounded  relative ml-0 border-2 border-white"
        style={{
          backgroundColor: "#000",
          height: "70px",
          borderRadius: "5px",
        }}
      >
        <span className="text-sm absolute h-full text-cyan-50 flex items-start right-[10px] top-0 font-semibold">
          {color === 2 ? <i className="text-blue-500">Kamala</i> : <i className="text-red-500">Trump</i>}
        </span>
        <div
          className="absolute w-full h-full flex items-center z-10 text-cyan-50 text-4xl top-0 ml-[10px] font-bold transition-all"
          style={{
            // right: "100%",
            left: `${progress * 100}%`,
          }}
        >
          <span>
            {(progress * 100).toFixed(2)} <b className="text-2xl">%</b>
          </span>
        </div>
        <div
          style={{
            // width: `${progress * 100}%`,
            width: `${progress * 100}%`,
            height: "100%",
            // backgroundColor: "red",
            // borderRadius: "5px",
            position: "relative",
          }}
          className={`${color === 1 ? "bg-red-700" : "bg-blue-700"} rounded`}
        />
        <span
          style={{
            // width: `${progress * 100}%`,
            width: "100px",
            // height: "50px",
            position: "absolute",
            // right: "100%",
            // left: `${progress * 100}%`,
            left: `10px`,
            height: "100%",
            top: "0px",
            // top: "-15px",
          }}
          className="text-3xl -ml-0"
        >
          <img
            src={`${img}`}
            alt=""
            className="w-[65px] h-[65px] rounded-full object-cover"
          />
        </span>
      </div>
    </div>
  );
};

export default ThirtySecCounter;
