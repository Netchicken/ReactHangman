// export function GenerateRND() {
//   const min = 0 + 5; //5 is to stop out of bound errors
//   const max = 26731 - 5; //26731
//   const rnd = Math.floor(Math.random() * (max - min + 1) + min);
//   console.log("rnd " + rnd);
//   return rnd;
// }
// export function WinLose(text) {
//   return text;
// }
export function TurnOperation(e, state) {
  let key = e.toString();
  console.log("turn Op handleInput ", key);
  console.log("turn Op handleEvent  state.wordArray ", state.wordArray);
  console.log("turn Op handleEvent  state.word ", state.word);

  // //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of

  let tempBlankArray = state.blankArray;
  let tempWordArray = Array.from(state.word);
  let imageCount = state.imageNumber;
  let tempWinLose = "hide";

  if (tempWordArray.includes(key)) {
    tempWordArray.forEach(letter => {
      if (letter.toString() === key) {
        let number = tempWordArray.indexOf(key);
        tempWordArray.splice(number, 1, "-"); //need to get repeating letters
        tempBlankArray.splice(number, 1, key);
        console.log("turn Op number ", number);
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
  }

  console.log("turn Op tempWinLose ", tempWinLose);
  //https://stackoverflow.com/questions/56328274/how-to-add-or-remove-an-item-from-state-array-in-react
  // setState(prevState => ({
  //   blankArray: tempBlankArray,
  //   usedLetters: state.usedLetters.add(key),
  //   imageNumber: imageCount,
  //   winLoseText: tempWinLose
  // }));

  let newState = new Map();

  newState.set("blankArray", tempBlankArray);
  newState.set("usedLetters", state.usedLetters.add(key));
  newState.set("imageCount", imageCount);
  newState.set("tempWinLose", tempWinLose);

  console.log("turn Op  newState usedLetters ", newState.get("usedLetters"));
  console.log("turn Op wordArray ", state.wordArray);
  console.log("turn Op newState blankArray ", newState.get("blankArray"));
   console.log("turn Op imageCount ", state.imageCount);
  // let usedLetters = state.usedLetters.add(key);
  let returnArray = { tempBlankArray, imageCount, tempWinLose };

  return state;
}
