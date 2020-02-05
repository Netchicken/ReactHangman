import React, { Component } from "react";
import "./App.css";
import "./Keyboard.css";
import { randomWord } from "./components/Tools";
import Keyboard from "./components/Keyboard";
import Images from "./components/images";
import WinLose from "./components/WinLose";
export class App extends Component {
  constructor(props) {
    super(props);
    //make items array to hold staff initialized as empty
    this.state = this.initialState;
    this.handleEvent = this.handleEvent.bind(this);
  }
  //Use initialState so yu can reset it for a new game
  initialState = {
    usedLetters: new Set(), //set can only have unique values
    word: "",
    blankArray: [],
    wordArray: [],
    imageNumber: "0",
    winLoseText: "hide"
  };
  componentDidMount() {
    this.startup();
  }

  startup() {
    this.setState(this.initialState); //reset state
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

    this.setState(prevState => ({
      word: tempWord,
      blankArray: tempBlankWord,
      wordArray: Array.from(tempWord),
      //  usedLetters: new Set(), // this.state.usedLetters.add("-") //need this to give something to compare with in keyboard.js otherwise 'includes' error
      imageNumber: "0"
    }));
  }

  handleEvent(e) {
    let key = e.toString();
    console.log("handleInput ", key);
    console.log("handleEvent  state.wordArray ", this.state.wordArray);
    console.log("handleEvent  state.word ", this.state.word);

    // //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

    let tempBlankArray = this.state.blankArray;
    let tempWordArray = Array.from(this.state.word);
    let imageCount = this.state.imageNumber;
    let tempWinLose = "hide";

    if (tempWordArray.includes(key)) {
      tempWordArray.forEach(letter => {
        if (letter.toString() === key) {
          let number = tempWordArray.indexOf(key);
          tempWordArray.splice(number, 1, "-"); //need to get repeating letters
          tempBlankArray.splice(number, 1, key);
          console.log("number ", number);
        }
      });
    } else {
      //   console.log("No match ", typeof key + " " + key);
      imageCount++;
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
    const isNotBlank = currentValue => currentValue !== "_";

    if (tempBlankArray.every(isNotBlank)) {
      tempWinLose = "win";
    }

    if (imageCount === 6) {
      tempWinLose = "lose";
    }

    console.log("tempWinLose ", tempWinLose);
    //https://stackoverflow.com/questions/56328274/how-to-add-or-remove-an-item-from-state-array-in-react
    this.setState(prevState => ({
      blankArray: tempBlankArray,
      usedLetters: this.state.usedLetters.add(key),
      imageNumber: imageCount,
      winLoseText: tempWinLose
    }));
    console.log("usedLetters ", this.state.usedLetters);
    console.log("wordArray ", this.state.wordArray);
    console.log("blankArray ", this.state.blankArray);
  }

  render() {
    return (
      <div className="body container">
        <div className={"columnContainer"}>
          <div className={"leftContainer"}>
            <Images number={this.state.imageNumber} />
            <div className={"winLose"}>
              <WinLose outcome={this.state.winLoseText} />
            </div>
          </div>
          <div className={"middleContainer"}>
            <h1>Hangman</h1>
            <h2> {this.state.blankArray.join(" ")} </h2>

            <button className="btn btn- " onClick={() => this.startup()}>
              Play a new Game
            </button>
          </div>
          <div className={"rightContainer"}>
            <Keyboard
              handleEvent={this.handleEvent}
              usedLetters={this.state.usedLetters}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
