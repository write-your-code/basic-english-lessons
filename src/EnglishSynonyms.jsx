import React, { useEffect, useRef, useState } from "react";
import { CountDown } from "./CounDown";
import CountDownNew from "./ProgressBarTimer";
// import { idiomsWithExpAndVisuals } from "./data/List";
import { words } from "./data/Synonyms";

const EnglishCollocations = () => {
  // states
  const [data, setData] = useState();
  const [exp, setExp] = useState(false);
  const [origin, setOrigin] = useState(false);
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
  let index = 67;
  let totalCount = words.length;
  let res;
  // create a reference to synth
  const synth = window.speechSynthesis;
  const voices = window.speechSynthesis.getVoices();

  const getData = async () => {
    // const res = await fetch("http://localhost:8000/test");
    res = words[index];
    audioRef1.current?.play();
    // speechStart("Next word", 0);
    // const dataArray = await res.json();
    setExp(false);
    setOrigin(false);
    // setTimer(false);
    setReason(false);
    console.log(res);
    setData((current) => {
      return res;
    });
    speechStart(res?.word, 1);
    speechStart(res?.word, 2);
    // speechStart("option a.", 0);
    if (res?.meaning) {
      speechStart("meaning.      " + res?.meaning, 4);
    }
    speechStart("similar words are. ");
    speechStart(res?.synonym1 || res?.meaning1, 5);
    speechStart(res?.synonym1 || res?.meaning1, 2);
    speechStart(res?.synonym2 || res?.meaning2, 5);
    speechStart(res?.synonym2 || res?.meaning2, 2);
    // speechStart("lets discover its origin.  " + res?.synonym2, 5);
    speechStart("for example. ", 0);
    // setTimeout(showAnswer, 2000);
    ok = true;
    if (index + 1 === totalCount) {
      index = 0;
    } else index++;
  };

  const showTimer = () => {
    // setTimer((current) => true);
    audioRef2.current?.play();
    setTimeout(showAnswer, 8000);
  };
  const showAnswer = () => {
    setExp(true);
    audioRef.current?.play();
    setTimeout(() => {
      speechStart(res?.exp + " is correct exp", 0);
    }, 500);
    // setTimeout(showReason, 2000);
  };
  const showReason = () => {
    audioRef3.current?.play();
    setHighlightSection({
      from: 0,
      to: 0,
    });
    playReason(data);
    setReason(true);
    setTimeout(getData, 15000);
  };
  const playReason = () => {
    setDisabled(false);
    // speechStart(res?.exp + " is correct exp because ", 0);
    speechStart(res?.example, 1);
    speechStart(res?.example, 1);
  };

  const speechStart = (text, flag) => {
    // const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setDisabled(false);
    // if (flag === 3) {
    //   setTimeout(showReason, 2000);
    // }

    // u.pitch = .2;
    // if (flag === 1) {
    //   u.pitch = 0.7;
    //   u.rate = 0.75;
    //   u.volume = 1;
    // }
    if (flag === 2) {
      u.pitch = 0.7;
      u.rate = 0.6;
      u.volume = 1;
    }
    u.pitch = 0.85;
    u.rate = 0.8;
    // if (flag === 1) {
    u.addEventListener("start", () => {
      setDisabled(true);
      if (flag === 5) {
        setOrigin((current) => true);
      }
      if (flag === 4) {
        setExp(true);
      }
    });
    u.addEventListener("end", () => setDisabled(false));
    u.addEventListener("boundary", ({ charIndex, charLength }) => {
      setHighlightSection({ from: charIndex, to: charIndex + charLength });
    });
    // }
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
    // const intervalId1 = setInterval(showAnswer, 20000);
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
        showReason();
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
    }, 1000);
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
      <div className="flex justify-center items-center mt-[50px] w-full h-screen">
        <div className="w-full h-full flex justify-center items-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-600 w-full h-full py-2 border-[15px] border-cyan-100 rounded">
      {/* <div className="bg-black w-full h-full py-2 rounded bg-gradient-to-r from-amber-200 to-yellow-500"> */}
      <div className="flex justify-center items-start mt-[30px] w-full h-[520px]">
        {/* <p className="text-red-600">Total: {words.length}</p> */}
        {/* {timer && (
        // <div className="absolute top-[10px]">
        <div className="absolute top-[30px] w-[660px]">
          <CountDownNew initMinute={0} initSeconds={7} />
        </div>
      )} */}
        <div className="mx-[250px] flex flex-col gap-4 w-full justify-center items-center">
          {/* Collocation */}
          <div className="flex-1 flex-col  rounded text-white text-2xl justify-center items-center font-semibold mb-4 w-full">
            {/* <span className="px-4 text-lg ml-[2pxs] py-4 rounded-l bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent uppercase">
              Collocation
            </span> */}
            <p
              className={`px-2 flex-1 bg-gradient-to-b from-cyan-50 to-slate-300 bg-clip-text text-transparent py-2 rounded text-center capitalize ${
                data.word.length > 20 ? "text-4xl" : "text-6xl"
              }`}
            >
              {data?.word}
              {/* <HighlightedText
              text={data.idiom}
              {...highlightSection}
              disabled={disabled}
            /> */}
              {/* <TextToSpeech text={data?.question} /> */}
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-between w-full mt-1">
            {/* Explanation */}
            {data?.meaning && exp && (
              <div className="flex-1 flex flex-col items-start justify-start rounded text-white text-lg font-semibold">
                <span className="px-2 text-xl py-1 bg-gradient-to-r from-cyan-50 to-slate-300 bg-clip-text text-transparent uppercase">
                  Meaning:
                </span>
                <p
                  className={`flex-1 py-4 px-6 rounded text-red-700 bg-gradient-to-r from-cyan-50 to-slate-300  trans text-xl font-semibold text-wrap capitalize
                     ${
                       timer
                         ? data?.meaning === "c"
                           ? "!bg-green-700 text-white "
                           : "!bg-red-700"
                         : ""
                     }`}
                >
                  {data?.meaning}
                </p>
              </div>
            )}
            {/* Origin */}
            {origin && (
              <div className="flex flex-col">
                <span className="px-2 text-xl py-2 rounded bg-gradient-to-r from-cyan-50 to-slate-300 bg-clip-text text-transparent flex items-star uppercase font-semibold">
                  synonyms:
                </span>

                <div className="flex gap-2 capitalize">
                  <div className="flex flex-col items-start justify-center rounded text-white text-lg font-semibold">
                    <p
                      className={`py-4 px-6 rounded text-red-700 bg-gradient-to-r from-cyan-50 to-slate-300  trans text-2xl font-bold text-wrap `}
                    >
                      {data?.synonym1 || data?.meaning1}
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-center rounded text-white text-lg font-semibold">
                    <p
                      className={`py-4 px-6 rounded text-red-700 bg-gradient-to-r from-cyan-50 to-slate-300  trans text-2xl font-semibold text-wrap `}
                    >
                      {data?.synonym2 || data?.meaning2}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* example */}
            {reason && (
              <div className="text-left mt-6">
                <span className="text-cyan-50 bg-gradient-to-r from-cyan-50 to-slate-300 bg-clip-text text-transparent text-2xl font-semibold">
                  Example:
                </span>
                <p
                  //   onClick={() => playReason(data)}
                  className="py-2 mt-1 bg-gradient-to-b from-cyan-50 to-slate-300 bg-clip-text text-transparent text-3xl font-medium rounded mx-0 bottom-10 text-wrap"
                >
                  {/* {data?.explanation} */}
                  <HighlightedText
                    text={data.example}
                    {...highlightSection}
                    disabled={disabled}
                  />
                </p>
              </div>
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
    </div>
  );
};

export default EnglishCollocations;

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
            : "bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent "
        }  rounded p-0 mt-1`}
      >
        {highlight}
        {/* {highlight.length} */}
      </span>
      {finish}
    </>
  );
};
