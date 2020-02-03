import React, { useState } from "react";
import "./App.css";
import "./Keyboard.css";
//import { allKeys } from './components/Tools';
import Keyboard from "./components/Keyboard";

function App() {
  const [state, setState] = useState({
    usedLetters: []
  });

  // => does the binding with the button

  //https://reactjs.org/docs/faq-functions.html
  const handleEvent = e => {
    let key = e; //.target.value;
    //alert("I was clicked ", key);
    console.log("handleInput ", key);

    setState(prevState => ({
      //https://stackoverflow.com/questions/56328274/how-to-add-or-remove-an-item-from-state-array-in-react
      usedLetters: [...prevState.usedLetters, key]
    }));

    console.log("usedLetters ", state.usedLetters);
  };
  let letter = "App.js";

  return (
    <div>
      <h1>The Hangman App</h1>
      <button onClick={() => handleEvent({ letter })}>{letter}</button>

      <Keyboard handleEvent={handleEvent} usedLetters={state.usedLetters} />
    </div>
  );
}

export default App;
