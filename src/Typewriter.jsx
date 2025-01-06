import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    if (currentIndex < text?.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
    // if (currentIndex >= text?.length) {
    //   currentText = "";
    // }
  }, [currentIndex, delay, text]);

  return <span className="">{currentText}</span>;
};

export default Typewriter;
