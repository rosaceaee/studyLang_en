import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LetterA from "./alphabets/LetterA";
import letters from "../data/letters.json";
import Tutorial from "./Tutorial";

const AlphabetCon = (tt) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="demo-con alpha">
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <h1>알파벳 목록</h1>
        <p>처음에 튜토리얼 모달 하나 띄어봅시다..</p>
        <Tutorial name={tt} />

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
