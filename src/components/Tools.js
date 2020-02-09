
import W1 from "./winLoseImages/win1.jpg";
import W2 from "./winLoseImages/win2.jpg";
import W3 from "./winLoseImages/win3.jpg";
import W4 from "./winLoseImages/win4.jpg";
import W5 from "./winLoseImages/win5.jpg";
import W6 from "./winLoseImages/win6.png";
import W7 from "./winLoseImages/win7.jpg";
import W8 from "./winLoseImages/win8.jpg";
import W9 from "./winLoseImages/win9.jpg";
import L1 from "./winLoseImages/lose1.jpg";
import L2 from "./winLoseImages/lose2.jpg";
import L3 from "./winLoseImages/lose3.png";

const picWinArray = [W1, W2, W3, W4, W5, W6, W7, W8, W9];
const picLoseArray = [L1, L2, L3];

const words = ["fish", "cat", "walrus", "cabbage", "saaate"];
//create a random number
let generateNumber = (min, max) => {
  return Math.floor(Math.random() * max);
};
//get the random word
export const randomWord = words[generateNumber(0, words.length)];

export const randomWinImage =
  picWinArray[generateNumber(0, picWinArray.length)];
export const randomLoseImage =
  picLoseArray[generateNumber(0, picLoseArray.length)];

export const allKeys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
