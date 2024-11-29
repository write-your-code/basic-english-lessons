import React, { useState } from "react";
import ProgressBarTimer from "./ProgressBarTimerForAll50States";
// import { dataCompleteWithSummaryLatest } from "./data/ElectionData";
import { dataCompleteWithElectionStatsAll50 } from "./data/ElectionData";

const ElectionDesign = () => {
  const [trumpNumer, setTrumpNumber] = useState(295);
  const [kamalaNumer, setKamalaNumber] = useState(226);
  const [trumpNumer1, setTrumpNumber1] = useState(312);
  const [kamalaNumer1, setKamalaNumber1] = useState(226);
  const [show, setShow] = useState(false);

  let kamala = 0;
  let trump = 0;
  // withJudePredicted.map((state) => {
  //   if (state.trump > state.kamala) {
  //     // setTrumpNumber((current) => current + state.votes);
  //     trump += parseInt(state.votes);
  //   }
  //   if (state.kamala > state.trump) {
  //     kamala += parseInt(state.votes);
  //   }
  //   // data = data[0]
  // });

  // setTrumpNumber((current) => current + t);
  // setKamalaNumber((current) => current + k);
  // data = data[0]
  return (
    <div className="h-full bg-black pt-3 m-0">
      {/* top bar total votes comparison */}
      <div className="flex w-full justify-center pt-2 relative h-[40px] mb-16">
        <span className="flex justify-center">
          <img
            src="./arrow-up.png"
            className="absolute w-4 h-4 -bottom-4 rotate-0 left-[49.5%] filter invert"
            alt=""
          />
        </span>
        <span className="absolute -bottom-10 bg-gradient-to-b from-yellow-200/[1] to-yellow-500/[1] bg-clip-text text-transparent text-xl font-semibold z-20 border-p-2 border-yellow-400">
          270
          <span className="text-xs bg-gradient-to-b from-yellow-200/[1] to-yellow-500/[1] bg-clip-text text-transparent block absolute top-[80%]">
            To Win
          </span>
        </span>
        <span className="flex justify-center">
          <img
            src="./arrow-up.png"
            className="absolute w-4 h-4 -top-2 rotate-180 left-[49.5%] filter invert"
            alt=""
          />
        </span>
        <div
          className="rounded  relative ml-0 border-2 border-white w-[1080px] flex justify-center items-center transition-all"
          style={{
            backgroundColor: "#000",
            height: "35px",
            borderRadius: "5px",
          }}
        >
          {/* trump */}
          <div>
            <div
              style={{
                // width: `${progress * 100}%`,
                width: `${trumpNumer1 * 2}px`,
                height: "100%",
                transition: "width 800ms linear all",
                // backgroundColor: "red",
                // borderRadius: "5px",
                // position: "relative",
              }}
              className={`${
                1 === 1 ? "bg-red-700" : "bg-blue-700"
              } rounded absolute top-0 left-0`}
            >
              <span
                className="-ml-[0px] px-0 absolute left-0 top-0 h-full flex items-center z-10 text-cyan-50 text-4xl font-semibold transition-all"
                style={{
                  // right: "100%",
                  // left: `${progress * 100}%`,
                  // left: `${trumpNumer1 * 2 - (trumpNumer1 < 50 ? 0 : 100)}px`,
                  left: `5px`,
                  transition: "all 1000 ",
                }}
              >
                {trumpNumer1}
              </span>
              {/* </div> */}
              <span
                style={{
                  // width: `${progress * 100}%`,
                  // width: "100px",
                  // height: "50px",
                  // position: "",
                  // right: "100%",
                  // left: `${progress * 100}%`,
                  // left: `10px`,
                  height: "70px",
                  width: "60px",
                  // top: "0px",
                  // top: "-15px",
                }}
                className="text-xl absolute -left-[65px]"
              >
                <img
                  src={`${"./images/trump-1.png"}`}
                  alt=""
                  className="w-[60px] h-[70px] rounded object-cover border-2 border-red-500"
                />
                <span
                  className="text-red-400 text-2xl font-semibold 
                text-nowrap absolute left-[110%] -bottom-0"
                >
                  <span>Donald Trump</span>
                  <span className="text-lg  rounded font-bold text-red-400   ml-2">
                    <span className="text-xl bg-white p-1 rounded mr-1">
                      50.5%
                    </span>{" "}
                    votes : 74,264,010
                  </span>
                </span>
              </span>
            </div>
          </div>
          {/* kamala */}
          <div>
            <div
              style={{
                // width: `${progress * 100}%`,
                width: `${kamalaNumer1 * 2}px`,
                height: "100%",
                // backgroundColor: "red",
                // borderRadius: "5px",
                // position: "relative",
              }}
              className={`${
                2 === 1 ? "bg-red-700" : "bg-blue-700"
              } rounded absolute top-0 right-0`}
            >
              <span
                className="-ml-[0px] px-0 absolute right-0 top-0 h-full flex items-center z-10 text-cyan-50 text-4xl font-semibold transition-all"
                style={{
                  // right: "100%",
                  // left: `${progress * 100}%`,
                  // right: `${kamalaNumer1 * 2 - (kamalaNumer1 < 50 ? 0 : 100)}px`,
                  right: `5px`,
                }}
              >
                {kamalaNumer1}
              </span>

              <span
                style={{
                  height: "70px",
                  width: "60px",
                  // top: "0px",
                  // top: "-15px",
                }}
                className="text-xl absolute -right-[65px] top-0"
              >
                <img
                  src={`${"./images/kamala-1.png"}`}
                  alt=""
                  className="w-[60px] h-[70px] rounded object-cover border-2 border-blue-400"
                />
                <span
                  className="text-blue-400 text-2xl font-semibold 
                text-nowrap absolute right-[110%] -bottom-0"
                >
                  <span className="text-lg rounded font-bold text-blue-500 mr-2">
                    votes : 70,356,521
                    <span className="text-xl bg-white p-1 rounded ml-2">
                      47.9%
                    </span>
                  </span>
                  <span>Kamala Harris</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end top bar total votes comparison */}
      {/* top bar total votes comparison */}
      <div className="flex w-full justify-center items-center hidden ">
        <div
          className="rounded  relative ml-0 border-2 border-white w-[976px] flex justify-center items-center"
          style={{
            backgroundColor: "#000",
            height: "60px",
            borderRadius: "5px",
          }}
        >
          {/* trump */}
          <div>
            <div
              style={{
                // width: `${progress * 100}%`,
                width: `${trumpNumer * 2}px`,
                height: "100%",
                // backgroundColor: "red",
                // borderRadius: "5px",
                // position: "relative",
              }}
              className={`${
                1 === 1 ? "bg-red-700" : "bg-blue-700"
              } rounded absolute top-0 left-0`}
            >
              <span
                className="-ml-[0px] px-0 absolute left-0 top-0 h-full flex items-center z-10 text-cyan-50 text-5xl font-semibold"
                style={{
                  // right: "100%",
                  // left: `${progress * 100}%`,
                  left: `${trumpNumer * 2 - (trumpNumer < 50 ? 0 : 100)}px`,
                }}
              >
                {trumpNumer}
              </span>
              {/* </div> */}
              <span
                style={{
                  // width: `${progress * 100}%`,
                  // width: "100px",
                  // height: "50px",
                  // position: "",
                  // right: "100%",
                  // left: `${progress * 100}%`,
                  // left: `10px`,
                  height: "60px",
                  width: "60px",
                  // top: "0px",
                  // top: "-15px",
                }}
                className="text-xl absolute -left-[60px]"
              >
                <img
                  src={`${"./images/trump.jpg"}`}
                  alt=""
                  className="w-[55px] h-[55px] rounded object-cover border-2 "
                />
              </span>
              {/* new idea */}
              {/* <span
                style={{
                  // width: `${progress * 100}%`,
                  // width: "100px",
                  // height: "50px",
                  // position: "",
                  // right: "100%",
                  // left: `${progress * 100}%`,
                  // left: `10px`,
                  height: "110px",
                  width: "110px",
                  // top: "0px",
                  // top: "-15px",
                }}
                className="text-xl absolute right-full"
              >
              <img
              </span>
              </span>
                  src={`${"./images/trump.jpg"}`}
                  alt=""
                  className="w-[110px] h-[110px] rounded object-cover border-2 "
                />
              <span className="text-white absolute top-[full]">Donald Trump</span> */}
            </div>
          </div>
          {/* kamala */}
          <div>
            <div
              style={{
                // width: `${progress * 100}%`,
                width: `${kamalaNumer * 2}px`,
                height: "100%",
                // backgroundColor: "red",
                // borderRadius: "5px",
                // position: "relative",
              }}
              className={`${
                2 === 1 ? "bg-red-700" : "bg-blue-700"
              } rounded absolute top-0 right-0`}
            >
              <span
                className="-ml-[0px] px-0 absolute right-0 top-0 h-full flex items-center z-10 text-cyan-50 text-5xl font-semibold"
                style={{
                  // right: "100%",
                  // left: `${progress * 100}%`,
                  right: `${kamalaNumer * 2 - (kamalaNumer < 50 ? 0 : 100)}px`,
                }}
              >
                {kamalaNumer}
              </span>

              <span
                style={
                  {
                    // width: `${progress * 100}%`,
                    // width: "100px",
                    // height: "50px",
                    // position: "absolute",
                    // right: "100%",
                    // left: `${progress * 100}%`,
                    // right: `10px`,
                    // height: "100%",
                    // top: "0px",
                    // top: "-15px",
                  }
                }
                className="text-xl absolute -right-[60px]"
              >
                <img
                  src={`${"./images/kamala.jpg"}`}
                  alt=""
                  className="w-[55px] h-[55px] rounded object-cover border-2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end top bar total votes comparison */}
      {/* trump-{trump} --- kamala-{kamala} */}
      <div className="px-[1px] grid grid-cols-10 gap-[5px] pt-1 h-full w-full bg-black">
        {dataCompleteWithElectionStatsAll50?.map((item) => (
          <div
            className={`${
              show
                ? item.kamala - item.trump > 0
                  ? "bg-blue-500"
                  : "bg-red-700"
                : ""
            } p-1 pb-0 rounded h-[90px] border`}
            key={item?.name}
          >
            <div className="text-xs flex justify-between items-center text-white font-semibold z-10 w-full text-nowrap">
              <span>
                {item.name.length > 8 ? item.name.substring(0, 9) : item.name}(
                {item.votes})
              </span>
              <p className="text-wrap text-xs">
                <span className="text-green-300 text-sm">
                  {item.votesCount}
                </span>
                {/* <i className="text-xs capitalize text-wrap ml-1">popular votes</i> */}
              </p>
            </div>
            {item.trump > item.kamala ? (
              <>
                <ProgressBarTimer
                  name={item.name}
                  votes={item.votes}
                  time={item.trump}
                  diff={item.trump - item.kamala}
                  img={"./images/trump.jpg"}
                  color={1}
                  setTrumpNumber={setTrumpNumber}
                  setKamalaNumber={setKamalaNumber}
                  setShow={setShow}
                  key={item.name + "first"}
                />
                <ProgressBarTimer
                  name={item.name}
                  votes={item.votes}
                  time={item.kamala}
                  // diff={item.trump - item.kamala}
                  img={"./images/kamala.jpg"}
                  color={2}
                  setTrumpNumber={setTrumpNumber}
                  setKamalaNumber={setKamalaNumber}
                  setShow={setShow}
                  key={item.name + "second"}
                />
              </>
            ) : (
              <>
                <ProgressBarTimer
                  name={item.name}
                  votes={item.votes}
                  time={item.kamala}
                  diff={item.trump - item.kamala}
                  img={"./images/kamala.jpg"}
                  color={2}
                  setTrumpNumber={setTrumpNumber}
                  setKamalaNumber={setKamalaNumber}
                  setShow={setShow}
                  key={item.name + "first"}
                />
                <ProgressBarTimer
                  name={item.name}
                  votes={item.votes}
                  time={item.trump}
                  // diff={item.kamala - item.trump}
                  img={"./images/trump.jpg"}
                  color={1}
                  setTrumpNumber={setTrumpNumber}
                  setKamalaNumber={setKamalaNumber}
                  setShow={setShow}
                  key={item.name + "second"}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectionDesign;
