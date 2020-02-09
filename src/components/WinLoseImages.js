//rafc
import React from "react";
import L3 from "./winLoseImages/lose3.png";
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
        <img src={randomWinImage} alt="hangman" />
      ) : outcome === "lose" ? (
        <img className={"winLoseImage"} src={randomLoseImage} alt="hangman" />
      ) : (
        "  "
      )}
    </>
  );
};
export default WinLoseImages;
