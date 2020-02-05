import React from "react";
// <button onClick={() =>  handleInput() }>{letter.toLowerCase()}</button>

const Keys = ({ letter, Index, handleEvent, disabled }) => {
  //let  letters = letter;
 // console.log(disabled);
  return (
    <span>
      <li>
        <button onClick={() => handleEvent(letter)} disabled={disabled} key ={Index}>{letter}</button>
      </li>
      {Index === 7 || Index === 18 ? <div></div> : ""}
    </span>
  );
};
export default Keys;
