"use client";
import Keyboard from "@/components/Practice/Keyboard";
import Navbar from "@/components/Shared/Navbar";

import { useEffect, useState } from "react";

const TypingPractice = () => {
  const [text] = useState(
    "one day while walking deeper into the forest than ever before jake stumbled upon a hidden path it was covered in leaves and seemed like no one had walked on it for years curious he followed the path as it wound"
    // deeper and deeper into the woods the trees grew thicker and the sunlight barely touched the ground but jake wasnt scared he was excited"
  ); // Text to be typed

  const [currentIndex, setCurrentIndex] = useState(0); // Current index of text
  const [startTime, setStartTime] = useState(null); // Time when typing starts
  const [correctCount, setCorrectCount] = useState(0); // Count of correct characters
  const [incorrectCount, setIncorrectCount] = useState(0); // Count of incorrect characters
  const [elapsedTime, setElapsedTime] = useState(0); // Total time taken in minutes

  const [userArray, setUserArray] = useState([]); // To store user input

  const wordsWithSpaces = text.split(""); // Splitting text into characters including spaces

  const closeButton = () => {
    setCurrentIndex(0);
    setStartTime(null);
    setCorrectCount(0);
    setIncorrectCount(0);
    setElapsedTime(0);
    setUserArray([]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;

      if (currentIndex === 0 && !startTime) {
        setStartTime(new Date()); // Start time when user starts typing
      }

      if (currentIndex + 1 === text.length) {
        const endTime = new Date();
        const timeDiffInMinutes = (endTime - startTime) / 60000; // Time in minutes
        setElapsedTime(timeDiffInMinutes);

        // Open the modal
        document.getElementById("my_modal_5").showModal();
      }

      // Handle typing of characters
      if (
        ((key >= "a" && key <= "z") || key === " ") &&
        wordsWithSpaces.length > currentIndex
      ) {
        setUserArray((prevArray) => [...prevArray, key]);

        if (key === wordsWithSpaces[currentIndex]) {
          setCorrectCount((prevCount) => prevCount + 1); // Correct character
        } else {
          setIncorrectCount((prevCount) => prevCount + 1); // Incorrect character
        }

        setCurrentIndex((prevIndex) => prevIndex + 1);

        if (key === " ") {
          event.preventDefault();
        }
      } else if (key === "Backspace") {
        event.preventDefault();
        setUserArray((prevArray) => prevArray.slice(0, -1));
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, text, startTime]);

  return (
    <div className="min-h-screen">
      <div className="text-black border-b">
        <Navbar />
      </div>
      <div className="z-[0] max-w-5xl mx-auto text-gray-500 text-center">
        <div className="p-6 space-y-8">
          <div className="">
            {/* Modal for showing results */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Typing Practice Results</h3>
                <p className="py-4 text-xl text-center">
                  Time taken: {elapsedTime.toFixed(2)} minutes <br />
                  Correct characters: {correctCount} <br />
                  Incorrect characters: {incorrectCount}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button
                      onClick={() => {
                        closeButton();
                      }}
                      className="btn"
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* Display the text to be typed with highlighting */}
            <div className="mt-5 text-3xl">
              {wordsWithSpaces.map((char, index) => (
                <span
                  key={index}
                  className={
                    index < userArray.length
                      ? userArray[index] === char
                        ? "text-green-500" // Correctly typed character
                        : "text-red-500" // Incorrectly typed character
                      : "text-black" // Characters not yet typed
                  }
                >
                  {char}
                </span>
              ))}
            </div>
          </div>
          {/* Keyboard component */}
          <Keyboard
            wordsWithSpaces={wordsWithSpaces}
            currentIndex={currentIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default TypingPractice;
