import React from "react";

import { useState, useEffect, useContext, createContext } from "react";
import {
  useNavigate,
  useLocation,
  useMatch,
  useParams,
  Link,
} from "react-router-dom";
import { Contextt } from "./LetterNew";
import letters from "../../data/letters.json";

const Letterrr = (props) => {
  const { obj, setObj, list, setList } = useContext(Contextt);
  const { params, lettername } = useParams();

  const letter = letters.letter.find((item) => item.lettername === lettername);
  const pronounce = letter ? letter.pronounce : null;

  return (
    <>
      <h2>{lettername}</h2>
      <h1>Pronounce: {pronounce}</h1>
    </>
  );
};

export default Letterrr;
