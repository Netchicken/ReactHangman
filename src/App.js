import React, { Component } from "react";
import "./App.css";
import "./Keyboard.css";
import { randomWord } from "./components/Tools";
import Keyboard from "./components/Keyboard";
import Images from "./components/images";
import WinLose from "./components/WinLose";
import { TurnOperation } from "./components/GameProcessing";
import WinLoseImages from "./components/WinLoseImages";
export class App extends Component {
  constructor(props) {
    super(props);
    //make items array to hold staff initialized as empty
    this.state = this.initialState;
    this.handleEvent = this.handleEvent.bind(this);
  }
  //Use initialState so you can reset it for a new game
  initialState = {
    usedLetters: new Set(), //set can only have unique values
    word: "",
    blankArray: [],
    wordArray: [],
    imageNumber: 1, //..no start number not an image
    winLoseText: "hide"
  };
  componentDidMount() {
    this.startup();
  }

  startup() {
    this.setState(this.initialState); //reset state
    let tempWord = "";
    let tempBlankWordArray = [];
    this.state.usedLetters.clear(); //empty the set
    if (randomWord == null) {
      tempWord = "notworking";
    } else {
      tempWord = randomWord().toLowerCase();
    }
    console.log("randomWord", tempWord);

    for (let index = 0; index < tempWord.length; index++) {
      tempBlankWordArray.push("_");
    }
    console.log("startup tempBlankWordArray", tempBlankWordArray);

    this.setState(prevState => ({
      word: tempWord,
      blankArray: tempBlankWordArray,
      wordArray: Array.from(tempWord),
      imageNumber: 0
    }));
  }

  async handleEventModule(e) {
    let key = e.toString();

    let returnArray = TurnOperation(key, this.state);

    await this.updateStateBeforeLoading(key, returnArray);
    // let newStateObj = newStateMap;// Object.fromEntries(newStateMap); // make a plain object (*)
  }
  updateStateBeforeLoading(key, returnArray) {
    this.setState = prevState => ({
      ...prevState,
      blankArray: returnArray.blankArray,
      ...prevState,
      usedLetters: this.state.usedLetters.add(key),
      ...prevState,
      imageNumber: returnArray.imageCount,
      ...prevState,
      winLoseText: returnArray.winLoseText
    });

    console.log("usedLetters ", this.state.usedLetters);
    console.log("imageNumber ", this.state.imageNumber);
    console.log("blankArray ", this.state.blankArray);
  }

  handleEvent(e) {
    let key = e.toString();
    console.log("handleEvent blankArray ", this.state.blankArray);
    console.log("handleEvent  state.wordArray ", this.state.wordArray);
    console.log("handleEvent  state.word ", this.state.word);
    console.log("handleEvent  state.usedLetters ", this.state.usedLetters);
    console.log("handleEvent  state.imageNumber ", this.state.imageNumber);
    console.log("handleEvent  state.winLoseText ", this.state.winLoseText);
    // }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

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
    //no more underscores, you win
    if (tempBlankArray.every(isNotBlank)) {
      tempWinLose = "win";
    }
    //no more images, you lose
    if (imageCount === 7) {
      tempWinLose = "lose";
      tempBlankArray = Array.from(this.state.word);
      //todo show word when you lose.
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
      <div className="container">
        <header className="header">
          <div className="title">
            <h1>Simple Hangman</h1>
          </div>
        </header>

        <div className={"main"}>
          <span className={"winLose"}>
            <WinLose outcome={this.state.winLoseText} word={this.state.word} />
            <Images number={this.state.imageNumber} />
          </span>
        </div>

        <div className={" aside aside-1"}>
          <h2 className="guessLetters"> {this.state.blankArray.join(" ")} </h2>

          <button className="playButton " onClick={() => this.startup()}>
            Play a new Game
          </button>
          <Keyboard
            handleEvent={this.handleEvent}
            usedLetters={this.state.usedLetters}
          />
        </div>
        <div className={"aside aside-2"}>
          <WinLoseImages outcome={this.state.winLoseText} />
        </div>
        <footer class="footer"></footer>
      </div>
    );
  }
}

export default App;
