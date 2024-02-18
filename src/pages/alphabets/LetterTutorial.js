import React from "react";
import { useState, useEffect } from "react";
import { QuestionBox } from "../../components/QuestionBox";
import { useNavigate, useLocation, useMatch } from "react-router-dom";
import letters from "../../data/letters.json";
const LetterTutorial = () => {
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

  useEffect(() => {}, []);

  function accentDom() {
    setHighlightedIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % 5;

      if (highlightedIndex === 4) {
        navigate("../letterlist");
        localStorage.setItem("checked", true);
      }

      if (newIndex === 0 && tuto) {
        setHighlightedIndex(null);
      }
      return newIndex;
    });
  }

  useEffect(() => {
    const localsto = localStorage.getItem("checked");
    if (localsto) {
      setTuto(false);
    }
  }, []);

  const ischecked = () => {
    localStorage.setItem("checked", true);
  };

  return (
    <>
      <div className="demo-con alphabet-con" onClick={accentDom}>
        {tuto && (
          <div className="tutorial-con">
            <div className="tuto-wrap">
              {" "}
              <h3
                style={{
                  width: "100%",
                  position: "relative",
                  textAlign: "center",
                  background: "beige",
                }}
              >
                화면을 누르면 다음 안내문이 나타납니다.
              </h3>
              <button
                className={highlightedIndex === 4 ? " highlighted" : "hide"}
                onClick={ischecked}
              >
                화면 안내 종료
              </button>
            </div>

            {letters.letter
              .filter((sampleitm) => sampleitm.lettername === "A")
              .map((item) => {
                return (
                  <>
                    {" "}
                    <h1 className={highlightedIndex === 0 ? "highlighted" : ""}>
                      {item.lettername}
                    </h1>
                    <div
                      className={
                        "pronunciation-con timid" +
                        (highlightedIndex === 1 ? " highlighted" : "")
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
                          : "practice-con timid"
                      }
                    >
                      <h3 className="header">단어장.</h3>
                      <div
                        className={
                          highlightedIndex === 2
                            ? "practice-wrap highlighted"
                            : "practice-wrap"
                        }
                      >
                        <h3>
                          <span className="read-eng">A</span>morepacific
                        </h3>
                        <h3 className="read-kor">
                          아 <span className="otherletters"> 모레 퍼시픽</span>
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
                          : "add-container timid"
                      }
                    >
                      <div className="add-wrap">
                        {" "}
                        <h3>단어를 입력해보세요</h3>
                        <div className="wrap">
                          <input
                            type="text"
                            value={obj}
                            onChange={inputt}
                          ></input>
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
        )}
      </div>
    </>
  );
};

export default LetterTutorial;
