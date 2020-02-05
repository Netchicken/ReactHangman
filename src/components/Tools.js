const words = ["fish", "cat", "walrus", "cabbage", "saaate"];
//create a random number
let generateNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
//get the random word
export const randomWord = words[generateNumber(0, words.length)];
//export const randomWordLength = randomWord.length;

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
