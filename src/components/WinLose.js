//rafc
import React from "react";

const WinLose = ({ outcome }) => {
 // const result = outcome.toString();
  //console.log("result  ", result);
  return (
    <span className="winLoseText">
      {outcome === "hide"
        ? "Playing ..."
        : outcome === "win"
        ? "You Win"
        : outcome === "lose"
        ? "You Lose"
        : "FallBack"}
    </span>
  );
};
export default WinLose;
