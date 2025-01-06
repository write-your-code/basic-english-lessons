import React, { useEffect, useRef, useState } from "react";
import { CountDown } from "./CountDownLevelQuiz";
// import CountDownNew from "./ProgressBarTimer";
// import { questionsWithExpAndVisuals } from "./data/List";
// import { test7 } from "./data/EnglishLevelTest";
import TypewriterField from "./TypewriterField";
import { textArray1 } from "./data/LongTales";
import Typewriter from "./Typewriter";

const EnglishStory = ({ startedIndex = 0 }) => {
  // states
  const [data, setData] = useState();
  const [questionNo, setQuestionNo] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [reason, setReason] = useState(true);
  const [timer, setTimer] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [typewrite, setTypewrite] = useState("");
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
  // let index = startedIndexForIndex || 0;
  let index = (startedIndex && Number(startedIndex) - 1) || 0;
  // let totalCount = test6.length;
  let res;
  let type = 1;
  // create a reference to synth
  const synth = window.speechSynthesis;
  const voices = window.speechSynthesis.getVoices();
  const getData = async () => {
    // const res = await fetch("http://localhost:8000/test");

    res = textArray1[index];
    setTypewrite((current) => res);
    setReason((current) => true);

    speechStart(res, 0, "typewrite");

    ok = true;
    // if (index + 1 === totalCount) {
    //   index = 0;
    //   // setQuestionNo(0);
    // } else index++;
  };

  const resetCaptionPosition = () => {
    setHighlightSection({ from: 0, to: 0 });
  };
  const speechStart = (text, flag, option = "") => {
    // const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    u.pitch = 0.9;
    u.rate = 0.9;
    setDisabled(false);
    if (1) {
      u.addEventListener("start", () => {});
      u.addEventListener("end", () => {
        // setDisabled(false);
        if (option) {
          setOption((current) => 0);
        }
        resetCaptionPosition();
        if (index + 1 === textArray1.length) {
          index = 0;
        } else {
          index++;
          // setQuestionNo((current) => (current += 1));
        }
        setTimeout(() => {
          setReason((current) => false);
        }, 5000);
        setTimeout(() => {
          getData();
        }, 6000);
      });
      u.addEventListener("boundary", ({ charIndex, charLength }) => {
        setHighlightSection({ from: charIndex, to: charIndex + charLength });
      });
    }

    if (voices.length > 0) {
      // u.voice = voices[123];
      u.voice = voices[122];
    }
    synth.speak(u);
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (!synth.speaking && ok) {
  //       console.log("timer value:", timer);
  //       // showTimer();
  //       ok = false;
  //       console.log("setinterval inside run:");
  //     }
  //   }, 3000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    // getData();
  }, [typewrite]);

  if (typewrite) {
    // format 1
    // return (
    //   <div
    //     className="bg-black w-full h-full py-2 rounded bg-cover bg-center"
    //     id="mainDiv"
    //     style={{ backgroundImage: "url('./images/bg-yellow.png')" }}
    //   >
    //     <div className="flex items-center justify-center h-[600px] px-[150px] text-3xl text-gray-700 font-medium leading-[1.5]">
    //       {reason && <Typewriter text={typewrite} delay={50} />}
    //     </div>
    //   </div>
    // );
    // return <Typewriter text={textArray1 || text} delay={60} />;
    // format 2
    return (
      <div
        className="bg-black w-full h-full py-2 rounded bg-cover bg-center"
        id="mainDiv"
        style={{ backgroundImage: "url('./images/bg-yellow.png')" }}
      >
        <div className="flex items-center justify-center h-[640px]">
          <p className="px-[150px] text-3xl text-gray-600 font-normal leading-[1.5]">
            <HighlightedText
              text={typewrite}
              {...highlightSection}
              disabled={disabled}
            />
          </p>
        </div>
      </div>

    // third format
    //   // <div className="flex items-center justify-center h-[500px]">
    //   //   <p className="p-6 text-2xl text-orange-400 font-medium leading-10">{typewrite}</p>
    //   // </div>
    );
  }
  if (!data && !typewrite) {
    return (
      <div className="flex justify-center items-center mt-[50px] w-full h-[500px]">
        <div className="w-full h-full flex justify-center items-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }
};

export default EnglishStory;

const splitText = (text, from, to) => [
  text?.slice(0, from),
  text?.slice(from, to),
  text?.slice(to),
];

const HighlightedText = ({ text, from, to, disabled }) => {
  const [start, highlight, finish] = splitText(text, from, to);
  return (
    <>
      {start}
      <span
        className={`${
          highlight.length === 0 ? "bg-transparent" : "underline text-gray-900"
        }  rounded py-0 px-[0px]`}
      >
        {highlight}
        {/* {highlight.length} */}
      </span>
      {finish}
    </>
  );
};
