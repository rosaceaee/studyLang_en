import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
const LastTutorial = () => {
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
        <div className="tutorial-con">
          <div className="tuto-wrap">
            <button onClick={ischecked}>확인했습니다.</button>
          </div>
        </div>
      )}
    </>
  );
};

export default LastTutorial;
