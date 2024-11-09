import { useEffect, useState } from "react";

const ThirtySecCounter = ({
  time = 8,
  img,
  color = 0,
  diff = 0,
  name,
  votes,
  mode = "new",
  setTrumpNumber = 0,
  setKamalaNumber = 0,
  setShow,
}) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [showResult, setShowResult] = useState(false);

  let progress = 0;
  let interval = mode === "new" ? 10 : 1;
  useEffect(() => {
    // if (!timeLeft) {
    //   setShowResult(true);
    //   return;
    // }
    if ((progress * 100).toFixed(2) >= time) {
      // setTimeLeft((current) => 0);
      // time = 0;
      setShowResult((current) => true);
      if (time > 60) {
        setShow((current) => true);
      }
      if (diff > 0) {
        setTrumpNumber((current) => current + parseInt(votes));
      }
      if (diff < 0) {
        setKamalaNumber((current) => current + parseInt(votes));
      }
      // progress = 0;
      console.log("end running", progress);
      return;
    }
    setShowResult(false);
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft + 0.05);
    }, 0.1);
    return () => {
      clearInterval(intervalId);
      // clearInterval(intervalId1);
    };
  }, [timeLeft]);

  useEffect(() => {
    // const intervalId1 = setInterval(() => {
    //   console.log("set time run");
    //   progress = 0;
    //   resetNumbers();
    //   setTimeLeft((prevTimeLeft) => time);
    // }, 100000);
    // return () => {
    //   // clearInterval(intervalId);
    //   clearInterval(intervalId1);
    // };
  }, []);
  const resetNumbers = () => {
    setTrumpNumber((current) => 0);
    setKamalaNumber((current) => 0);
    setShow((current) => false);
  };
  useEffect(() => {
    // setTimeLeft((current) => 0);
    // setTimeLeft((current) => 0);
    // const intervalId1 = setInterval(() => {
    //   setTimeLeft((prevTimeLeft) => time);
    //   console.log("set time run");
    //   progress = 0;
    // }, 11000);
    // return () => {
    //   // clearInterval(intervalId);
    //   clearInterval(intervalId1);
    // };
    setTimeLeft((prevTimeLeft) => time);
    // progress = 0;
  }, [time]);

  progress = (timeLeft - time) / 100;
  // console.log("progress amount: " + progress);

  return (
    <div
      className={`mt-1 mb-1 relative
      // ${diff > 0 ? "bg-blue-500" : "bg-red-700"}`}
    >
      <div
        className="rounded  relative ml-0 border-2 border-white"
        style={{
          backgroundColor: "#000",
          height: "25px",
          borderRadius: "5px",
        }}
      >
        <div
          className={`absolute w-full h-full flex items-center z-10 text-cyan-50 ${
            mode === "new"
              ? "text-cyan-50 text-xs"
              : "text-cyan-50/[0.85] text-xs"
          } top-0 ml-[2px] font-bold transition-all`}
          style={{
            // right: "100%",
            // left: `${progress * 100}%`,
            left: `${time}%`,
          }}
        >
          {/* <span>
            {(progress * 100).toFixed(1)} <b className="text-[0.5rem]">%</b>
          </span> */}
          <span>
            {time.toFixed(1)} <b className="text-[0.5rem]">%</b>
          </span>
        </div>
        <div
          style={{
            // width: `${progress * 100}%`,
            // width: `${progress * 100}%`,
            width: `${time}%`,
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
            left: `1px`,
            height: "100%",
            top: "0px",
            // top: "-15px",
          }}
          className="text-xl -ml-0"
        >
          <img
            src={`${img}`}
            alt=""
            className="w-[22px] h-[22px] rounded-full object-cover"
          />
        </span>
      </div>
    </div>
  );
};

export default ThirtySecCounter;
