import { useEffect, useState } from "react";

const Keyboard = ({ wordsWithSpaces, currentIndex }) => {
  const [key, setKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key.toLowerCase(); // Convert to lowercase for consistency

      if (pressedKey >= "a" && pressedKey <= "z") {
        setKey(pressedKey);

        // Logging key pressed, current word character, and index for debugging
        console.log(pressedKey, wordsWithSpaces[currentIndex], currentIndex);
      }
    };

    const handleKeyUp = () => {
      setKey(null); // Reset the key when the key is released
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup event listeners to avoid memory leaks
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [currentIndex, wordsWithSpaces]);

  const renderKey = (keyChar) => (
    <kbd
      className={`kbd text-3xl ${
        key === keyChar ? "bg-orange-500 text-white"
        //   ? keyChar === wordsWithSpaces[currentIndex]
        //     ? "bg-red-600 text-white" // Incorrect key pressed
        //     : "bg-green-500 text-white" // Correct key pressed
          : "text-black" // Default style for unpressed keys
      }`}
      key={keyChar}
    >
      {keyChar}
    </kbd>
  );

  return (
    <>
      <div>
        <div>
          <div className="my-2 flex w-full justify-center gap-3">
            {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((keyChar) =>
              renderKey(keyChar)
            )}
          </div>
          <div className="my-2 flex w-full justify-center gap-3">
            {["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((keyChar) =>
              renderKey(keyChar)
            )}
          </div>
          <div className="my-2 flex w-full justify-center gap-3">
            {["z", "x", "c", "v", "b", "n", "m"].map((keyChar) =>
              renderKey(keyChar)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
