//rafc
import React from "react";
import Keys from "./Keys";
import { allKeys } from "./Tools";

const Keyboard = ({ handleEvent, usedLetters }) => {
  let KeyIndex = 1; //create an index
  return (
    <div className="keyboard-container">
      {/* <button onClick={() => handleEvent("Keyboard")}>Keyboard</button> */}
      <ul>
        {allKeys.map(key =>
          usedLetters.has(key) ? ( //if the letter has been used and is in the array
            <Keys
              letter={"-"}
              key={KeyIndex++}
              Index={KeyIndex++}
              handleEvent={handleEvent}
              disabled={true}
            />
          ) : (
            <Keys
              letter={key.toString()}
              key={KeyIndex++}
              Index={KeyIndex++}
              handleEvent={handleEvent}
              disabled={false}
            />
          )
        )}
      </ul>
    </div>
  );
};
export default Keyboard;
