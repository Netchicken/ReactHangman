//rafc
import React from "react";

const WinLose = ({ outcome, word }) => {
  // const result = outcome.toString();
  //console.log("result  ", result);
  return (
    <>
      <span className="winLoseText">
        {outcome === "hide"
          ? "Playing ..."
          : outcome === "win"
          ? "You Win"
          : outcome === "lose"
          ? "You Lose."
          : "FallBack"}
      </span>
      {outcome === "lose" ? (
        <div className="winLoseText">{"The word is " + word} </div>
      ) : (
        ""
      )}
    </>
  );
};
export default WinLose;
