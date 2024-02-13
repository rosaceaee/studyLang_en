import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LetterA from "./alphabets/LetterA";
import letters from "../data/letters.json";
import Tutorial from "./Tutorial";

const AlphabetCon = (tt) => {
  const [click, setClick] = useState(null);
  const currLocation = useLocation();
  const navigate = useNavigate();

  const clickEvt = (lettername) => {
    console.log("Clicked letter:", lettername);
    setClick(lettername);
  };
  return (
    <>
      <div className="demo-con alpha">
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <h1>알파벳 목록</h1>
        <Tutorial name={tt} />

        <div className="alphabet-lists">
          {letters.letter.map((letter) => {
            const isClick = click === letter.lettername;
            const className = `box ${isClick ? "acc" : ""}`;
            console.log("Class Name:", className);
            return (
              <div
                className={`box ${click === letters.lettername ? "acc" : ""}`}
                key={letter.id}
              >
                <Link
                  to={{
                    pathname: `./${letter.lettername}`,
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
    </>
  );
};

export default AlphabetCon;
