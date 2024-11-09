import React, { useEffect, useState } from "react";
import ProgressBarTimer from "./ProgressBarTimerForElectionStateWiseWithVoice";
// import { dataCompleteWithSummary } from "./data/ElectionData";
import { dataCompleteWithSummaryLatest } from "./data/ElectionData";

const ElectionDesign = ({ startedIndex = 0 }) => {
  // const [start, setStart] = useState(0);
  const [item, setItem] = useState();
  const [showVoteShare, setShowVoteShare] = useState(0);
  const [data, setData] = useState(dataCompleteWithSummaryLatest);
  const [trumpNumer, setTrumpNumber] = useState(216);
  const [kamalaNumer, setKamalaNumber] = useState(211);
  // let data = withJudePredicted;

  const synth = window.speechSynthesis;
  const voices = window.speechSynthesis.getVoices();

  let index = startedIndex || 0;
  let dataArray = data;
  let state;
  const getData = async () => {
    setItem((current) => dataCompleteWithSummaryLatest[index]);
    setShowVoteShare((current) => 0);
    state = dataArray[index];
    // setStart((current) => 1);
    console.log("in getdata", JSON.stringify(state));
    // speechStart("Next State", 0);
    console.log("index is:", index);

    if (index % 2 !== 0) {
      speechStart(
        "next state is " +
          state.name +
          " holding " +
          state.votes +
          "presidential votes",
        0
      );
    } else {
      speechStart(
        "" + state.name + " holds " + state.votes + " presidential votes",
        0
      );
      // speechStart(state?.summary, 0, 0);
    }

    speechStart(state?.summary, 0, 0);

    if (state?.trump > state?.kamala) {
      speechStart(
        (index % 2 !== 0
          ? index > 5
            ? "trump's projected to receive "
            : "trump's projected to win "
          : "trump is projected to gather ") +
          (state?.trump).toFixed(1) +
          "% votes share " +
          " while Harris expected to receive " +
          (state?.kamala).toFixed(1) +
          "percent votes",
        0
      );
      speechStart(
        "here Trump holds a " +
          ((state?.trump - state?.kamala).toFixed(1) > 1.0
            ? state?.trump - state?.kamala > 15
              ? " solid "
              : " slight "
            : " narrow ") +
          " lead with a margin of" +
          (state?.trump - state?.kamala).toFixed(1) +
          " percent ",
        0
      );
      speechStart(
        state?.trump - state?.kamala >= 15.0
          ? "that makes it solid red state provides strong support for republicans"
          : state?.trump - state?.kamala >= 5.0
          ? "that makes it likely red state"
          : state?.trump - state?.kamala >= 1.0
          ? "that makes it lean red state"
          : "that makes it tilt red state",
        0
      );
    } else if (state?.kamala > state?.trump) {
      speechStart(
        "Harris projected to capture " +
          (state?.kamala).toFixed(1) +
          " percent of the votes share, while Trump is expected to gather " +
          (state?.trump).toFixed(1) +
          "% votes",
        0
      );
      speechStart(
        " giving her a  " +
          (state?.kamala - state?.trump > 1
            ? state?.kamala - state?.trump > 15
              ? " solid "
              : " slight "
            : " narrow ") +
          (state?.kamala - state?.trump).toFixed(1) +
          " percent lead ",
        0
      );
      speechStart(
        state?.kamala - state?.trump >= 15.0
          ? "that makes it solid blue state provide strong support for democrats"
          : state?.kamala - state?.trump >= 5.0
          ? "that makes it likely blue state"
          : state?.kamala - state?.trump >= 1.0
          ? "that makes it lean blue"
          : "that makes it tilt blue state",
        0
      );
    } else if (state?.kamala === state?.trump) {
      speechStart("It's a tie between Trump and Harris ", 0);
      speechStart(
        " Both candidates have the same votes share " +
          (state?.trump).toFixed(1),
        0
      );
    }

    // speechStart("lets move to next state.", 0, 0);
    if (index % 2 !== 0) {
      speechStart("moving to next state.", 0, 1);
    } else {
      speechStart("", 0, 1);
    }
  };

  const speechStart = (text, flag, nextState = 0) => {
    // const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    // setDisabled(false);

    // u.pitch = 2;
    // //   u.rate = 0.75;
    // u.volume = 2;

    u.addEventListener("start", () => {
      // setNextMove((current) => 0);
      // setDisabled(true);
      // if (option) {
      //   // setOption((current) => option);
      // }
    });
    u.addEventListener("end", () => {
      if (nextState) {
        // reset everything
        if (index + 1 === data.length) {
          speechStart(
            "so trump overll lead becomes" +
              // trumpNumer +
              281 +
              "electoral votes while harris stands at" +
              // kamalaNumer,
              249,
            0,
            0
          );
          speechStart(
            `With all this, our final projection leaves Donald Trump at 283 electoral votes, giving him the win if these battleground states hold as anticipated. thank you so much for tuning in! If you enjoyed this analysis, don’t forget to like, comment, and subscribe to stay updated with more election coverage as we count down to final result. See you next time!`,
            0,
            111
          );
          console.log("length wla", data.length);
          if (nextState === 111) {
            getData();
            setTrumpNumber((current) => 0);
            setKamalaNumber((current) => 0);
            index = 0;
          }
          return;
        }
        index++;
        getData();
        console.log("useefect run", index, JSON.stringify(item));
        // }
      }
    });
    // u.addEventListener("boundary", ({ charIndex, charLength }) => {
    //   // setHighlightSection({ from: charIndex, to: charIndex + charLength });
    // });
    // }
    // const handlePlay = () => {
    // const synth = window.speechSynthesis;

    // if (isPaused) {
    //   synth.resume();
    // }
    // console.log("voices", voices);
    if (voices.length > 0) {
      // u.voice = voices[82];
      // u.voice = voices[114];
      // u.voice = voices[122];
      u.voice = voices[115];
      // u.voice = voices[111];
      // u.voice = voices[123];
      // u.voice = voices[83];
    }
    synth.speak(u);
    // console.log("state:", synth.pending);
    // console.log("startng voice:", text, synth.pending);

    // setIsPaused(false);
  };
  // item = data[index];

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     // if (nextMove) {
  //     //   // setIndex((current) => {
  //     //   if (index + 1 === data.length) {
  //     //     index = 0;
  //     //     console.log("length wla", data.length);
  //     //     return;
  //     //   }
  //     //   index++;
  //     //   // setNextMove((current) => 0);
  //     //   // });
  //     //   // setStart(0);
  //     //   getData();
  //     //   console.log("useefect run", index, JSON.stringify(item));
  //     // }
  //     console.log("in interval", index);
  //   }, 3000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, [nextMove]);
  useEffect(() => {
    getData();
  }, []);
  // if (!item) {
  //   return <p>loading...</p>;
  // }
  return (
    <div className="pt-10 bg-gradient-to-r from-red-600/[1] to-blue-600/[1]">
      {/* <div className="fixed inset-0 w-full h-full bg-black/[0.9] -z-[1]"></div> */}
      {/* top bar total votes comparison */}
      <div className="flex w-full justify-center items-center pt-2 relative">
        <span className="absolute -bottom-8 bg-gradient-to-b from-yellow-200/[1] to-yellow-500/[1] bg-clip-text text-transparent text-2xl font-semibold z-20 border-t-2 border-yellow-400">
          270
        </span>
        <span className="flex justify-center">
          <img
            src="./arrow-up.png"
            className="absolute w-4 h-4 -top-2 rotate-180 left-[49.5%] filter invert"
            alt=""
          />
        </span>
        <div
          className="rounded  relative ml-0 border-2 border-white w-[1076px] flex justify-center items-center transition-all"
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
                className="-ml-[0px] px-0 absolute left-0 top-0 h-full flex items-center z-10 text-cyan-50 text-5xl font-semibold transition-all"
                style={{
                  // right: "100%",
                  // left: `${progress * 100}%`,
                  left: `${trumpNumer * 2 - (trumpNumer < 50 ? 0 : 100)}px`,
                  transition: "all 1000 ",
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
                  src={`${"./images/trump-1.png"}`}
                  alt=""
                  className="w-[55px] h-[55px] rounded object-cover border-2 "
                />
              </span>
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
                className="-ml-[0px] px-0 absolute right-0 top-0 h-full flex items-center z-10 text-cyan-50 text-5xl font-semibold transition-all"
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
                    // height: "100%",
                    // top: "0px",
                    // top: "-15px",
                  }
                }
                className="text-xl absolute -right-[60px]"
              >
                <img
                  src={`${"./images/kamala-1.png"}`}
                  alt=""
                  className="w-[55px] h-[55px] rounded object-cover border-2"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end top bar total votes comparison */}
      <div className="px-5 grid grid-cols-3 gap-2 pt-5 h-screen w-full z-[100]">
        <div>
          {item?.trump > item?.kamala ? (
            <Card
              name={"Trump"}
              img={`./images/trump.jpg`}
              votShare={showVoteShare ? item?.trump : ""}
              color={"red"}
            />
          ) : (
            <Card
              name={"Harris"}
              img={`./images/kamala.jpg`}
              votShare={showVoteShare ? item?.kamala : ""}
              color={"blue"}
            />
            // <img src={`./images/kamala.jpg`} />
          )}
        </div>
        {/* {data?.map((item?) => ( */}
        <div className="p-2 pb-0 mt-48 rounded">
          <span className="text-white font-semibold text-2xl mb-4 border-b-2 pb-3 block">
            Election 2024 (Projection)
          </span>
          <div
            className={`${
              item?.name?.length > 7 ? "text-4xl" : "text-5xl"
            } flex justify-between items-center text-white font-semibold z-10 w-full`}
          >
            <span
              className={`bg-gradient-to-b from-yellow-200/[1] to-yellow-500/[1] bg-clip-text text-transparent `}
            >
              {item?.name}
            </span>
            <p className="text-wrap text-4xl relative mr-20">
              {item?.votes}
              <i className="text-sm text-left capitalize text-wrap ml-1 absolute leading-[1.3]">
                Presidential votes
              </i>
            </p>
          </div>
          {item?.trump > item?.kamala ? (
            <>
              <ProgressBarTimer
                // item={item}
                name={item?.name}
                votes={item?.votes}
                time={item?.trump}
                diff={item?.trump - item?.kamala}
                img={"./images/trump.jpg"}
                progress={0}
                color={1}
                mode={"new"}
                setTrumpNumber={setTrumpNumber}
                setKamalaNumber={setKamalaNumber}
                setShowVoteShare={setShowVoteShare}
              />
              <ProgressBarTimer
                // item={item}
                name={item?.name}
                votes={item?.votes}
                time={item?.kamala}
                // diff={item?.kamala - item?.trump}
                img={"./images/kamala.jpg"}
                progress={0}
                color={2}
                mode={"new"}
                setTrumpNumber={setTrumpNumber}
                setKamalaNumber={setKamalaNumber}
              />
            </>
          ) : (
            <>
              <ProgressBarTimer
                name={item?.name}
                votes={item?.votes}
                time={item?.kamala}
                diff={item?.kamala - item?.trump}
                img={"./images/kamala.jpg"}
                progress={0}
                color={2}
                mode={"new"}
                setTrumpNumber={setTrumpNumber}
                setKamalaNumber={setKamalaNumber}
                setShowVoteShare={setShowVoteShare}
              />
              <ProgressBarTimer
                name={item?.name}
                votes={item?.votes}
                time={item?.trump}
                // diff={item?.trump - item?.kamala}
                img={"./images/trump.jpg"}
                progress={0}
                color={1}
                mode={"new"}
                setTrumpNumber={setTrumpNumber}
                setKamalaNumber={setKamalaNumber}
              />
            </>
          )}
        </div>
        {/* election 2020 progressbar */}
        {/* <div className="bg-gray-700 rounded flex flex-col justify-center items-center">
        <span className="text-gray-300 text-2xl font-semibold">
          Election 2020 (Previous Election)
        </span>
        <div className="w-1/2">
          {item?.prevTrump > item?.prevBiden ? (
            <>
              <ProgressBarTimer
                // item={item}
                name={item?.name}
                votes={item?.votes}
                time={item?.prevTrump}
                diff={item?.prevTrump - item?.prevBiden}
                img={"./images/trump.jpg"}
                progress={0}
                color={1}
                mode={"old"}
              />
              <ProgressBarTimer
                // item={item}
                name={item?.name}
                votes={item?.votes}
                time={item?.prevBiden}
                diff={item?.prevBiden - item?.prevTrump}
                img={"./images/biden.jpg"}
                progress={0}
                color={2}
                mode={"old"}
              />
            </>
          ) : (
            <>
              <ProgressBarTimer
                name={item?.name}
                votes={item?.votes}
                time={item?.prevBiden}
                diff={item?.prevBiden - item?.prevTrump}
                img={"./images/biden.jpg"}
                progress={0}
                color={2}
                mode={"old"}
              />
              <ProgressBarTimer
                name={item?.name}
                votes={item?.votes}
                time={item?.prevTrump}
                diff={item?.prevTrump - item?.prevBiden}
                img={"./images/trump.jpg"}
                progress={0}
                color={1}
                mode={"old"}
              />
            </>
          )}
        </div>
      </div> */}

        {/* image */}
        <div>
          {item?.kamala >= item?.trump ? (
            <Card
              name={"Trump"}
              img={`./images/trump.jpg`}
              votShare={showVoteShare ? item?.trump : ""}
              color={"red"}
            />
          ) : (
            <Card
              name={"Harris"}
              img={`./images/kamala.jpg`}
              votShare={showVoteShare ? item?.kamala : ""}
              color={"blue"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectionDesign;

const Card = ({ name, img, votShare, color }) => {
  return (
    <div className={`border-4 border-${color}-500 p-1`}>
      <img src={`${img}`} className="w-full h-full object-cover" />
      <div
        className={`bg-${color}-600 relative text-white text-6xl p-4 font-semibold`}
      >
        {name}
        <span
          className={`absolute mt-5 pt-[2px] font-bold rounded-full bg-white text-2xl ml-1 p-0 w-10 h-10 ${
            name === "Trump"
              ? "text-red-600 border-2 border-red-700"
              : "text-blue-600 border-2 border-blue-700"
          }`}
        >
          {name === "Trump" ? "R" : "D"}
        </span>
      </div>
      <div className={`bg-cyan-50 text-${color}-700 text-[6rem] p-3 font-bold`}>
        {votShare ? votShare?.toFixed(1) : "?"}
        {votShare && "%"}
      </div>
    </div>
  );
};
