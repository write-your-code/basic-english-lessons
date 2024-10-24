import React from "react";
import ProgressBarTimer from "./ProgressBarTimerForElection";
import { data } from "./data/ElectionData";

const ElectionDesign = () => {
  // data = data[0]
  return (
    <div className="px-20 grid grid-cols-3 gap-2 pt-4 h-screen w-full bg-gray-700">
      {data?.map((item) => (
        <div className="bg-gray-900 p-3 pb-0 rounded h-[220px]">
          <div className="text-3xl flex justify-between items-center text-white font-semibold z-10 w-full">
            <span>{item.name}</span>
            <p className="text-wrap texr-3xl">
              {item.votes}
              <i className="text-sm capitalize text-wrap ml-1">popular votes</i>
            </p>
          </div>
          {item.trump > item.kamala ? (
            <>
              <ProgressBarTimer
                name={item.name}
                votes={item.votes}
                time={item.trump}
                diff={item.trump - item.kamala}
                img={"./images/trump.jpg"}
                color={1}
              />
              <ProgressBarTimer
                name={item.name}
                votes={item.votes}
                time={item.kamala}
                // diff={item.trump - item.kamala}
                img={"./images/kamala.jpg"}
                color={2}
              />
            </>
          ) : (
            <>
              <ProgressBarTimer
                name={item.name}
                votes={item.votes}
                time={item.kamala}
                diff={item.kamala - item.trump}
                img={"./images/kamala.jpg"}
                color={2}
              />
              <ProgressBarTimer
                name={item.name}
                votes={item.votes}
                time={item.trump}
                // diff={item.kamala - item.trump}
                img={"./images/trump.jpg"}
                color={1}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ElectionDesign;
