import React, { useEffect, useRef, useState } from "react";
import { CountDown } from "./CounDown";
import CountDownNew from "./ProgressBarTimer";
// import { idiomsWithExpAndVisuals } from "./data/List";
import { listAll12TensesMcqs, listAll12TensesMixMcqs } from "./data/Tenses";

const EnglishTenses = () => {
  // states
  const [data, setData] = useState();
  const [answer, setAnswer] = useState(false);
  const [option, setOption] = useState();
  const [reason, setReason] = useState(false);
  const [timer, setTimer] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [highlightSection, setHighlightSection] = useState({
    from: 0,
    to: 0,
  });
  const [isComplete, setIsComplete] = useState(false);

  // useRef states
  const audioRef = useRef(null);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);

  let ok = true;
  let tensesArray = [
    "simplePresent",
    "presentContinuous",
    "presentPerfect",
    "presentPerfectContinuous",
  ];
  // let TenseIndex = 0;
  // let current_tense = tensesArray[TenseIndex];
  let QuestionIndex = 0;

  let totalCount = listAll12TensesMixMcqs?.length;
  console.log("total count:", totalCount);
  let totalTensesCount = 12;
  let res;
  // create a reference to synth
  const synth = window.speechSynthesis;
  const voices = window.speechSynthesis.getVoices();

  const getData = async () => {
    // const res = await fetch("http://localhost:8000/test");
    // res = listAll12TensesMcqs[current_tense][QuestionIndex];
    res = listAll12TensesMixMcqs[QuestionIndex];
    audioRef1.current?.play();
    speechStart("Next question", 0);
    // const dataArray = await res.json();
    setAnswer(false);
    setTimer(false);
    setReason(false);
    console.log(res);
    setData((current) => {
      return res;
    });

    speechStart(res?.question.replace(/______/g, ". blank space. "), 0);
    // speechStart("option a.", 0);
    speechStart("option a.  " + res?.options.a, 0, "a");
    speechStart("option b.  " + res?.options.b, 0, "b");
    speechStart("option c.  " + res?.options.c, 0, "c");
    speechStart("option d.  " + res?.options.d, 0, "d");
    ok = true;

    // if (TenseIndex + 1 === totalTensesCount) {
    //   TenseIndex = 0;
    //   QuestionIndex = 1;
    //   return
    // }
    if (QuestionIndex + 1 === totalCount) {
      // TenseIndex++;
      // QuestionIndex = 1;
      // current_tense = tensesArray[TenseIndex];
      QuestionIndex = 0;
      // totalCount = listAll12TensesMcqs[current_tense]?.length;
    } else QuestionIndex++;
  };

  const showTimer = () => {
    // TURN ON TIMER
    setTimer((current) => true);
    // RESET OPTION
    setOption((current) => "E");
    audioRef2.current?.play();
    setTimeout(showAnswer, 5000);
  };
  const showAnswer = () => {
    audioRef2.current.currentTime = 0;
    audioRef2.current?.pause();
    setTimer((current) => false);
    // setTimer(false);
    setAnswer(true);
    audioRef.current?.play();
    setTimeout(() => {
      speechStart(
        `option ${res?.answer}. 
          ${res.options[res?.answer]}` + " is correct answer",
        0
      );
    }, 1500);
    setTimeout(showReason, 7000);
  };
  const showReason = () => {
    audioRef3.current?.play();
    setReason(true);
    playReason(data);
    setTimeout(getData, 15000);
    setHighlightSection({
      from: 0,
      to: 0,
    });
  };
  const playReason = () => {
    setDisabled(false);
    // speechStart(res?.answer + " is correct answer because ", 0);
    speechStart(res?.explanation || res.reason, 1);
  };

  const speechStart = (text, flag, option = 0) => {
    // const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setDisabled(false);

    if (1) {
      u.addEventListener("start", () => {
        setDisabled(true);
        if (option) {
          setOption((current) => option);
        }
      });
      u.addEventListener("end", () => {
        setDisabled(false);
        if (option) {
          setOption((current) => 0);
        }
        // ok = false;
      });
      u.addEventListener("boundary", ({ charIndex, charLength }) => {
        setHighlightSection({ from: charIndex, to: charIndex + charLength });
      });
    }
    // const handlePlay = () => {
    // const synth = window.speechSynthesis;

    // if (isPaused) {
    //   synth.resume();
    // }
    // console.log("voices", voices);
    if (voices.length > 0) {
      // u.voice = voices[82];
      u.voice = voices[114];
    }
    synth.speak(u);
    console.log("state:", synth.pending);
    console.log("startng voice:", text, synth.pending);

    // setIsPaused(false);
  };

  useEffect(() => {
    // const intervalId = setInterval(getData, 32000);
    // // const intervalId1 = setInterval(showAnswer, 20000);
    // return () => {
    //   clearInterval(intervalId);
    //   //   clearInterval(intervalId1);
    // };
    // --------------------
    // showTimer();

    const intervalId = setInterval(() => {
      if (!synth.speaking && ok) {
        console.log("timer value:", timer);
        // if (!isComplete) {
        // const intervalId1 = setTimeout(showTimer, 1000);
        showTimer();
        // const intervalId1 = setTimeout(showAnswer, 10000);
        // const intervalId2 = setTimeout(showReason, 13000);
        // const intervalId3 = setTimeout(getData, 32000);
        // const intervalId2 = setTimeout(showAnswer, 13000);
        // setIsComplete((current) => true);
        ok = false;
        // const intervalId4 = setTimeout(getData, 25000);
        // }
        console.log("setinterval inside run:");
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
      // clearInterval(intervalId1);
      // clearInterval(intervalId2);
      // clearInterval(intervalId3);
      // clearInterval(intervalId4);
    };
  }, []);
  useEffect(() => {
    getData();
  }, []);

  //   const { question, a, b, c, d } = data;

  if (!data) {
    return (
      <div className="flex justify-center items-center mt-[50px] w-full h-[500px]">
        <div className="w-full h-full flex justify-center items-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-start pt-[30px] w-full h-[600px] bg-white border-8 border-violet-500 rounded">
      {/* <p className="text-red-600">Total: {idiomsWithExample.length}</p> */}
      <div className="mx-[250px] rounded flex flex-col gap-4 w-full justify-center items-center">
        <span className="px-2 py-0 bg-gradient-to-b from-violet-700 to-purple-400 bg-clip-text text-transparent text-4xl font-semibold text-wrap mb-3 capitalize">
          {/* Mix English Tenses -{listAll12TensesMcqs.simplePresent[0].type} */}
          Mix English Tenses
        </span>
        {/* timer */}
        {timer && (
          // <div className="absolute top-[10px]">
          <div className="w-[400px] absolute top-[30px] -right-20">
            <CountDown initMinute={0} initSeconds={7} time={5} />
          </div>
        )}
        {/* img */}
        {/* <img src={data?.visualAid} alt="" className="w-6 h-6" /> */}
        {/* {idiomsWithExpAndVisuals200.length} */}
        {/* Question */}
        <div className="flex-1 flex  rounded text-white text-2xl font-semibold mt-0 mb-4 w-full">
          <span className="px-4 text-xl ml-1 bg-gradient-to-r from-violet-700 to-purple-700 py-4 rounded-l text-gray-100 flex  uppercase">
            Q
          </span>
          <p
            className={`${
              data?.length > 50 ? "text-lg " : ""
            } px-6 flex-1  trans py-4 rounded-r bg-gradient-to-r from-violet-500 to-purple-500`}
          >
            {/* {data?.question} */}
            {data?.question.includes(":") ? (
              <>
                {data?.question.split(":")[0]}
                <br />
                {data?.question.split(":")[1]}
              </>
            ) : (
              data?.question
            )}
            {/* <HighlightedText
              text={data.idiom}
              {...highlightSection}
              disabled={disabled}
            /> */}
            {/* <TextToSpeech text={data?.question} /> */}
          </p>
        </div>
        {/* Options */}
        <div className="flex flex-col gap-3 justify-between w-full text-nowrap mt-0">
          {/* <div className="flex justify-between items-center w-full gap-4"> */}
          {/* option A */}
          <div
            className={`flex-1  flex items-center text-white text-lg font-semibold `}
          >
            <span className="px-4 text-xl ml-1 bg-gradient-to-r from-violet-700 to-purple-700 py-3 rounded-l text-gray-100 flex items-center uppercase">
              a{/* {option} */}
            </span>
            <p
              className={`flex-1 px-6 text-xl  trans py-3 bg-gradient-to-r from-violet-500 to-purple-500 ${
                answer
                  ? data?.answer === "a"
                    ? "!bg-gradient-to-b !from-green-700 !to-green-500"
                    : "!bg-gradient-to-b !from-red-700 !to-red-600"
                  : ""
              }   ${
                option === "a"
                  ? " bg-gradient-to-r from-violet-900 to-purple-900 "
                  : " "
              } rounded-r`}
            >
              {data?.options?.a}
            </p>
          </div>
          {/* option B */}
          <div
            className="flex-1   flex items-center justify-end
              rounded text-white text-lg font-semibold"
          >
            <span className="px-4 text-xl ml-1 bg-gradient-to-r from-violet-700 to-purple-700 py-3 rounded-l text-gray-100 flex items-center uppercase">
              b
            </span>
            <p
              className={`flex-1 py-3 px-6 rounded-r text-white text-xl font-semibold bg-gradient-to-r from-violet-500 to-purple-500 ${
                answer
                  ? data?.answer === "b"
                    ? "!bg-gradient-to-b !from-green-700 !to-green-500 "
                    : "!bg-gradient-to-b !from-red-700 !to-red-600"
                  : ""
              }  ${
                option === "b"
                  ? " bg-gradient-to-r from-violet-900 to-purple-900 "
                  : "  "
              }`}
            >
              {data?.options?.b}
            </p>
          </div>
          {/* </div> */}
          {/* <div className="flex justify-between items-center w-full gap-2"> */}
          {/* option C */}
          <div className="flex-1  flex items-center rounded text-white text-lg font-semibold">
            <span className="px-4 text-xl ml-1 bg-gradient-to-r from-violet-700 to-purple-700 py-3 rounded-l text-gray-100 flex items-center uppercase">
              c
            </span>
            <p
              className={`flex-1 py-3 px-6 rounded-r  trans text-white text-xl font-semibold bg-gradient-to-r from-violet-500 to-purple-500 ${
                answer
                  ? data?.answer === "c"
                    ? "!bg-gradient-to-b !from-green-700 !to-green-500 "
                    : "!bg-gradient-to-b !from-red-700 !to-red-600"
                  : ""
              }  ${
                option === "c"
                  ? " bg-gradient-to-r from-violet-900 to-purple-900 "
                  : "  "
              }`}
            >
              {data?.options.c}
            </p>
          </div>

          {/* option D */}
          <div className="flex-1  flex items-center justify-end  rounded text-white text-lg font-semibold">
            <span className="px-4 text-xl ml-1 bg-gradient-to-r from-violet-700 to-purple-700 py-3 rounded-l text-gray-100 flex items-center uppercase">
              d
            </span>
            <p
              className={`flex-1 py-3 px-6 rounded-r  trans text-white text-xl font-semibold bg-gradient-to-r from-violet-500 to-purple-500 ${
                answer
                  ? data?.answer === "d"
                    ? "!bg-gradient-to-b !from-green-700 !to-green-500 "
                    : "!bg-gradient-to-b !from-red-700 !to-red-600"
                  : ""
              } ${
                option === "d"
                  ? " bg-gradient-to-r from-violet-900 to-purple-900 "
                  : "  "
              }`}
            >
              {data?.options?.d}
            </p>
          </div>
          {/* </div> */}
          {/* <p>{data?.answer}</p> */}
          {1 && (
            <p
              //   onClick={() => playReason(data)}
              className={`bg-green-700 p-4  text-white text-wrap text-lg font-medium w-[700px] rounded absolute bottom-4  mx-10 transition-all ${
                reason ? "translate-x-0" : "-translate-x-[200%]"
              } `}
            >
              {/* {data?.explanation} */}
              <HighlightedText
                text={data?.explanation || data?.reason || ""}
                {...highlightSection}
                disabled={disabled}
              />
            </p>
          )}
        </div>
      </div>
      {/* {audios} */}
      <>
        <audio ref={audioRef}>
          <source src="Ding.mp3" type="audio/mpeg" />
          <p>Your browser does not support the audio element.</p>
        </audio>

        <audio ref={audioRef1}>
          <source src="Swoosh.mp3" type="audio/mpeg" />
          <p>Your browser does not support the audio element.</p>
        </audio>

        <audio ref={audioRef2}>
          <source src="Clock.mp3" type="audio/mpeg" />
          <p>Your browser does not support the audio element.</p>
        </audio>

        <audio ref={audioRef3}>
          <source src="Pop.mp3" type="audio/mpeg" />
          <p>Your browser does not support the audio element.</p>
        </audio>
      </>
      {/* )} */}
    </div>
  );
};

export default EnglishTenses;

const splitText = (text, from, to) => [
  text.slice(0, from),
  text.slice(from, to),
  text.slice(to),
];

const HighlightedText = ({ text, from, to, disabled }) => {
  const [start, highlight, finish] = splitText(text, from, to);
  return (
    <>
      {start}
      <span
        className={`${
          highlight.length === 0
            ? "bg-transparent"
            : "bg-gradient-to-r from-cyan-50 to-cyan-100 text-green-700"
        }  rounded py-1 px-[0px]`}
      >
        {highlight}
        {/* {highlight.length} */}
      </span>
      {finish}
    </>
  );
};
