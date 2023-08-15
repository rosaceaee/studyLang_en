import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import LetterA from "./alphabets/LetterA";
import letters from "../data/letters.json";

const AlphabetCon = () => {
  return (
    <>
      <div className="demo-con alpha">
        <Link href="javascript: window.history.back();">뒤로</Link>
        <h1>알파벳 목록</h1>

        <div className="alphabet-lists">
          {letters.letter.map((letter) => (
            <div className="box">
              <Link
                to={{
                  pathname: `./${letter.lettername}`,
                }}
              >
                {letter.lettername}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlphabetCon;
