import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import KeyboardInner from "../components/KeyboardInner";
import AlphabetCon from "./AlphabetCon";
const Content = () => {
  return (
    <>
      <div className="demo-con">
        <div className="grass-con top"></div>
        <div className="grass-con btm"></div>

        <div className="wrap">
          <h1>영어 읽기 연습</h1>
          <h1 className="startBtn">
            <Link to="./letterlist"> 시작</Link>
          </h1>
          {/* <KeyboardInner /> */}
        </div>
      </div>
    </>
  );
};

export default Content;
