import React, { useEffect, useRef, useState } from "react";
import { CountDown } from "./CounDown";
import CountDownNew from "./ProgressBarTimer";
// import { idiomsWithExpAndVisuals } from "./data/List";
import { story } from "./data/story";
import SpeechWaves from "./SpeechWaves";

const EnglishSentences = () => {
  // states
  const [data, setData] = useState();
  const [waves, setWaves] = useState();
  const [mode, setMode] = useState(1);
  const [desc, setDesc] = useState(false);
  const [questionNo, setQuestionNo] = useState(0);
  const [speaker, setSpeaker] = useState(0);
  const [currentCaption, setCurrentCaption] = useState(0);
  const [speakerText, setSpeakerText] = useState({
    firstSpeaker: "",
    secondSpeaker: "",
    idiom: "",
    explanation: "",
    example: "",
  });
  const [origin, setOrigin] = useState(false);
  const [reason, setReason] = useState(false);
  const [explanation, setExplanation] = useState(0);
  const [timer, setTimer] = useState(false);
  const [disabled, setDisabled] = useState(false);
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
  let outerIndex = 0;
  let index = 19;
  let totalCount = story[0]?.dialogues?.length;
  console.log("length of dialogues:", totalCount);
  let res;
  // create a reference to synth
  const synth = window.speechSynthesis;
  const getData = async () => {
    // const res = await fetch("http://localhost:8000/test");
    res = story[outerIndex];
    audioRef1.current?.play();
    setSpeaker(0);
    // speechStart("Next senetnce ", 0);
    // const dataArray = await res.json();
    // setExp(false);
    setOrigin(false);
    // setTimer(false);
    setReason(false);
    console.log(outerIndex);
    setData((current) => {
      return res;
    });
    // prototype
    // ( text, speed = 1,caption = 0,mode = 0,currentPart = 0,currentSpeaker =0,explain = 0,dialogueObject = null)

    // start
    speechStart(res?.title, 1, 0, 0, 0);
    speechStart(res?.description, 1, 1, 0, 1);
    // check who is first speaker male or female
    let remainder = res.top === "M" ? 1 : 0;
    res.dialogues.map((dialogue, i) => {
      if (i % 2 === remainder) {
        // speak normal speed
        if (dialogue.scene) {
          speechStart(dialogue.dialogue, 1, 0, 1, 0, 0, 0, dialogue);
          return;
        }
        speechStart(dialogue.dialogue, 1, 0, 1, 0, 1, 0, dialogue);
        // speak with slow speed
        speechStart(dialogue.dialogue, 2, 0, 1, 0, 1, 0, dialogue);
        // enable idiom explanation and enable explanation true
        // speechStart(dialogue?.dialogue, 2, 0, 1, 0, 0, 1, dialogue);
        if (dialogue.idiom) {
          speechStart(dialogue?.idiom, 2, 1, 1, 0, 0, 1, dialogue);
          // only voice
          // speechStart("it means", 2, 0, 1, 0, 0, 1, dialogue);
          // voice and caption
          speechStart(
            "It means :" + dialogue?.explanation,
            2,
            2,
            1,
            0,
            0,
            1,
            dialogue
          );

          // only voice of for example with caption 0 (disable)
          // speechStart("for example", 2, 0, 1, 0, 0, 1, dialogue);
          // voice and caption of for example with caption 1 (enable)
          speechStart(
            "For example :" + dialogue?.example,
            2,
            3,
            1,
            0,
            0,
            1,
            dialogue
          );
        }
        // );
      } else {
        if (dialogue.scene) {
          speechStart(dialogue.dialogue, 1, 0, 1, 0, 0, 0, dialogue);
          return;
        }
        speechStart(dialogue.dialogue, 1, 0, 1, 0, 2, 0, dialogue);
        speechStart(dialogue.dialogue, 2, 0, 1, 0, 2, 0, dialogue);
        // enable idiom explanation and enable explanation true
        // speechStart(dialogue?.dialogue, 2, 0, 1, 0, 0, 1, dialogue);
        if (dialogue.idiom) {
          speechStart(dialogue?.idiom, 2, 1, 1, 0, 0, 1, dialogue);
          // only voice
          // speechStart("it means", 2, 0, 1, 0, 0, 1, dialogue);
          // voice and caption
          speechStart(
            "it means :" + dialogue?.explanation,
            // dialogue?.explanation,
            2,
            2,
            1,
            0,
            0,
            1,
            dialogue
          );
          // only voice
          // speechStart("for example", 2, 0, 1, 0, 0, 1, dialogue);
          // voice and caption
          speechStart(
            "for example :" + dialogue?.example,
            2,
            3,
            1,
            0,
            0,
            1,
            dialogue
          );
        }
        // );
      }
      // if (index + 1 === totalCount) {
      //   index = 0;
      //   outerIndex = 1;
      // } else index++;
      // setQuestionNo(index);
      resetCaptionPosition();
    });
  };
  // speechStart(res?.sentence, 1, 2);
  // speechStart(res?.sentence, 2, 2);

  // speechStart("option a.", 0);
  // speechStart("explanation.      " + res?.explanation, 4);
  // speechStart("lets discover its origin.  " + res?.origin, 5);
  // speechStart("for example. ", 0);
  // setTimeout(showAnswer, 2000);
  // ok = true;
  // reset caption position
  const resetCaptionPosition = () => {
    setHighlightSection({ from: 0, to: 0 });
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
    setReason(true);
    playReason(data);
    setTimeout(getData, 15000);
  };
  const playReason = () => {
    setDisabled(false);
    // speechStart(res?.exp + " is correct exp because ", 0);
    speechStart(res?.example, 1);
  };
  const playSentence = () => {
    setDisabled(false);
    // speechStart(res?.exp + " is correct exp because ", 0);
    speechStart(res?.sentence, 1);
  };

  const speechStart = (
    text,
    speed = 1,
    caption = 0,
    mode = 0,
    currentPart = 0,
    currentSpeaker = 0,
    explain = 0,
    dialogueObject = null
  ) => {
    audioRef1.current?.play();
    // const synth = window.speechSynthesis;
    console.log("type: " + text?.length);
    var u = new SpeechSynthesisUtterance(text);

    setDisabled(false);

    if (speed === 2) {
      u.pitch = 1;
      u.rate = 0.85;
      u.volume = 1;
    }
    // if (speed === 1 || speed === 2) {
    u.addEventListener("start", () => {
      if (index + 1 === totalCount) {
        index = 0;
        outerIndex = 1;
      } else index++;
      setQuestionNo(index);
      // set waves
      setTimeout(() => {
        console.log("inside settime out");
      }, 3000);
      setWaves(true);
      // set captions
      if (caption !== 0) {
        setCurrentCaption((current) => caption);
      }
      if (currentPart === 0) {
        setOrigin((current) => true);
      } else {
        setOrigin((current) => false);
      }
      if (currentSpeaker === 1) {
        setSpeakerText((current) => ({
          ...current,
          firstSpeaker: text,
        }));
        console.log("spekaer text changed:", speakerText);
      } else if (currentSpeaker === 2) {
        setSpeakerText((current) => ({
          ...current,
          secondSpeaker: text,
        }));
      }
      // set explain true if explain passed 1
      if (explain) {
        audioRef1.current?.play();
        setWaves((current) => false);
        setExplanation((current) => 1);
        console.log("set explain run", explain);
        setSpeakerText((current) => ({
          ...current,
          idiom: dialogueObject?.idiom,
          explanation: "It means :" + dialogueObject?.explanation,
          example: "For example :" + dialogueObject?.example,
        }));
      } else {
        setExplanation((current) => 0);
      }

      if (currentPart === 1) {
        setDesc((current) => true);
      } else {
        setDesc((current) => false);
      }
      if (currentSpeaker === 1) {
        setSpeakerText((current) => ({
          ...current,
          currentIdiom: dialogueObject.idiom,
          secondSpeaker: "",
          firstSpeaker: text,
        }));
        console.log("spekaer text changed:", speakerText);
        // speechStart(dialogue.dialogue, 1, 0, 1, 0);
      } else if (currentSpeaker === 2) {
        setSpeakerText((current) => ({
          ...current,
          currentIdiom: dialogueObject.idiom,
          firstSpeaker: "",
          secondSpeaker: text,
        }));

        // speechStart(dialogue.dialogue, 1, 0, 1, 0);
      }

      if (currentSpeaker === 1) {
        setSpeaker((current) => 1);
      } else if (currentSpeaker === 2) {
        setSpeaker((current) => 2);
      }
      // else {
      //   setSpeaker((current) => 0);
      // }
    });

    u.addEventListener("end", () => {
      setWaves(false);
      resetCaptionPosition();
      setCurrentCaption(0);
      // setExplanation(0);
    });
    u.addEventListener("boundary", ({ charIndex, charLength }) => {
      setHighlightSection({ from: charIndex, to: charIndex + charLength });
    });
    // }

    const voices = window.speechSynthesis.getVoices();
    // console.log("voices", voices);
    u.voice = voices[125];
    if (voices.length > 0) {
      if (currentSpeaker === 2) {
        // u.voice = voices[111];
        u.voice = voices[117];
        console.log("current voice: " + voices[117].name);
      } else if (currentSpeaker === 1) {
        // u.voice = voices[82];
        console.log("current voice: " + voices[114].name);
        u.voice = voices[114];
      }
      ok = true;
    }
    // start waves
    // if (synth.speaking) {
    //   // setWaves(true);
    // }
    synth.speak(u);
    console.log("state:", synth.pending);
    // console.log("startng voice:", text, synth.pending);

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
        // console.log("timer value:", timer);
        // if (!isComplete) {
        // const intervalId1 = setTimeout(showTimer, 1000);
        getData();
        // const intervalId1 = setTimeout(showAnswer, 10000);
        // const intervalId2 = setTimeout(showReason, 13000);
        // const intervalId3 = setTimeout(getData, 32000);
        // const intervalId2 = setTimeout(showAnswer, 13000);
        // setIsComplete((current) => true);
        ok = true;
        // const intervalId4 = setTimeout(getData, 25000);
        // }
        console.log("setinterval inside run:", ok);
      }
      console.log("useefect in setinterval", ok);
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
    <div className="bg-black w-full h-full py-2 rounded overflow-hidden">
      <div className="flex justify-center items-start mt-[10px] w-full h-[560px]">
        <span className="px-2 py-0 text-cyan-50 ml-4 border-b-2">
          {questionNo}
        </span>
        {/* <p className="text-red-600">Total: {collocationsEnglish.length}</p> */}
        {/* {timer && (
        // <div className="absolute top-[10px]">
        <div className="absolute top-[30px] w-[660px]">
          <CountDownNew initMinute={0} initSeconds={7} />
        </div>
      )} */}
        <div className="mx-[200px] flex flex-col gap-4 w-full justify-center items-center relative mt-2">
          {/* Title */}
          <div className="flex-1 flex-col  rounded text-white text-2xl justify-center items-center font-semibold w-full mt-[10px]">
            {/* <span className="px-4 text-lg ml-[0] py-4 rounded-l text-gray-100 uppercase">
              Title
            </span> */}
            <p className="px-4 flex-1 bg-gradient-to-t from-rose-400 to-red-500 bg-clip-text text-transparent py-2 rounded text-center text-xl">
              {data?.title}
              {/* <HighlightedText
                text={data.title}
                {...highlightSection}
                disabled={disabled}
              /> */}
              {/* <TextToSpeech text={data?.question} /> */}
            </p>
          </div>
          {/* image avatars */}
          <div className="flex justify-between items-center w-full">
            {/* <span className="text-red-400">{speaker}</span> */}
            {/* first avatar */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className={`relative w-[100px] h-[100px] border-4 rounded-full transition-all
                overflow-hidden ${
                  speaker === 1
                    ? "w-[120px] h-[120px] border-4 border-green-600 "
                    : speaker === 2
                    ? " w-[80px] h-[80px]"
                    : ""
                }`}
              >
                <img
                  className="absolute -top-4 object-cover "
                  src={"/images/female-avatar.jpg"}
                  alt="avatar"
                />
              </div>
              {/* speech waves */}
              <span className="text-xs text-white">{data.firstSpeaker}</span>
              {speaker === 1 && (
                <div
                  className={`transition-all mb-4 ${
                    waves && speaker === 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <SpeechWaves />
                </div>
              )}

              {/* speaker text */}
              <div
                className={`text-white ${
                  speakerText?.firstSpeaker.length > 80 ? "text-md" : "text-2xl"
                } mx-2 max-w-[400px]`}
              >
                {speakerText?.firstSpeaker.substring(
                  0,
                  speakerText?.firstSpeaker.indexOf(speakerText?.currentIdiom)
                )}
                <span className="bg-gradient-to-t from-rose-400 to-red-500 bg-clip-text text-transparent text-3xl font-bold">
                  {speaker === 1 && speakerText?.currentIdiom}
                </span>
                {speakerText?.firstSpeaker.substring(
                  speakerText?.firstSpeaker.indexOf(speakerText.currentIdiom) +
                    speakerText?.currentIdiom?.length
                )}
              </div>
            </div>

            {/* second avatar */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div
                className={`relative w-[100px] h-[100px] border-2 rounded-full transition-all
            overflow-hidden ${
              speaker === 2
                ? "w-[120px] h-[120px] border-4 border-green-700"
                : speaker === 1
                ? "w-[80px] h-[80px]"
                : ""
            }`}
              >
                <img
                  className="absolute top-0 object-cover "
                  src={"/images/male-avatar-3.jpg"}
                  alt="avatar"
                />
              </div>
              <span className="text-xs text-white">{data.secondSpeaker}</span>
              {/* speech waves */}
              {speaker === 2 && (
                <div
                  className={`transition-all mb-4 ${
                    waves && speaker === 2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <SpeechWaves />
                </div>
              )}
              {/* speaker text */}
              <div
                className={`text-white ${`text-white ${
                  speakerText?.firstSpeaker.length > 80 ? "text-md" : "text-2xl"
                } mx-2 max-w-[400px]`} mx-5 max-w-[400px]`}
              >
                <div className="text-white">
                  {speakerText?.secondSpeaker.substring(
                    0,
                    speakerText?.secondSpeaker.indexOf(
                      speakerText?.currentIdiom
                    )
                  )}
                  <span className="bg-gradient-to-t from-rose-400 to-red-500 bg-clip-text text-transparent text-3xl font-bold">
                    {speaker === 2 && speakerText?.currentIdiom}
                  </span>
                  {speakerText?.secondSpeaker.substring(
                    speakerText?.secondSpeaker.indexOf(
                      speakerText.currentIdiom
                    ) + speakerText?.currentIdiom?.length
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-between w-full mt-1">
            {/* descripton */}
            {desc && (
              <div className="flex-1 flex flex-col items-start justify-start rounded bg-gradient-to-t text-cyan-50 text-lg font-semibold">
                <span className="px-2 text-xl py-1 bg-gradient-to-t from-rose-400 to-red-500 bg-clip-text text-transparent uppercase">
                  Background
                </span>
                <p
                  className={`flex-1 py-4 px-6 rounded bg-gradient-to-b from-red-600 to-orange-300 trans text-xl font-semibold text-wrap
                     ${
                       timer
                         ? data?.description === "c"
                           ? "!bg-green-700 text-white "
                           : "!bg-red-700"
                         : ""
                     }`}
                >
                  {data?.description}
                </p>
              </div>
            )}

            {/* Origin */}
            {/* <div className="flex-1 flex flex-col items-start justify-center rounded text-white text-lg font-semibold">
              <span className="px-2 text-xl py-2 rounded text-gray-100 flex items-start justify-center uppercase">
                Origin
              </span>
              <p
                className={`flex-1 py-4 px-6 rounded bg-teal-600 text-white/[0.9] trans text-lg font-semibold text-wrap ${
                  timer
                    ? data?.exp === "d"
                      ? "!bg-green-700 text-white "
                      : "!bg-red-700"
                    : ""
                } `}
              >
                {data?.origin}
              </p>
            </div> */}
            {/* example */}
          </div>
        </div>
        {/* explanation:{explanation} */}
        {explanation && (
          <div className="text-center absolute bottom-8 max-w-[90%] ">
            {/* <span className="text-cyan-50 text-lg">For Example:</span> */}
            {["idiom", "explanation", "example"].map((s, i) => (
              <div
                className="px-2 py-2 mb-1 bg-gradient-to-t from-rose-400 to-red-500 bg-clip-text text-transparent text-wrap text-xl font-semibold rounded mx-1 text-center capitalize border border-white/[0.6] relative"
                key={s}
              >
                {/* {data?.explanation} */}
                {s === "idiom" ? (
                  currentCaption === 1 ? (
                    <>
                      {/* <span className=" absolute -top-[10px]">
                        Idiom
                      </span> */}
                      <HighlightedText
                        text={speakerText[s]}
                        {...highlightSection}
                        disabled={disabled}
                        // mode={2}
                      />
                    </>
                  ) : (
                    <>
                      {/* <div className="relative flex"> */}
                      {/* <span className="absolute -top-[40]">
                        Idiom :
                      </span> */}
                      <p>{speakerText[s]}</p>
                      {/* </div> */}
                    </>
                  )
                ) : (
                  ""
                )}
                {/* show explanation */}
                {s === "explanation" ? (
                  currentCaption === 2 ? (
                    <HighlightedText
                      text={speakerText[s]}
                      {...highlightSection}
                      disabled={disabled}
                      // mode={2}
                    />
                  ) : (
                    <p>{speakerText[s]}</p>
                  )
                ) : (
                  ""
                )}
                {/* in explain s value {s} */}
                {s === "example" ? (
                  currentCaption === 3 ? (
                    <HighlightedText
                      text={speakerText[s]}
                      {...highlightSection}
                      disabled={disabled}
                      // mode={2}
                    />
                  ) : (
                    <p>{speakerText[s]}</p>
                  )
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        )}
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

export default EnglishSentences;

const splitText = (text, from, to) => [
  text?.slice(0, from),
  text?.slice(from, to),
  text?.slice(to),
];

const HighlightedText = ({ text, from, to, disabled, mode = 1 }) => {
  const [start, highlight, finish] = splitText(text, from, to);
  return (
    <>
      {start}
      <span
        className={`${
          highlight?.length === 0
            ? "bg-transparent"
            : mode === 1
            ? "bg-white text-red-700"
            : "bg-red-100 text-cyan-50"
        }  rounded ${mode === 1 ? "" : ""}`}
      >
        {highlight}
        {/* {finish.length} */}
      </span>
      {finish}
    </>
  );
};

















