import { useEffect, useRef, useState } from "react";

const ThirtySecCounter = ({
  time = 8,
  img,
  color = 0,
  diff,
  name,
  votes,
  mode = "new",
  setTrumpNumber = 0,
  setKamalaNumber = 0,
  setShowVoteShare,
}) => {
  // const [timeLeft, setTimeLeft] = useState(time);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showRsult, setShowResult] = useState(false);
  const audioRef = useRef(null);
  let progress = 0;
  let interval = mode === "new" ? 200 : 200;
  let timeToAdd = time / 10000;
  useEffect(() => {
    // if (!timeLeft) {
    //   setShowResult(true);
    //   return;
    // }
    // if ((progress * 100).toFixed(2) >= time) {
    if (timeLeft * 30 >= time) {
      if (diff > 0 && color === 1) {
        setTrumpNumber((current) => current + parseInt(votes));
      }
      if (diff > 0 && color === 2) {
        setKamalaNumber((current) => current + parseInt(votes));
      }
      setShowResult((current) => {
        setShowVoteShare && audioRef.current?.play();
        return true;
      });

      // if (showRsult) {
      //   audioRef.current?.play();
      // }
      setShowVoteShare && setShowVoteShare((current) => 1);
      // progress = 0;
      console.log("end running", progress);
      return;
    }
    setShowResult(false);
    const intervalId = setInterval(() => {
      // setTimeLeft((prevTimeLeft) => prevTimeLeft + 0.01);
      setTimeLeft((prevTimeLeft) => prevTimeLeft + timeToAdd);
    }, interval);
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
    // setTimeLeft((prevTimeLeft) => time);
    // progress = 0;
  }, [time]);

  progress = (timeLeft - time) / 100;
  // let p = timeLeft - time;
  // progress = timeToAdd / 100;
  // console.log("progress amount: " + progress);

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
        {false && (
          <>
            <span className="text-6xl absolute w-full h-full text-cyan-50 flex items-center justify-center text-nowrap -top-48 font-semibold ">
              {diff >= 0 ? (
                diff > 0 ? (
                  <>
                    <span
                      className={`capitalize absolute ${
                        color === 2 ? "text-blue-500" : "text-red-500"
                      } flex items-center flex-col gap-0 -top-[3.7rem] text-2xl font-bold bg-white py-1 px-2 rounded`}
                    >
                      <b className="text-wrap !text-xs font-bold leading-[5px]">
                        projected winner
                      </b>
                      <span>{color === 2 ? "Kamala" : "Trump"}</span>
                    </span>
                    <i
                      className={`${
                        color === 2 ? "bg-blue-600" : "bg-red-600"
                      } p-2 rounded`}
                    >
                      + {diff && diff.toFixed(1)}
                    </i>
                  </>
                ) : (
                  <i className={`p-1 rounded bg-cyan-50  text-black`}>
                    {diff.toFixed(1)}
                  </i>
                )
              ) : (
                ""
              )}
              {/* replaced */}
              {/* (
                <i
                  className={`${
                    color === 2 ? "bg-blue-500" : "bg-red-500"
                  } p-2 rounded`}
                >
                  {diff?.toFixed(2)}
                </i>
              ) */}
            </span>
          </>
        )}
        <div
          className={`absolute w-full h-full flex items-center justify-center z-10 text-cyan-50 ${
            mode === "new"
              ? "text-cyan-50 text-5xl"
              : "text-cyan-50/[0.85] text-5xl"
          } top-0 ml-[10px] font-bold transition-all`}
          style={
            {
              // right: "100%",
              // left: `${progress * 100}%`,
            }
          }
        >
          <span>
            {/* {(progress * 100).toFixed(2)} <b className="text-[1rem]">%</b> */}
            {(timeLeft * 30).toFixed(2)} <b className="text-[2rem]">%</b>
          </span>
        </div>
        <div
          style={{
            // width: `${progress * 100}%`,
            width: `${timeLeft * 30}%`,
            height: "100%",
            // backgroundColor: "red",
            // borderRadius: "5px",
            position: "relative",
          }}
          className={`${color === 1 ? "bg-red-700" : "bg-blue-700"} rounded`}
          // className={`${color === 1 ? "bg-red-700" : "bg-transparent"} rounded`}
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
          {/* <img
            src={`${img}`}
            alt=""
            className="w-[65px] h-[65px] rounded-full object-cover"
          /> */}
        </span>
      </div>
      {/* audios */}
      <audio ref={audioRef}>
        <source src="Ding.mp3" type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>
    </div>
  );
};

export default ThirtySecCounter;
