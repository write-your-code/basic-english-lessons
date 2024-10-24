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
  let interval = mode === "new" ? 20 : 5;
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
    <div className="mt-2 mb-1 relative">
      <div
        className="rounded  relative ml-0 border-2 border-white"
        style={{
          backgroundColor: "#000",
          height: "70px",
          borderRadius: "5px",
        }}
      >
        {showRsult && (
          <>
            {(mode !== "old" && diff>0) && (
              <span
                className={`capitalize absolute h-full ${
                  color === 2 ? "text-green-500" : "text-green-500"
                } flex items-end gap-2 right-[200px] -top-16 pb-2 text-3xl font-semibold`}
              >
                {color === 2 ? "Kamala" : "Trump"}
                <b className="text-wrap !text-lg font-normal">projected winner</b>
              </span>
            )}
            <span className="text-sm absolute h-full text-cyan-50 flex items-start right-[20px] top-0 font-semibold">
              {color === 2 ? (
                <i
                  className={`${
                    mode === "old" ? "text-cyan-50/[0.85]" : "text-blue-500"
                  }`}
                >
                  {mode === "new" ? "Kamala" : "Biden"}
                </i>
              ) : (
                <i
                  className={`${
                    mode === "old" ? "text-cyan-50/[0.85]" : "text-red-500"
                  }`}
                >
                  Trump
                </i>
              )}
            </span>
            <span className="text-lg absolute h-full text-cyan-50 flex items-start right-[10px] text-nowrap top-5 font-semibold">
              {diff >= 0 ? (
                diff > 0 ? (
                  <i
                    className={`${
                      color === 2 ? "bg-blue-500" : "bg-red-500"
                    } p-2 rounded`}
                  >
                    + {diff && diff.toFixed(2)}
                  </i>
                ) : (
                  <i className={`p-1 rounded bg-cyan-50  text-black`}>
                    {diff.toFixed(2)}
                  </i>
                )
              ) : ""}
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
