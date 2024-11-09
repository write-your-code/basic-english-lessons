import { useEffect, useRef, useState } from "react";

const ThirtySecCounter = ({
  time = 8,
  img,
  color = 0,
  diff,
  name,
  votes,
  votesCount = 0,
  mode = "new",
  setTrumpNumber = 0,
  setKamalaNumber = 0,
  setShowVoteShare,
}) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const [showRsult, setShowResult] = useState(false);
  const audioRef = useRef(null);
  let progress = 0;
  let interval = mode === "new" ? 10 : 10;

  useEffect(() => {
    // if (!timeLeft) {
    //   setShowResult(true);
    //   return;
    // }

    setShowVoteShare && setShowVoteShare((current) => 1);
    if ((progress * 100).toFixed(2) >= time) {
      if (diff > 0 && color === 1) {
        setTrumpNumber((current) => current + parseInt(votes));
      }
      if (diff > 0 && color === 2) {
        setKamalaNumber((current) => current + parseInt(votes));
      }
      setShowResult((current) => {
        // setShowVoteShare && audioRef.current?.play();
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
      setTimeLeft((prevTimeLeft) => prevTimeLeft + 0.1);
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
    setTimeLeft((prevTimeLeft) => time);
    // progress = 0;
  }, [time]);

  progress = (timeLeft - time) / 100;
  // console.log("progress amount: " + progress);

  return (
    <div className="mt-0 mb-1 relative">
      <div
        className="rounded  relative ml-0 border-2 border-white"
        style={{
          backgroundColor: "#000",
          borderRadius: "5px",
          height: "70px",
          width: "420px",
        }}
      >
        {1 && (
          <>
            <span className="text-5xl absolute w-full h-full text-cyan-50 flex items-center justify-center text-nowrap -top-36 font-semibold ">
              {diff >= 0 ? (
                diff > 0 ? (
                  <div className="">
                    <span
                      className={`capitalize absolute ${
                        color === 2 ? "text-blue-500" : "text-red-500"
                      } flex items-center flex-col gap-0 -top-[68px] text-5xl font-bold bg-white py-1 px-2 w-[200px]`}
                    >
                      {/* <b className="text-wrap !text-xs font-bold leading-[5px]">
                        projected winner
                      </b> */}
                      <span>{color === 2 ? "Kamala" : "Trump"}</span>
                    </span>
                    <span
                      className={`${
                        color === 2 ? "bg-blue-600" : "bg-red-600"
                      } p-1 !w-[200px] block`}
                    >
                      + {diff && diff.toFixed(1)}
                    </span>
                    <span
                      className={`bg-orange-500
                      } p-1 !w-[200px] block text-xl`}
                    >
                      Votes Count: {votesCount && votesCount}
                    </span>
                  </div>
                ) : (
                  <span
                    className={`p-1 w-[200px] block bg-cyan-50  text-black`}
                  >
                    {diff.toFixed(1)}
                  </span>
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
          className={`absolute w-full h-full flex items-center z-10 text-cyan-50 ${
            mode === "new"
              ? "text-cyan-50 text-4xl"
              : "text-cyan-50/[0.85] text-xl"
          } top-0 ml-[10px] font-bold transition-all`}
          style={{
            // right: "100%",
            // left: `${progress * 100}%`,
            left: `${time}%`,
          }}
        >
          <span>
            {/* {(progress * 100).toFixed(2)} */}
            {time.toFixed(1)}
            <b className="text-[1.5rem] ml-[2px]">%</b>
          </span>
        </div>
        <div
          style={{
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
      {/* audios */}
      <audio ref={audioRef}>
        <source src="Ding.mp3" type="audio/mpeg" />
        <p>Your browser does not support the audio element.</p>
      </audio>
    </div>
  );
};

export default ThirtySecCounter;
