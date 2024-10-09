import React, { useEffect, useRef, useState } from "react";
import { CountDown } from "./CounDown";
import CountDownNew from "./CountDownVersion-1";
import { englishGrammarList } from "./data/List";

const EnglishGrammar = ({ speakerId }) => {
  // states
  const [data, setData] = useState();
  const [answer, setAnswer] = useState(false);
  const [reason, setReason] = useState(false);
  const [timer, setTimer] = useState(false);
  const [voice, setVoice] = useState(speakerId || 82);
  const [isComplete, setIsComplete] = useState(false);

  // useRef states
  const audioRef = useRef(null);
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const audioRef3 = useRef(null);

  let ok = true;
  let index = 0;

  // create a reference to synth
  const synth = window.speechSynthesis;
  const allVoices = window.speechSynthesis.getVoices();
  console.log("voices are:", allVoices);
  // setVoices((current) => allVoices);
  const getData = async () => {
    speechStart("Next question", 0);
    // const res = await fetch("http://localhost:8000/test");
    const res = englishGrammarList[index];
    audioRef1.current?.play();
    // const dataArray = await res.json();
    setAnswer(false);
    setTimer(false);
    setReason(false);
    console.log(res);
    setData((current) => res);
    speechStart(res?.question);
    speechStart("option a.      " + res?.a, 0);
    speechStart("option b.  " + res?.b, 0);
    speechStart("option c. " + res?.c, 0);
    speechStart("option d. " + res?.d, 1);
    ok = true;
    index++;
  };

  const showTimer = () => {
    setTimer((current) => true);
    audioRef2.current?.play();
    setTimeout(showAnswer, 8000);
  };
  const showAnswer = () => {
    setAnswer(true);
    audioRef.current?.play();
    setTimeout(showReason, 4000);
  };
  const showReason = () => {
    audioRef3.current?.play();
    setReason(true);
    setTimeout(getData, 15000);
  };

  const speechStart = (text, flag) => {
    // const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    // const handlePlay = () => {
    // const synth = window.speechSynthesis;

    // if (isPaused) {
    //   synth.resume();
    // }
    const voices = window.speechSynthesis.getVoices();
    // console.log("voices", voices);
    if (voices.length > 0) {
      // setVoices((current) => voices);
      // u.voice = voices[82];
      u.voice = voices[voice];
      console.log("current voice: " + u.voice);
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
    <div className="flex justify-center items-start mt-[50px] w-full h-[500px]">
      {/* <p className="text-red-600">Total: {idiomsWithExpAndVisuals200.length}</p> */}
      {/* <select name="voices" id="" onClick={(e) => setVoice(e.target.value)}>
        {allVoices?.map((voice) => (
          <option value={voice}>{voice.name}</option>
        ))}
      </select> */}
      {timer && (
        // <div className="absolute top-[10px]">
        <div className="absolute top-[20px] right-72 w-[100px]">
          <CountDownNew initMinute={0} initSeconds={7} />
        </div>
      )}
      <div
        className={`mx-[250px] flex flex-col gap-4 w-full justify-center items-center transition-all ${
          reason ? "" : ""
        }`}
      >
        {/* img */}
        {/* <img src={data?.visualAid} alt="" className="w-6 h-6" /> */}
        {/* {idiomsWithExpAndVisuals200.length} */}
        {/* Question */}
        <div className="flex-1 flex  rounded text-white text-2xl font-semibold mb-4 w-full">
          <span className="px-4 text-xl ml-1 bg-teal-700 py-4 rounded-l text-gray-100 flex  uppercase">
            Q
          </span>
          <p className="px-6 flex-1 bg-teal-500 trans py-4 rounded-r">
            {data?.question}
            {/* <TextToSpeech text={data?.question} /> */}
          </p>
        </div>
        {/* Options */}
        <div className="flex flex-col gap-3 justify-between w-full text-nowrap mt-4">
          {/* <div className="flex justify-between items-center w-full gap-4"> */}
          {/* option A */}
          <div
            className={`flex-1  flex items-center text-white text-lg font-semibold `}
          >
            <span className="px-4 text-xl ml-1 bg-teal-700 py-4 rounded-l text-gray-100 flex items-center uppercase">
              a
            </span>
            <p
              className={`flex-1 px-6 bg-teal-500 trans py-4 ${
                answer
                  ? data?.answer === "a"
                    ? "!bg-green-700 text-white "
                    : "!bg-red-700"
                  : ""
              }  rounded-r`}
            >
              {data?.a}
            </p>
          </div>
          {/* option B */}
          <div
            className="flex-1   flex items-center justify-end
              rounded text-white text-lg font-semibold"
          >
            <span className="px-4 text-xl ml-1 bg-teal-700 py-4 rounded-l text-gray-100 flex items-center uppercase">
              b
            </span>
            <p
              className={`flex-1 py-4 px-6 rounded-r bg-teal-500 trans text-white text-lg font-semibold ${
                answer
                  ? data?.answer === "b"
                    ? "!bg-green-700 text-white "
                    : "!bg-red-700"
                  : ""
              }`}
            >
              {data?.b}
            </p>
          </div>
          {/* </div> */}
          {/* <div className="flex justify-between items-center w-full gap-2"> */}
          {/* option C */}
          <div className="flex-1  flex items-center rounded text-white text-lg font-semibold">
            <span className="px-4 text-xl ml-1 bg-teal-700 py-4 rounded-l text-gray-100 flex items-center uppercase">
              c
            </span>
            <p
              className={`flex-1 py-4 px-6 rounded-r bg-teal-500 trans text-white text-lg font-semibold ${
                answer
                  ? data?.answer === "c"
                    ? "!bg-green-700 text-white "
                    : "!bg-red-700"
                  : ""
              }`}
            >
              {data?.c}
            </p>
          </div>

          {/* option D */}
          <div className="flex-1  flex items-center justify-end  rounded text-white text-lg font-semibold">
            <span className="px-4 text-xl ml-1 bg-teal-700 py-4 rounded-l text-gray-100 flex items-center uppercase">
              d
            </span>
            <p
              className={`flex-1 py-4 px-6 rounded-r bg-teal-500 trans text-white text-lg font-semibold ${
                answer
                  ? data?.answer === "d"
                    ? "!bg-green-700 text-white "
                    : "!bg-red-700"
                  : ""
              } `}
            >
              {data?.d}
            </p>
          </div>
          {/* </div> */}
          {/* <p>{data?.answer}</p> */}
          {reason && (
            <p
              onClick={speechStart(
                data?.answer + " is correct answer. because " + data?.reason,
                0
              )}
              className="bg-teal-900 p-4  text-white text-wrap text-lg font-medium w-[600px] rounded absolute bottom-4 mx-10 trans-reason"
            >
              {data?.reason}
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

export default EnglishGrammar;