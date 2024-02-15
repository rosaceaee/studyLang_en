import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Tutorial from "./Tutorial";
import letters from "../data/letters.json";

import LetterA from "./alphabets/LetterA";
import LetterB from "./alphabets/LetterB";
const componentMapping = {
  "/A": LetterA,
  "/B": LetterB,
  // Add other pathnames and corresponding components here
};

const AlphabetCon = (tt) => {
  const [click, setClick] = useState(null);
  const currLocation = useLocation();
  const navigate = useNavigate();

  const clickEvt = (lettername) => {
    console.log("Clicked letter:", lettername);
    setClick(lettername);
  };

  return (
    <div className="demo-con alpha">
      {" "}
      <h1>알파벳 목록</h1>
      <Tutorial name={tt} />
      <div className="alphabet-lists">
        {letters.letter.map((letter) => {
          const isClick = click === letter.lettername;
          const className = `box ${isClick ? "acc" : ""}`;
          console.log("Class Name:", className);
          return (
            <div className={className} key={letter.id}>
              <Link
                to={{
                  pathname: `/${letter.lettername}`,
                  state: { from: currLocation.pathname },
                }}
                onClick={() => clickEvt(letter.lettername)}
              >
                {letter.lettername}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlphabetCon;
