//rafc
import React from "react";

const WinLose = ({ outcome }) => {
 // const result = outcome.toString();
  //console.log("result  ", result);
  return (
    <h2>
      {outcome === "hide"
        ? "Playing ..."
        : outcome === "win"
        ? "You Win"
        : outcome === "lose"
        ? "You Lose"
        : "FallBack"}
    </h2>
  );
};
export default WinLose;
