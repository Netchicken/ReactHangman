import React from "react";

import H0 from "./images/Hanged0.png";
import H1 from "./images/Hanged1.png";
import H2 from "./images/Hanged2.png";
import H3 from "./images/Hanged3.png";
import H4 from "./images/Hanged4.png";
import H5 from "./images/Hanged5.png";
import H6 from "./images/Hanged6.png";

const picArray = [H0, H1, H2, H3, H4, H5, H6];

const images = ({ number }) => {
  console.log("image name", picArray[number]);
  return <img height="100" width="80" src={picArray[number]} alt="hangman" />;
};

export default images;
