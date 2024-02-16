import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
const Tutorial = (tt) => {
  const [tuto, setTuto] = useState(true);

  useEffect(() => {
    const localsto = localStorage.getItem("checked");
    if (localsto) {
      setTuto(false);
    }
  }, []);

  const ischecked = () => {
    localStorage.setItem("checked", true);
    setTuto(false);
  };
  return (
    <>
      {tuto && (
        <div className="tutorial-con first">
          <div className="tuto-wrap">
            <h1 className="first">사용법 안내드립니다.</h1>
            <div className="box">
              <span className="white">하얀색 네모</span>를 누르면 알파벳과
              관련된 단어를 확인할 수 있습니다.{" "}
              <Link to="/lettertuto">다음</Link>
            </div>
            {/*  <button onClick={ischecked}>확인했습니다.</button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Tutorial;
