import React, { useEffect, useState } from "react";
import ProgressBarTimer from "./ProgressBarTimerForElectionStateWise";
import { withJudePredicted } from "./data/ElectionData";

const ElectionDesign = () => {
  // const [start, setStart] = useState(0);
  const [item, setItem] = useState();
  const [data, setData] = useState(withJudePredicted);
  // let data = withJudePredicted;
  let index = 0;
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
    }, 50000);
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
    <div className="px-20 grid grid-cols-1 gap-2 pt-4 h-screen w-full bg-gray-700">
      {/* {data?.map((item?) => ( */}
      <div className="bg-gray-900 p-4 pb-0 rounded ">
        <span className="text-white font-semibold text-4xl mb-4 border-b-2 pb-3 block">
          Election 2024 (Predicted)
        </span>
        <div className="text-5xl flex justify-between items-center text-white font-semibold z-10 w-full">
          <span>{item?.name}</span>
          <p className="text-wrap text-3xl">
            {item?.votes}
            <i className="text-lg capitalize text-wrap ml-1">Popular votes</i>
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
            />
          </>
        )}
      </div>
      {/* election 2020 progressbar */}
      <div className="bg-gray-700 rounded flex flex-col justify-center items-center">
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
      </div>

      {/* ))} */}
    </div>
  );
};

export default ElectionDesign;
