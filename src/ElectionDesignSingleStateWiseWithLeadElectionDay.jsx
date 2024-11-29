import React, { useEffect, useState } from "react";
import ProgressBarTimer from "./ProgressBarTimerForElectionStateWiseWithLeadElectionDay";
import { dataCompleteWithElectionStats } from "./data/ElectionData";

const ElectionDesign = ({ startedIndex = 0 }) => {
  // const [start, setStart] = useState(0);
  const [item, setItem] = useState();
  const [data, setData] = useState(dataCompleteWithElectionStats);
  const [showVoteShare, setShowVoteShare] = useState(0);
  const [trumpNumer, setTrumpNumber] = useState(150);
  const [kamalaNumer, setKamalaNumber] = useState(134);
  // let data = withJudePredicted;
  let index = startedIndex || 0;
  // let item;
  const getData = () => {
    // item = data[index];
    setItem((current) => data[index]);
    // setStart((current) => 1);
    console.log("in getdata", JSON.stringify(item));
  };
  useEffect(() => {
    const id = setInterval(() => {
      // setIndex((current) => {
      if (index + 1 === data.length) {
        index = 0;
      } else index++;
      // });
      // setStart(0);
      getData();
      console.log("useefect run", index, JSON.stringify(item));
    }, 25000);
    return () => {
      clearInterval(id);
    };
  }, []);
  useEffect(() => {
    getData();
  }, []);
  if (!item) {
    return <p>loading...</p>;
  }
  return (
    <div className="px-20 grid grid-cols-1 gap-2 pt-4 h-screen w-full bg-black relative">
      {/* top bar total votes comparison */}
      <div className="flex w-full justify-center pt-2 relative h-[65px]">
        <span className="absolute top-full bg-gradient-to-b from-yellow-200/[1] to-yellow-500/[1] bg-clip-text text-transparent text-4xl font-semibold z-20 border-t-2 border-yellow-400">
          270
          <span className="text-sm block">To Win</span>
        </span>
        <span className="flex justify-center">
          <img
            src="./arrow-up.png"
            className="absolute w-4 h-4 -top-2 rotate-180 left-[49.5%] filter invert"
            alt=""
          />
        </span>
        <div
          className="rounded  relative ml-0 border-2 border-white w-[1080px] flex justify-center items-center transition-all"
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
                  height: "80px",
                  width: "80px",
                  // top: "0px",
                  // top: "-15px",
                }}
                className="text-xl absolute -left-[85px]"
              >
                <img
                  src={`${"./images/trump-1.png"}`}
                  alt=""
                  className="w-[80px] h-[100px] rounded object-cover border-2 "
                />
                <span
                  className="text-red-400 text-4xl font-semibold 
                text-nowrap absolute left-[110%] -bottom-6"
                >
                  <span>Donald Trump</span>
                  {/* <span className="text-lg bg-white p-1 rounded font-bold text-red-700   ml-2">
                    74,247,470 votes (50.5%)
                  </span> */}
                </span>
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
                style={{
                  height: "80px",
                  width: "80px",
                  // top: "0px",
                  // top: "-15px",
                }}
                className="text-xl absolute -right-[85px]"
              >
                <img
                  src={`${"./images/kamala-1.png"}`}
                  alt=""
                  className="w-[80px] h-[100px] rounded object-cover border-2"
                />
                <span
                  className="text-blue-400 text-4xl font-semibold 
                text-nowrap absolute right-[110%] -bottom-6"
                >
                  {/* <span className="text-lg bg-white p-1 rounded font-bold text-blue-700 mr-2">
                    70,345,377 votes (47.9%)
                  </span> */}
                  <span>Kamala Harris</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* end top bar total votes comparison */}
      {/* {data?.map((item?) => ( */}
      <div className="bg-black p-4 pb-0 rounded ">
        <span className="text-white font-semibold text-3xl mb-4 border-b-2 pb-3 block uppercase">
          🟢 Live Results{" "}
          <span className="text-xl">(Presidential Election 24)</span>
        </span>
        <div className="text-5xl flex justify-between items-center text-white font-semibold z-10 w-full  rounded p-2">
          <span>{item?.name}</span>
          <p className="text-wrap ">
            {item?.votes}
            <span className="capitalize text-2xl text-wrap ml-1">PV</span>
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
              diff={item?.kamala - item?.trump}
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
              diff={item?.trump - item?.kamala}
              img={"./images/trump.jpg"}
              progress={0}
              color={1}
              mode={"new"}
              setTrumpNumber={setTrumpNumber}
              setKamalaNumber={setKamalaNumber}
            />
          </>
        )}
        <div className="text-right">
          <span className="text-cyan-50 text-right">
            🟢 EST. {item?.votesCount} of votes counted
          </span>
        </div>
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

      {/* ))} */}
    </div>
  );
};

export default ElectionDesign;
