import React, { useEffect, useRef, useState } from "react";
import { CountDown } from "./CountDownLevelQuiz";
// import CountDownNew from "./ProgressBarTimer";
// import { idiomsWithExpAndVisuals } from "./data/List";
import { test2 } from "./data/EnglishLevelTest";

const EnglishIdioms = ({ startedIndex = 0 }) => {
  // states
  const [data, setData] = useState();
  const [questionNo, setQuestionNo] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [reason, setReason] = useState(false);
  const [timer, setTimer] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [highlightSection, setHighlightSection] = useState({
    from: 0,
    to: 0,
  });
  const [option, setOption] = useState();

  // useRef states
  const audioRef = useRef(null);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);

  let ok = true;
  let index = startedIndex || 0;
  let totalCount = test2.length;
  let res;
  // create a reference to synth
  const synth = window.speechSynthesis;
  const voices = window.speechSynthesis.getVoices();
  const getData = async () => {
    // const res = await fetch("http://localhost:8000/test");
    res = test2[index];
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
    // speechStart(res?.idiom, 0);
    speechStart(res?.idiom.replace(/___/g, ". blank space. "), 0);
    // speechStart("option a.", 0);
    speechStart("option a.  " + res?.options.a, 0, "a");
    speechStart("option b.  " + res?.options.b, 0, "b");
    speechStart("option c.  " + res?.options.c, 0, "c");
    // speechStart("option d.  " + res?.options.d, 0, "d");
    ok = true;
    if (index + 1 === totalCount) {
      index = 0;
      setQuestionNo(0);
    } else index++;
  };

  const showTimer = () => {
    setTimer((current) => true);
    audioRef2.current?.play();
    setTimeout(showAnswer, 5000);
  };
  const showAnswer = () => {
    audioRef2.current.currentTime = 0;
    audioRef2.current.pause();
    setAnswer(true);
    audioRef.current?.play();
    setTimeout(() => {
      // let rightAnswer = ['a', 'b', 'c', 'd'].filter(
      //   (option, i) => res?.answer === res?.options[option]
      // );
      let rightAns = res.options[res.answer];
      console.log("right answer", rightAns);
      speechStart(
        "option " + res?.answer + "," + rightAns + " is correct answer",
        0
      );
    }, 1500);
    setTimeout(showReason, 8000);
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
  const resetCaptionPosition = () => {
    setHighlightSection({ from: 0, to: 0 });
  };
  const speechStart = (text, flag, option = "") => {
    // const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setDisabled(false);
    if (1) {
      u.addEventListener("start", () => {
        // setDisabled(true);
        if (text === "Next question") {
          setQuestionNo((current) => (current += 1));
        }
        if (option) {
          setOption((current) => option);
        }
      });
      u.addEventListener("end", () => {
        // setDisabled(false);
        if (option) {
          setOption((current) => 0);
        }
        resetCaptionPosition();
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
    // const voices = window.speechSynthesis.getVoices();
    // console.log("voices", voices);
    if (voices.length > 0) {
      // u.voice = voices[123];
      // u.voice = voices[124];
      u.voice = voices[105];
      // u.voice = voices[114];  // perfect child voice
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
    // from-violet-200 to-pink-200   previous bg color
    <div
      className={`flex justify-center items-start pt-16 w-full h-screen ${
        questionNo > 10
          ? questionNo > 20
            ? "bg-gradient-to-b from-red-100 to-red-200"
            : "bg-gradient-to-b from-orange-100 to-orange-200"
          : "bg-gradient-to-b from-cyan-300 to-cyan-200"
      } border-8 border-white rounded`}
    >
      {/* <p className="text-red-600">Total: {test2.length}</p> */}
      <div className="mx-[250px] rounded flex flex-col gap-4 w-full justify-center items-center">
        <div className="flex items-center !w-full justify-between p-2 text-gray-700 text-lg tracking-wide text-wrap border border-teal-900 rounded">
          <span className="text-sm">
            {questionNo}/{totalCount}
          </span>
          <span className="text-gray-700 text-xl tracking-wide text-wrap flex-1">
            {questionNo > 10
              ? questionNo > 20
                ? "C1-C2 (Advanced) English Level Test"
                : "B1-B2 (Intermediate) English Level Test"
              : "A1-A2 (Beginner) English Level Test"}
          </span>
          {/* timer */}
          <div className="text-sm relative flex">
            {timer && (
              // <div className="absolute top-[10px]">
              <div className="flex-1 absolute right-0 -top-5">
                <CountDown initMinute={0} initSeconds={8} time={5} />
              </div>
            )}
          </div>
        </div>

        {/* Question */}
        <div className="flex-1 flex rounded text-gray-700 text-3xl mb-4 mt-6 w-full">
          {/* <span className="px-4 text-4xl ml-1 border border-teal-900 py-4 rounded-l text-gray-700 flex  uppercase">
            Q
          </span> */}
          <div
            className={`${
              data?.idiom.length > 42 ? "!text-2xl" : ""
            } px-6 flex-1 py-4 rounded-r capitalize`}
          >
            {/* {data?.idiom} */}
            {data?.idiomUsed ? (
              <div className="text-gray-700">
                {data?.idiom.substring(0, data?.idiom.indexOf(data?.idiomUsed))}
                <span className="bg-gradient-to-b from-orange-400 to-cyan-50 bg-clip-text text-transparent text-4xl font-extrabold">
                  {data?.idiomUsed}
                </span>
                {data?.idiom.substring(
                  data?.idiom.indexOf(data?.idiomUsed) + data?.idiomUsed?.length
                )}
              </div>
            ) : (
              data?.idiom
            )}
          </div>
        </div>
        <div
          className={`flex-1 flex justify-between items-center gap-3 w-full`}
        >
          {/* Options */}
          <div
            className={`flex flex-col gap-3 justify-between ${
              reason ? "w-[70%] text-lg" : "w-full text-xl"
            }  mt-0`}
          >
            {/* option A */}
            <div
              className={`flex-1  flex items-center text-gray-700 font-semibold `}
            >
              <span className="px-4 ml-1 border border-teal-900 py-3 rounded-l text-gray-700 flex items-center uppercase">
                a
              </span>
              <p
                className={`flex-1 px-6 border border-teal-900 trans-short py-3 ${
                  answer
                    ? data?.answer === "a"
                      ? "!bg-green-700 text-gray-100 "
                      : "!bg-red-700 text-gray-100 "
                    : ""
                }  ${
                  option === "a" ? "!scale-[1.03]   !bg-teal-500" : " scale-100"
                } rounded-r`}
              >
                {data?.options?.a}
              </p>
            </div>
            {/* option B */}
            <div
              className="flex-1   flex items-center justify-end
              rounded text-gray-700 font-semibold"
            >
              <span className="px-4 ml-1 border border-teal-900 py-3 rounded-l text-gray-700 flex items-center uppercase">
                b
              </span>
              <p
                className={`flex-1 py-3 px-6 rounded-r border border-teal-900 trans-short font-semibold ${
                  answer
                    ? data?.answer === "b"
                      ? "!bg-green-700 text-gray-100 "
                      : "!bg-red-700 text-gray-100 "
                    : ""
                } ${option === "b" ? " scale-[1.03]   !bg-teal-500 " : ""}`}
              >
                {data?.options?.b}
              </p>
            </div>
            {/* option C */}
            <div className="flex-1  flex items-center rounded text-gray-700 font-semibold">
              <span className="px-4 ml-1 border border-teal-900 py-3 rounded-l text-gray-700 flex items-center uppercase">
                c
              </span>
              <p
                className={`flex-1 py-3 px-6 rounded-r border border-teal-900 trans-short font-semibold ${
                  answer
                    ? data?.answer === "c"
                      ? "!bg-green-700 text-gray-100 "
                      : "!bg-red-700 text-gray-100 "
                    : ""
                } ${option === "c" ? " scale-[1.03]   !bg-teal-500 " : " "}`}
              >
                {data?.options.c}
              </p>
            </div>

            {/* option D */}
            {/* <div className="flex-1  flex items-center justify-end  rounded text-gray-700 font-semibold">
            <span className="px-4 ml-1 border border-teal-900 py-3 rounded-l text-gray-700 flex items-center uppercase">
            d
            </span>
            <p
            className={`flex-1 py-3 px-6 rounded-r border border-teal-900 trans-shorttext-gray-700 text-2xl font-semibold ${
              answer
              ? data?.answer === "d"
              ? "!bg-green-700 text-gray-100 "
              : "!bg-red-700 text-gray-100 "
              : ""
              } ${option === "d" ? " scale-[1.03]   !bg-teal-500 " : " "}`}
              >
              {data?.options?.d}
              </p>
              </div> */}
          </div>
          {/*  Reason */}
          <div
            className={`transition-all w-[30%] ${
              reason ? "relative opacity-100" : "absolute opacity-0"
            }`}
          >
            {/* {reason && ( */}
            <p
              //   onClick={() => playReason(data)}
              className="border border-teal-600 p-2 bg-cyan-50 text-teal-700 text-wrap text-xl 
               rounded"
            >
              {/* {data?.explanation} */}
              <HighlightedText
                text={data?.explanation || data?.reason}
                {...highlightSection}
                disabled={disabled}
              />
            </p>
            {/* )} */}
          </div>
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
          <source src="clock-1.aac" type="audio/mpeg" />
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

export default EnglishIdioms;

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
          highlight.length === 0 ? "bg-transparent" : "bg-teal-500 text-cyan-50"
        }  rounded py-1 px-[0px]`}
      >
        {highlight}
        {/* {highlight.length} */}
      </span>
      {finish}
    </>
  );
};
