import React from "react";
import Typewriter from "./Typewriter";
import { text } from "./data/Typewritetext";

const TypewriterField = ({ textArray }) => {
  return (
    <div className="">
      <div className="flex justify-center items-center mt-[50px] w-full h-[500px]">
        <div className="w-full h-full flex justify-center items-start">
          <div>
            <h1 className="text-2xl font-semibold capitalize w-[500px] mx-10 leading-10  text-gray-600 px-4 py-8 rounded transition-all">
              <Typewriter text={textArray || text} delay={60} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypewriterField;
