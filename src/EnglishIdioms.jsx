import React, { useEffect, useRef, useState } from "react";
import { CountDown } from "./CounDown";
import CountDownNew from "./ProgressBarTimer";
// import { idiomsWithExpAndVisuals } from "./data/List";
import { idiomsWithExample } from "./data/List";

const EnglishIdioms = () => {
  // states
  const [data, setData] = useState();
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
  let index = 0
  let totalCount = idiomsWithExample.length;
  let res;
  // create a reference to synth
  const synth = window.speechSynthesis;
  const voices = window.speechSynthesis.getVoices();
  const getData = async () => {
    // const res = await fetch("http://localhost:8000/test");
    res = idiomsWithExample[index];
    audioRef1.current?.play();
    speechStart("Next idiom", 0);
    // const dataArray = await res.json();
    setAnswer(false);
    setTimer(false);
    setReason(false);
    console.log(res);
    setData((current) => {
      return res;
    });
    speechStart(res?.idiom, 0);
    // speechStart("option a.", 0);
    speechStart("option a.  " + res?.options.a, 0, "a");
    speechStart("option b.  " + res?.options.b, 0, "b");
    speechStart("option c.  " + res?.options.c, 0, "c");
    speechStart("option d.  " + res?.options.d, 0, "d");
    ok = true;
    if (index + 1 === totalCount) {
      index = 0;
    } else index++;
  };

  const showTimer = () => {
    setTimer((current) => true);
    audioRef2.current?.play();
    setTimeout(showAnswer, 5000);
  };
  const showAnswer = () => {
    audioRef2.current.currentTime = 0;
    audioRef2.current?.pause();
    setAnswer(true);
    audioRef.current?.play();
    setTimeout(() => {
      // let rightAnswer = ['a', 'b', 'c', 'd'].filter(
      //   (option, i) => res?.answer === res?.options[option]
      // );
      let rightAns = res.options[res.answer];
      console.log("right answer", rightAns);
      speechStart("option " + res?.answer + rightAns + " is correct answer", 0);
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
    // from-violet-200 to-pink-200   previous bg color
    <div className="flex justify-center items-start pt-[10px] w-full h-screen bg-gradient-to-b from-cyan-300 to-cyan-100 border-8 border-white rounded">
      {/* <p className="text-red-600">Total: {idiomsWithExample.length}</p> */}
      <div className="mx-[250px] rounded flex flex-col gap-4 w-full justify-center items-center">
        <span className="px-2 py-0 text-teal-700 text-3xl border-b-2 border-teal-600 font-bold tracking-wide text-wrap mb-4">
          English Idioms
        </span>
        {/* timer */}
        {timer && (
          // <div className="absolute top-[10px]">
          <div className="w-[400px] absolute top-[60px]">
            <CountDownNew initMinute={0} initSeconds={8} time={5} />
          </div>
        )}
        {/* img */}
        {/* <img src={data?.visualAid} alt="" className="w-6 h-6" /> */}
        {/* {idiomsWithExpAndVisuals200.length} */}
        {/* Question */}
        <div className="flex-1 flex  rounded text-white text-4xl font-semibold mb-4 w-full">
          <span className="px-4 text-4xl ml-1 bg-teal-900 py-4 rounded-l text-gray-100 flex  uppercase">
            Q
          </span>
          <div
            className={`${
              data?.idiom.length > 42 ? "!text-2xl" : ""
            } px-6 flex-1 bg-teal-700 trans py-4 rounded-r`}
          >
            {/* {data?.idiom} */}
            {data?.idiomUsed ? (
              <div className="text-white">
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
            {/* <HighlightedText
              text={data.idiom}
              {...highlightSection}
              disabled={disabled}
            /> */}
            {/* <TextToSpeech text={data?.question} /> */}
          </div>
        </div>
        {/* Options */}
        <div className="flex flex-col gap-3 justify-between w-full text-nowrap mt-0">
          {/* <div className="flex justify-between items-center w-full gap-4"> */}
          {/* option A */}
          <div
            className={`flex-1  flex items-center text-white text-lg font-semibold `}
          >
            <span className="px-4 text-2xl ml-1 bg-teal-900 py-3 rounded-l text-gray-100 flex items-center uppercase">
              a
            </span>
            <p
              className={`flex-1 px-6 text-2xl bg-teal-700 trans py-3 ${
                answer
                  ? data?.answer === "a"
                    ? "!bg-green-700 text-white "
                    : "!bg-red-700"
                  : ""
              }  ${option === "a" ? "!scale-[1.03]   !bg-teal-500" : " scale-100"} rounded-r`}
            >
              {data?.options?.a}
            </p>
          </div>
          {/* option B */}
          <div
            className="flex-1   flex items-center justify-end
              rounded text-white text-lg font-semibold"
          >
            <span className="px-4 text-2xl ml-1 bg-teal-900 py-3 rounded-l text-gray-100 flex items-center uppercase">
              b
            </span>
            <p
              className={`flex-1 py-3 px-6 rounded-r bg-teal-700 trans text-white text-2xl font-semibold ${
                answer
                  ? data?.answer === "b"
                    ? "!bg-green-700 text-white "
                    : "!bg-red-700"
                  : ""
              } ${option === "b" ? " scale-[1.03]   !bg-teal-500 " : ""}`}
            >
              {data?.options?.b}
            </p>
          </div>
          {/* </div> */}
          {/* <div className="flex justify-between items-center w-full gap-2"> */}
          {/* option C */}
          <div className="flex-1  flex items-center rounded text-white text-lg font-semibold">
            <span className="px-4 text-2xl ml-1 bg-teal-900 py-3 rounded-l text-gray-100 flex items-center uppercase">
              c
            </span>
            <p
              className={`flex-1 py-3 px-6 rounded-r bg-teal-700 trans text-white text-2xl font-semibold ${
                answer
                  ? data?.answer === "c"
                    ? "!bg-green-700 text-white "
                    : "!bg-red-700"
                  : ""
              } ${option === "c" ? " scale-[1.03]   !bg-teal-500 " : " "}`}
            >
              {data?.options.c}
            </p>
          </div>

          {/* option D */}
          <div className="flex-1  flex items-center justify-end  rounded text-white text-lg font-semibold">
            <span className="px-4 text-2xl ml-1 bg-teal-900 py-3 rounded-l text-gray-100 flex items-center uppercase">
              d
            </span>
            <p
              className={`flex-1 py-3 px-6 rounded-r bg-teal-700 trans text-white text-2xl font-semibold ${
                answer
                  ? data?.answer === "d"
                    ? "!bg-green-700 text-white "
                    : "!bg-red-700"
                  : ""
              } ${option === "d" ? " scale-[1.03]   !bg-teal-500 " : " "}`}
            >
              {data?.options?.d}
            </p>
          </div>
          {/* </div> */}
          {/* <p>{data?.answer}</p> */}
          {reason && (
            <p
              //   onClick={() => playReason(data)}
              className="bg-teal-600 p-4 text-white text-wrap text-xl font-medium w-[900px] right-[180px] rounded absolute bottom-5 mx-0 trans-reason"
            >
              {/* {data?.explanation} */}
              <HighlightedText
                text={data?.explanation || data?.reason}
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
          highlight.length === 0 ? "bg-transparent" : "bg-white text-teal-600"
        }  rounded py-1 px-[0px]`}
      >
        {highlight}
        {/* {highlight.length} */}
      </span>
      {finish}
    </>
  );
};
