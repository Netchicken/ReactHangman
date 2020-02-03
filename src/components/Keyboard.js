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
          usedLetters.includes(key) ? ( //if the letter has been used and is in the array
            <Keys
              letter={"-"}
              Index={KeyIndex++}
              handleEvent={handleEvent}
              disabled={true}
            />
          ) : (
            <Keys
              letter={key.toString()}
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
