import { useState, useEffect, useContext, createContext } from "react";

import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import {
  useNavigate,
  useLocation,
  useMatch,
  useParams,
} from "react-router-dom";
import { gsap } from "gsap";

function Ani() {
  useEffect(() => {
    const move = () => {
      gsap.to(".grass-con.top", { y: -1000, duration: 1, delay: 1 });
      gsap.to(".grass-con.btm", { y: 1000, duration: 1, delay: 2 });
      gsap.to(".demo-con.start .wrap", { opacity: 0, duration: 1, delay: 3 });
    };
    move();
  }, []);
  return null;
}

const Content = () => {
  const [ani, setAni] = useState(false);
  const navi = useNavigate();

  const Anii = () => {
    setAni(true);
    setTimeout(() => {
      navi("./letterlist");
    }, 3500);
  };
  return (
    <>
      <div className="demo-con start">
        <div className="grass-con top"></div>
        <div className="grass-con btm"></div>

        <div className="for-pc">
          <h1>스마트폰 가로모드에서만 확인할 수 있습니다.</h1>
          <h1>Sorry. Only available in mobile phone landscape view. </h1>
        </div>

        <div className="wrap">
          <h1>영어 읽기 연습</h1> <span>아래 하얀색 네모를 누르세요.</span>
          <h1 className="startBtn" onClick={Anii}>
            <Link>시작</Link>
          </h1>{" "}
          {ani && <Ani />}
        </div>
      </div>
    </>
  );
};

export default Content;
