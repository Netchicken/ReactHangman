//rafc
import React from "react";
import { randomWinImage, randomLoseImage } from "./Tools";
import "./Keyboard";

const WinLoseImages = ({ outcome }) => {
  //  console.log("randomWinImage", randomWinImage);
  //  console.log("randomLoseImage", randomLoseImage);
  //  console.log("outcome", outcome.toString());
  //  console.log("L3", L3);

  return (
    <>
      {outcome === "win" ? (
        <img className={"winLoseImage"} src={randomWinImage()} alt="hangman" />
      ) : outcome === "lose" ? (
        <img className={"winLoseImage"} src={randomLoseImage()} alt="hangman" />
      ) : (
        "  "
      )}
    </>
  );
};
export default WinLoseImages;
