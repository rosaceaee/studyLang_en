import React from "react";

import { useState, useEffect } from "react";
import { QuestionBox } from "../../components/QuestionBox";
import { useNavigate, useLocation, useMatch } from "react-router-dom";
import letters from "../../data/letters.json";
const LetterA = () => {
  const [value, setValue] = useState("");

  function inputt(e) {
    setObj(e.target.value);
  }
  function handleClick() {
    setList((list) => [...list, obj]);
  }
  const [obj, setObj] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem("a");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("a", JSON.stringify(list));
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

  // tutorial last

  const [tuto, setTuto] = useState(true);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const accentDom = () => {
    setHighlightedIndex((prevIndex) => (prevIndex + 1) % 5);
  };

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
      <div className="demo-con alphabet-con" onClick={accentDom}>
        {tuto && (
          <div className="tutorial-con">
            <div className="tuto-wrap">
              <h1 className="next">다음</h1>
              <button
                className={highlightedIndex === 4 ? " highlighted" : "hide"}
                onClick={ischecked}
              >
                화면 안내 종료
              </button>
            </div>
          </div>
        )}

        <button onClick={() => navigate(-1)}>뒤로가기</button>
        {letters.letter
          .filter((word) =>
            word.lettername.startsWith(isMatchPath.params.pathname)
          )
          .map((item) => {
            return (
              <>
                {" "}
                <h1 className={highlightedIndex === 0 ? "highlighted" : ""}>
                  {item.lettername}
                </h1>
                <div
                  className={
                    highlightedIndex === 1
                      ? "pronunciation-con highlighted"
                      : "pronunciation-con"
                  }
                >
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
                <div
                  className={
                    highlightedIndex === 2
                      ? "practice-con highlighted"
                      : "practice-con"
                  }
                >
                  <h3 className="header">예문을 보며 읽어보기.</h3>
                  <div className="practice-wrap">
                    <h3>
                      <span className="read-eng">A</span>morepacific
                    </h3>
                    <h3 className="read-kor">
                      아 <span className="otherletters"> 모레 퍼시픽</span>
                    </h3>
                  </div>

                  <div className="practice-wrap">
                    <h3>
                      <span className="read-eng">A</span>pple
                    </h3>
                    <h3 className="read-kor">
                      애 <span className="otherletters"> 플</span>
                    </h3>
                  </div>

                  <div className="practice-wrap">
                    <h3>
                      du<span className="read-eng">A</span>l
                    </h3>
                    <h3 className="read-kor">
                      <span className="otherletters"> 듀</span> 어{" "}
                      <span className="otherletters">ㄹ</span>
                    </h3>
                  </div>

                  {list.map((ii, index) => {
                    return (
                      <>
                        <div className="practice-wrap add">
                          <h3 key={index}>{ii}</h3>
                        </div>
                      </>
                    );
                  })}
                </div>{" "}
                <div
                  className={
                    highlightedIndex === 3
                      ? "add-container highlighted"
                      : "add-container"
                  }
                >
                  <div className="add-wrap">
                    <input type="text" value={obj} onChange={inputt}></input>
                    <button type="submit" onClick={handleClick}>
                      입력
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default LetterA;
