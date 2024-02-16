import React from "react";

import { useState, useEffect } from "react";
import { QuestionBox } from "../../components/QuestionBox";
import { useNavigate, useLocation, useMatch } from "react-router-dom";
import letters from "../../data/letters.json";
const LetterZ = () => {
  function inputt(e) {
    setObj(e.target.value);
  }
  function handleClick() {
    setList((list) => [...list, obj]);
  }
  const [obj, setObj] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem("z");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("z", JSON.stringify(list));
    }
  }, [list]);

  const navigate = useNavigate();
  const location = useLocation();

  const pathh = location.pathname;

  const isMatchPath = useMatch("/:pathname");

  useEffect(() => {
    if (isMatchPath) {
      console.log(isMatchPath.params.pathname);
    }
  }, []);

  const removebtn = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
    localStorage.setItem("a", JSON.stringify(updatedList));
  };
  return (
    <>
      <div className="demo-con alphabet-con">
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        {letters.letter
          .filter((word) =>
            word.lettername.startsWith(isMatchPath.params.pathname)
          )
          .map((item) => {
            return (
              <>
                {" "}
                <h1>{item.lettername}</h1>
                <div className="pronunciation-con">
                  <div className="pronunciation-wrap">
                    <h3 className="header">발음은 어떻게 해야할까요?</h3>
                    <div>
                      <h3>{item.pronounce[0]}</h3>
                    </div>
                    <div>
                      <h3>{item.pronounce[1]}</h3>{" "}
                    </div>
                    <div>
                      <h3>{item.pronounce[2]}</h3>
                    </div>
                  </div>
                </div>
                <div className="practice-con">
                  <h3 className="header">예문을 보며 읽어보기.</h3>

                  {list.map((ii, index) => {
                    return (
                      <>
                        <div className="practice-wrap add">
                          <h3 key={index}>{ii}</h3>
                          <button onClick={() => removebtn(index)}>삭제</button>
                        </div>
                      </>
                    );
                  })}
                </div>{" "}
                <div className="add-container">
                  <div className="add-wrap">
                    {" "}
                    <h3>단어를 입력해보세요</h3>
                    <div className="wrap">
                      <input type="text" value={obj} onChange={inputt}></input>
                      <button type="submit" onClick={handleClick}>
                        입력
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default LetterZ;
