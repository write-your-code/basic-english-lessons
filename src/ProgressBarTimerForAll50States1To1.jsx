import { useEffect, useState } from "react";

const ThirtySecCounter = ({
  time = 8,
  img,
  color = 0,
  diff,
  name,
  votes,
  mode = "new",
  // progress=0
}) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [showRsult, setShowResult] = useState(false);

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
      setShowResult(true);
      // progress = 0;
      console.log("end running", progress);
      return;
    }
    setShowResult(false);
    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft + 0.5);
    }, .1);
    return () => {
      clearInterval(intervalId);
      // clearInterval(intervalId1);
    };
  }, [timeLeft]);

  useEffect(() => {
    // const intervalId1 = setInterval(() => {
    //   setTimeLeft((prevTimeLeft) => time);
    //   console.log("set time run");
    //   progress = 0;
    // }, 11000);
    // return () => {
    //   // clearInterval(intervalId);
    //   clearInterval(intervalId1);
    // };
  }, []);
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
    <div className="mt-1 mb-1 relative">
      <div
        className="rounded  relative ml-0 border-2 border-white"
        style={{
          backgroundColor: "#000",
          height: "35px",
          borderRadius: "5px",
        }}
      >
       
        <div
          className={`absolute w-full h-full flex items-center z-10 text-cyan-50 ${
            mode === "new"
              ? "text-cyan-50 text-xs"
              : "text-cyan-50/[0.85] text-xs"
          } top-0 ml-[5px] font-bold transition-all`}
          style={{
            // right: "100%",
            left: `${progress * 100}%`,
          }}
        >
          <span>
            {(progress * 100).toFixed(1)} <b className="text-[0.6rem]">%</b>
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
            className="w-[30px] h-[30px] rounded-full object-cover"
          />
        </span>

        {/* second */}
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
            className="w-[30px] h-[30px] rounded-full object-cover"
          />
        </span>
      </div>
    </div>
  );
};

export default ThirtySecCounter;
