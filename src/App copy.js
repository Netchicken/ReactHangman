import React, { useState } from "react";
import "./App.css";
import "./Keyboard.css";
import { randomWord } from "./components/Tools";
import Keyboard from "./components/Keyboard";

//https://www.robinwieruch.de/react-function-component

function App() {
  const [state, setState] = useState({
    usedLetters: new Set(), //set can only have unique values
    word: "",
    blankArray: [],
    wordArray: []
  });
  const startup = () => {
    let tempWord = "";
    let tempBlankWord = [];

    if (randomWord == null) {
      tempWord = "notworking";
    } else {
      tempWord = randomWord.toLowerCase();
    }
    console.log("randomWord", tempWord);

    for (let index = 0; index < tempWord.length; index++) {
      tempBlankWord.push("_");
    }
    console.log("startup tempBlankWord", tempBlankWord);

    setState(prevState => ({
      word: tempWord,
      blankArray: [...prevState.blankArray, tempBlankWord],
      wordArray: Array.from(tempWord),
      usedLetters: state.usedLetters.add("-") //need this to give something to compare with in keyboard.js otherwise 'includes' error
    }));
  };

  //https://reactjs.org/docs/faq-functions.html
  const handleEvent = e => {
    let key = e.toString();
    console.log("handleInput ", key);
    console.log("handleEvent  state.wordArray ", state.wordArray);
    console.log("handleEvent  state.word ", state.word);

    // //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
    // const checkWordForLetter = key => {
    let tempBlankArray = state.blankArray; //make a temp to  save time in savestate
    let tempWordArray = Array.from(state.word);
   // console.log("1 tempBlankArray ", tempBlankArray);
    if (tempWordArray.includes(key)) {


      tempWordArray.forEach(letter => {
        //   console.log(" letter ", typeof(letter) + " " + letter);
        if (letter.toString() === key) {
          let number = tempWordArray.indexOf(key);
        //  tempBlankArray.splice(number, 1, key);
          console.log("number ", number);
        }
      });
    } else {
      console.log("No match ", typeof key + " " + key);
    }
    console.log("2 tempBlankArray ", tempBlankArray);
    console.log("tempWordArray ", tempWordArray);
    //https://stackoverflow.com/questions/56328274/how-to-add-or-remove-an-item-from-state-array-in-react
    setState(prevState => ({
      blankArray :tempBlankArray,
      usedLetters: state.usedLetters.add(key)
    }));
    console.log("usedLetters ", state.usedLetters);
    console.log("wordArray ", state.wordArray);
    console.log("blankArray ", state.blankArray);
  };

  return (
    <div className="body">
      <h1>The Hangman App</h1>

      <h2> {state.blankArray.join(" ")} </h2>

      <button className="btn btn- " onClick={() => startup()}>
        Play a new Game
      </button>
      <Keyboard handleEvent={handleEvent} usedLetters={state.usedLetters} />
    </div>
  );
}

export default App;
