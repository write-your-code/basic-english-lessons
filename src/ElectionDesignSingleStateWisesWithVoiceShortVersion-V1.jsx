import React, { useEffect, useState } from "react";
import ProgressBarTimer from "./ProgressBarTimerForElectionStateWiseWithVoiceShortVersion-V1";
import ProgressBarTimer1 from "./ProgressBarTimerForElectionPercentageCountDown";

// import { dataCompleteWithSummary } from "./data/ElectionData";
import { dataCompleteWithElectionStatsWithVoteCount } from "./data/ElectionData";

const ElectionDesign = ({ startedIndex = 0 }) => {
  // const [start, setStart] = useState(0);
  const [item, setItem] = useState();
  const [showVoteShare, setShowVoteShare] = useState(0);
  const [data, setData] = useState(dataCompleteWithElectionStatsWithVoteCount);
  const [trumpNumer, setTrumpNumber] = useState(0);
  const [kamalaNumer, setKamalaNumber] = useState(0);
  // let data = withJudePredicted;

  const synth = window.speechSynthesis;
  const voices = window.speechSynthesis.getVoices();

  let index = startedIndex || 0;
  let dataArray = data;
  let state;
  const getData = async () => {
    setItem((current) => dataCompleteWithElectionStatsWithVoteCount[index]);
    setShowVoteShare((current) => 0);
    state = dataArray[index];
    // setStart((current) => 1);
    console.log("in getdata", JSON.stringify(state));
    // speechStart("Next State", 0);
    console.log("index is:", index);
    // if (index === 0) {
    //   speechStart("our first state ", 0);
    // }
    // else {
    //   speechStart("next state", 0, 0);
    // }
    // if (index % 2 !== 0) {
    //   speechStart(
    //     "our next state " +
    //       state.name +
    //       "that holds " +
    //       state.votes +
    //       "presidential votes",
    //     0
    //   );
    // } else {
    //   if (index === 0) {
    //     speechStart(
    //       "starts with " +
    //         state.name +
    //         "that holds " +
    //         state.votes +
    //         "presidential votes",
    //       0
    //     );
    //   } else
    //     speechStart(
    //       "our next state " +
    //         state.name +
    //         " holds " +
    //         state.votes +
    //         " presidential votes",
    //       0
    //     );
    //   // speechStart(state?.summary, 0, 0);
    // }
    speechStart("" + state.name, 0);
    // speechStart(state?.summary, 0, 0);

    // if (state?.trump > state?.kamala) {
    //   speechStart(
    //     (index % 2 !== 0
    //       ? index > 5
    //         ? "trump's received "
    //         : "trump's holds "
    //       : "trump gathered ") +
    //       (state?.trump).toFixed(1) +
    //       "% votes" +
    //       " while Harris received " +
    //       (state?.kamala).toFixed(1) +
    //       "percent votes",
    //     0
    //   );
    //   speechStart(
    //     "here Trump holds a " +
    //       ((state?.trump - state?.kamala).toFixed(1) > 2.0
    //         ? state?.trump - state?.kamala > 15
    //           ? " solid "
    //           : " comfortable "
    //         : " narrow ") +
    //       " lead of" +
    //       (state?.trump - state?.kamala).toFixed(1) +
    //       " percent ",
    //     0
    //   );
    //   // speechStart(
    //   //   state?.trump - state?.kamala >= 15.0
    //   //     ? "that makes it solid red state provides strong support for republicans"
    //   //     : state?.trump - state?.kamala >= 5.0
    //   //     ? "that makes it likely red state"
    //   //     : state?.trump - state?.kamala >= 1.0
    //   //     ? "that makes it lean red state"
    //   //     : "that makes it tilt red state",
    //   //   0
    //   // );
    // } else if (state?.kamala > state?.trump) {
    //   speechStart(
    //     "Harris captured " +
    //       (state?.kamala).toFixed(1) +
    //       " percent of the votes, while Trump received " +
    //       (state?.trump).toFixed(1) +
    //       "% votes",
    //     0
    //   );
    //   speechStart(
    //     " giving her a  " +
    //       (state?.kamala - state?.trump > 1
    //         ? state?.kamala - state?.trump > 15
    //           ? " solid "
    //           : " comfortable "
    //         : " narrow ") +
    //       (state?.kamala - state?.trump).toFixed(1) +
    //       " percent lead ",
    //     0
    //   );
    //   // speechStart(
    //   //   state?.kamala - state?.trump >= 15.0
    //   //     ? "that makes it solid blue state provide strong support for democrats"
    //   //     : state?.kamala - state?.trump >= 5.0
    //   //     ? "that makes it likely blue state"
    //   //     : state?.kamala - state?.trump >= 1.0
    //   //     ? "that makes it lean blue"
    //   //     : "that makes it tilt blue state",
    //   //   0
    //   // );
    // } else if (state?.kamala === state?.trump) {
    //   speechStart("It's a tie between Trump and Harris ", 0);
    //   speechStart(
    //     " Both candidates have the same votes share " +
    //       (state?.trump).toFixed(1),
    //     0
    //   );
    // }
    // speechStart(state?.summary, 0, 0);
    // speechStart("lets move to next state.", 0, 0);
    setTimeout(() => {
      if (index === 0) {
        speechStart("", 0, 1);
      } else {
        speechStart("", 0, 1);
      }
    }, 100);
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
          // speechStart(
          //   "so trump overll lead becomes" +
          //     // trumpNumer +
          //     312 +
          //     "electoral votes while harris stands at" +
          //     // kamalaNumer,
          //     262,
          //   0,
          //   0
          // );
          // speechStart(
          //   `With all this, our final projection leaves Donald Trump at 312 electoral votes, giving him the win if these battleground states hold as anticipated. thank you so much for tuning in! If you enjoyed this analysis, don’t forget to like, comment, and subscribe to stay updated with more election coverage as we count down to final result. See you next time!`,
          //   0,
          //   111
          // );
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
        setTimeout(() => {
          getData();
        }, 6000000);
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
      u.voice = voices[122];
      // u.voice = voices[115];
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
    <div
      className="pt-0 bg-gray-900 bg-cover bg-center"
      id="mainDiv"
      style={{ backgroundImage: "url('./images/bg-map-2.png')" }}
    >
      {/* <div className="fixed inset-0 w-full h-full bg-black/[0.9] -z-[1]"></div> */}
      {/* flag and election year */}
      <div className="flex justify-center items-center text-6xl gap-6 font-bold   bg-gray-100 p-1">
        <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          US ELECTION
        </span>
        <img src="./images/usa flag.png" alt="" className="w-20 rounded" />
        <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          2024
        </span>
      </div>
      {/* flag and election year end*/}
      {/* state flag and electoral votes and state name */}
      <div
        className={`${
          item?.name?.length > 7 ? "text-3xl" : "text-3xl"
        } flex justify-center items-center gap-5 text-white font-semibold z-10 w-full border-white rounded-br rounded-bl p-1 bg-gradient-to-r from-red-500 to-blue-500`}
      >
        <div className="text-nowrap flex items-center gap-2">
          <img
            src={`./flags/Flag_of_${item?.name.replace(/ /g, "_")}.svg`}
            alt=""
            className="w-[5rem] object-contain border rounded"
          />
          <span
            className={`uppercase border rounded py-2 px-4 ${
              item?.trump > item?.kamala
                ? "border-white bg-red-600"
                : "border-white bg-blue-600"
            }`}
          >
            {item?.name}
          </span>
        </div>
        <p className="text-wrap text-6xl relative mr-20">
          {item?.votes}
          <i className="text-[1.2rem] text-left capitalize text-wrap ml-1 absolute top-2 leading-[1.15]">
            Electoral Votes
          </i>
        </p>
      </div>
      {/* state flag and electoral votes and state name end*/}

      <div className="px-10 flex justify-between gap-0 pt-8 h-screen w-full z-[100]">
        <div>
          {item?.trump > item?.kamala ? (
            <Card
              name={"Donald Trump"}
              img={`./trump-4.png`}
              // votShare={showVoteShare ? item?.trump : ""}
              votShare={item?.trump}
              color={"red"}
              votes={item?.trumpvotes}
            />
          ) : (
            <Card
              name={"Kamala Harris"}
              img={`./kamala-4.png`}
              // votShare={showVoteShare ? item?.kamala : ""}
              votShare={item?.kamala}
              color={"blue"}
              votes={item?.kamalavotes}
            />
            // <img src={`./images/kamala.jpg`} />
          )}
        </div>
        {/* {data?.map((item?) => ( */}
        <div className="p-1 pb-0 mt-0 rounded">
          {/* test */}
          {/* <div className={`text-white text-[1.5rem] px-1 py-4 font-bold flex flex-col gap-2`}>
            <p className="text-6xl">
              <ProgressBarTimer time={Number(312)} orignalformat={312} />
            </p>
            <p className="text-5xl">
              <ProgressBarTimer1
                // time={item?.trumpotes}
                time={49.90}
                // color={color === "red" ? 1 : 0}
              />
            </p>
            <p className="text-4xl">
              <ProgressBarTimer
                time={Number(77303573)}
                orignalformat={"77,303,573"}
              />
            </p>
          </div> */}
          {/* test */}
          <span className="text-white font-semibold text-center flex justify-center">
            <img
              src={`./maps/${item?.name?.replace(/ /g, "_")}-map.png`}
              // src={`./maps/alaska 24.png`}
              alt=""
              className="w-[100%] object-contain"
            />
          </span>
          {/* <div
            className={`${
              item?.name?.length > 7 ? "text-4xl" : "text-5xl"
            } flex justify-center items-center gap-5 text-white font-semibold z-10 w-full  border border-white rounded p-2 bg-gradient-to-r from-red-500 to-blue-500`}
          >
            <div className="text-nowrap flex items-center gap-2">
              <img
                src="./flags/arkansas flag.png"
                alt=""
                className="w-20 object-contain border rounded"
              />
              <span className={`uppercase `}>{item?.name}</span>
            </div>
            <p className="text-wrap text-5xl relative mr-20">
              {item?.votes}
              <i className="text-sm text-left capitalize text-wrap ml-1 absolute top-2 leading-[1.3]">
                Electoral Votes
              </i>
            </p>
          </div> */}
          {/* <div className="ml-16 pt-4">
            {item?.trump > item?.kamala ? (
              <>
                <ProgressBarTimer
                  // item={item}
                  name={item?.name}
                  votes={item?.votes}
                  time={item?.trump}
                  diff={item?.trump - item?.kamala}
                  img={"./images/trump-1.png"}
                  progress={0}
                  color={1}
                  mode={"new"}
                  votesCount={item?.votesCount}
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
                  img={"./images/kamala-1.png"}
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
                  img={"./images/kamala-1.png"}
                  progress={0}
                  color={2}
                  mode={"new"}
                  votesCount={item?.votesCount}
                  setTrumpNumber={setTrumpNumber}
                  setKamalaNumber={setKamalaNumber}
                  setShowVoteShare={setShowVoteShare}
                />
                <ProgressBarTimer
                  name={item?.name}
                  votes={item?.votes}
                  time={item?.trump}
                  // diff={item?.trump - item?.kamala}
                  img={"./images/trump-1.png"}
                  progress={0}
                  color={1}
                  mode={"new"}
                  setTrumpNumber={setTrumpNumber}
                  setKamalaNumber={setKamalaNumber}
                />
              </>
            )}
          </div> */}
        </div>

        {/* image */}
        <div>
          {item?.kamala >= item?.trump ? (
            <Card
              name={"Donald Trump"}
              img={`./trump-4.png`}
              // votShare={showVoteShare ? item?.trump : ""}
              votShare={item?.trump}
              color={"red"}
              votes={item?.trumpvotes}
            />
          ) : (
            <Card
              name={"Kamala Harris"}
              img={`./kamala-4.png`}
              // votShare={showVoteShare ? item?.kamala : ""}
              votShare={item?.kamala}
              color={"blue"}
              votes={item?.kamalavotes}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ElectionDesign;

const Card = ({ name, img, votShare, color, votes }) => {
  return (
    <div
      className={`border-4 border-${
        color === "red" ? "red" : "blue"
      }-700 p-0 rounded w-[300px]`}
    >
      <img src={`${img}`} className="w-full h-full object-contain" />
      <div
        className={`bg-${color}-600 relative text-white text-3xl p-4 font-semibold`}
      >
        {name}
        <div className="flex justify-center items-center">
          <span
            className={`absolute pt-[2px] -top-[25px] font-bold rounded-full bg-white text-2xl ml-1 p-0 w-10 h-10 ${
              name === "Donald Trump"
                ? "text-red-600 border-2 border-red-700"
                : "text-blue-600 border-2 border-blue-700"
            }`}
          >
            {name === "Donald Trump" ? "R" : "D"}
          </span>
        </div>
      </div>
      {/* <div className={`bg-cyan-50 text-${color}-700 text-[3rem] p-1 font-bold`}>
        {votShare ? votShare?.toFixed(2) : "?"}
        {votShare && "%"}
      </div> */}
      {/* <div className={`bg-${color}-500 text-white text-[1.5rem] p-1 font-bold`}> */}
      <div className={`text-white text-[1.5rem] px-1 py-4 font-bold`}>
        {/* {(votes && votes) || "..."} */}
        {/* {votShare ? votShare?.toFixed(1) : "?"} */}
        {/* <span className="text-sm uppercase">{votShare && " votes"}</span> */}

        <ProgressBarTimer
          time={Number(votes?.replace(/,/g, ""))}
          orignalformat={votes}
        />
        {/* <ProgressBarTimer
          time={Number(312)}
          orignalformat={312}
        /> */}
      </div>
      <div
        className={`bg-cyan-50 text-${color}-700 text-[2rem] p-[0px] font-bold`}
      >
        {/* {votShare ? votShare?.toFixed(2) : "?"}
        {votShare && "%"} */}
        <div className="text-red-500">
          <ProgressBarTimer1 time={votShare} color={color === "red" ? 1 : 0} />
        </div>
      </div>
    </div>
  );
};
