import EnglishGrammar from "./EnglishQuestion";
import EnglishGrammarStaticData from "./EnglishGrammarWithStaticData";
import EnglishIdioms from "./EnglishIdioms";
import "./App.css";
import { useEffect, useState } from "react";
import { englishGrammarList, idiomsWithExample } from "./data/List";
import { collocationsEnglish } from "./data/Collocations";
import { sentences } from "./data/Sentences";
import { dailySentences, dailySentencesIn5Languages } from "./data/Languages";
import { words } from "./data/Synonyms";
import EnglishCollocations from "./EnglishCollocations";
import EnglishSentences from "./EnglishSentences";
import EnglishArabic from "./EnglishArabic";
import EnglishToMultiLanguages from "./EnglishToMultiLanguages";
import EnglishTenses from "./EnglishTenses";
import EnglishDialogue from "./EnglishDialogue";
import EnglishDailyConversation from "./EnglishDailyConversation";
import EnglishDailyConversationV1 from "./EnglishDailyConversation-V1";
// import ElectionDesign from "./ElectionDesign";
import ElectionDesignAll50States from "./ElectionDesignAll50States";
// import ElectionDesign from "./ElectionDesignSingleStateWise";
import ElectionDesign from "./ElectionDesignSingleStateWisesWithVoice";
import NewElectionDesignElectionDay from "./ElectionDesignSingleStateWiseWithLeadElectionDay";
import NewElectionDesignElectionDayShortVersion from "./ElectionDesignSingleStateWisesWithVoiceShortVersion";
import NewElectionDesignElectionDayShortVersionV1 from "./ElectionDesignSingleStateWisesWithVoiceShortVersion-V1";
import EnglishSynonyms from "./EnglishSynonyms";
import EnglishLevelTest from "./EnglishLevelTest";
import EnglishStoryTelling from "./EnglishStoryTelling";
import { listAll12TensesMcqs, listAll12TensesMixMcqs } from "./data/Tenses";
// import { TwoHoursQuestionAndAnswers } from "./data/dailyConversation";
import { TwoHoursQuestionAndAnswers } from "./data/dailyConversation";
import { dataCompleteWithElectionStats } from "./data/ElectionData";

function App() {
  const [layout, setLayout] = useState(0);
  let [allVoices, setAllVoices] = useState();
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [text, setText] = useState(
    "It is dummy text and cannot be changed to something other than dummy text"
  );
  const [startedIndex, setStartedIndex] = useState(0);
  let t = 0;
  let h = 0;
  dataCompleteWithElectionStats.map((item) => {
    if (item.trump > item.kamala) {
      t += parseInt(item.votes);
    }
    if (item.kamala > item.trump) {
      h += parseInt(item.votes);
    }
  });
  console.log("t and h arguments", { t, h });

  const synth = window.speechSynthesis;
  // const allVoices = window.speechSynthesis.getVoices();
  // console.log("Voices are:", allVoices);

  // function to play selectedVoice
  const speechStart = () => {
    // const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    // const handlePlay = () => {
    // const synth = window.speechSynthesis;

    // if (isPaused) {
    //   synth.resume();
    // }
    // const voices = window.speechSynthesis.getVoices();
    if (allVoices.length > 0) {
      // setSelectedVoice((current) => selectedVoice);
      // u.voice = voices[82];
      // u.voice = allVoices[selectedVoice];
      // u.voice = allVoices[selectedVoice];
      // u.voice = allVoices[selectedVoice];
      u.voice = allVoices[selectedVoice];
      console.log("current selected Voice: ", selectedVoice);
      synth.speak(u);
    } else {
      alert("plz select selected Voice and write text");
    }
  };
  const getAllVoices = async () => {
    // const synth = window.speechSynthesis;
    if (window !== undefined) {
      const completeVoices = await window.speechSynthesis.getVoices();
      setAllVoices((current) => completeVoices);
      // setAllVoices((current) =>
      //   completeVoices.filter((voice) => voice.name.includes("English"))
      // );
      // const synth = window.speechSynthesis;
      // const u = new SpeechSynthesisUtterance();
      // const voices = synth.getVoices();

      // setUtterance(u);
      // setAllVoices((current) => voices);
      // console.log("useffect run,", completeVoices);
    }
  };

  useEffect(() => {
    getAllVoices();
    // return () => {
    //   synth.cancel();
    // };
  }, []);
  if (!allVoices) {
    return <p>loading...</p>;
  }
  return (
    <main className="p-0">
      {layout === 0 && (
        <>
          <div className="grid grid-cols-6 gap-2 text-sm mt-6">
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(1)}
            >
              English Grammar -(api)
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(2)}
            >
              English Idioms -{idiomsWithExample.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(3)}
            >
              English Grammar new -{englishGrammarList.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(4)}
            >
              English Collocations -{collocationsEnglish.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(5)}
            >
              English Sentences -{sentences.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(6)}
            >
              English Arabic Sentences -{dailySentences.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(7)}
            >
              English-Arabic-russian-french-german Sentences -
              {dailySentencesIn5Languages.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(8)}
            >
              English Tenses -{listAll12TensesMixMcqs.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(9)}
            >
              English Dialogue
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(10)}
            >
              English Daily Conversation - {TwoHoursQuestionAndAnswers?.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(11)}
            >
              Election Data -{/* {ElectionDesign?.length} */}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(12)}
            >
              Election Data all 50 states -{/* {ElectionDesign?.length} */}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(13)}
            >
              English Synonyms - {words.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(14)}
            >
              Election Day New -{/* {ElectionDesign?.length} */}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(15)}
            >
              Election Result Short -{/* {ElectionDesign?.length} */}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(16)}
            >
              English Daily Conversation V1 -
              {TwoHoursQuestionAndAnswers?.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(17)}
            >
              EnglishLevelTest-{TwoHoursQuestionAndAnswers?.length}
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(18)}
            >
              EnglishStoryTelling
            </button>
            <button
              className="text-white bg-green-600 p-2 mx-2"
              onClick={() => setLayout(19)}
            >
              New Election Short-V1
            </button>
          </div>
          {/* voice box and textarea */}

          <div className="flex flex-col mt-5 gap-2">
            {/* <p>{allVoices[0]?.name}</p> */}
            <div className="flex gap-2 items-center">
              <select
                name=""
                id=""
                onChange={(e) => setSelectedVoice(e.target.value)}
                className="mb-2 w-96"
              >
                {!layout && allVoices ? (
                  allVoices?.map((voice, i) => (
                    <option key={voice + i} value={allVoices?.indexOf(voice)}>
                      {voice.name.substring(10, voice.name.length)}
                    </option>
                  ))
                ) : (
                  <option value="">Loading Voices...</option>
                )}
              </select>
              <button
                className="bg-indigo-400 text-white p-1 rounded"
                onClick={getAllVoices}
              >
                Load voices
              </button>
              <span>starting Index</span>
              <input
                type="text"
                className="border-2 p-1 rounded"
                value={startedIndex}
                onChange={(e) => setStartedIndex(e.target.value)}
              />
            </div>
            <textarea
              name="text"
              id=""
              rows={10}
              cols={30}
              value={text}
              placeholder="Plz write your text here..."
              className="border p-2 text-gray-700"
              onFocus={(e) => setText("")}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button
              className="bg-indigo-400 text-white p-2 mt-2 rounded"
              onClick={speechStart}
            >
              Play
            </button>
          </div>
        </>
      )}

      {/* LAYOUTS */}
      {layout === 1 && <EnglishGrammar />}
      {layout === 2 && <EnglishIdioms startedIndex={startedIndex} />}
      {layout === 3 && <EnglishGrammarStaticData speakerId={selectedVoice} />}
      {layout === 4 && <EnglishCollocations startedIndex={startedIndex} />}
      {layout === 5 && <EnglishSentences startedIndex={startedIndex} />}
      {layout === 6 && <EnglishArabic startedIndex={startedIndex} />}
      {layout === 7 && <EnglishToMultiLanguages />}
      {layout === 8 && <EnglishTenses startedIndex={startedIndex} />}
      {layout === 9 && <EnglishDialogue startedIndex={startedIndex} />}
      {layout === 10 && (
        <EnglishDailyConversation startedIndex={startedIndex} />
      )}
      {layout === 11 && <ElectionDesign startedIndex={startedIndex} />}
      {layout === 12 && (
        <ElectionDesignAll50States startedIndex={startedIndex} />
      )}
      {layout === 13 && <EnglishSynonyms startedIndex={startedIndex} />}
      {layout === 14 && (
        <NewElectionDesignElectionDay startedIndex={startedIndex} />
      )}
      {layout === 15 && (
        <NewElectionDesignElectionDayShortVersion startedIndex={startedIndex} />
      )}
      {layout === 16 && (
        <EnglishDailyConversationV1 startedIndex={startedIndex} />
      )}
      {layout === 17 && <EnglishLevelTest startedIndex={startedIndex} />}
      {layout === 18 && <EnglishStoryTelling startedIndex={startedIndex} />}
      {layout === 19 && (
        <NewElectionDesignElectionDayShortVersionV1
          startedIndex={startedIndex}
        />
      )}
    </main>
  );
}

export default App;
