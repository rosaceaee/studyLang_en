import React from "react";
import { useState, useEffect } from "react";
import { QuestionBox } from "../../components/QuestionBox";
import { useNavigate, useLocation, useMatch } from "react-router-dom";

const sampleword = [
  {
    id: 0,
    lettername: "A",
    pronounce: ["아", "애", "어"],
  },
];
const LetterTutorial = () => {
  const [obj, setObj] = useState("");
  const [list, setList] = useState([]);

  const [tuto, setTuto] = useState(true);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [tutoChk, setTutoChk] = useState(["chk-tutorial-done"]);

  function inputt(e) {
    if (e.target.value !== "") {
      setObj(e.target.value);
    }
    //
  }

  useEffect(() => {
    const storedList = localStorage.getItem("test");
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

  function click() {
    setList((list) => [...list, obj]);
    setHighlightedIndex(list.length + 2 && tuto);
    localStorage.setItem(tutoChk, true);
    //console.log(tutoChk);
  }

  // tutorial last
  function accentDom() {
    setHighlightedIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % 5;

      if (newIndex === 4 && tuto) {
        return prevIndex;
      } else if (newIndex > 5) {
        return newIndex;
      }

      return newIndex;
    });
  }

  const Beww = () => {
    const ischecked = () => {
      navigate("../letterlist");
      localStorage.setItem("checked", true);
    };
    switch (highlightedIndex) {
      case 0:
        return (
          <>
            <span className="number">{highlightedIndex + 1}</span> 학습
            알파벳입니다.
            <span className="annai">화면을 누르면 다음으로 넘어갑니다.</span>
          </>
        );
        break;
      case 1:
        return (
          <>
            <span className="number">{highlightedIndex + 1}</span> 알파벳을 읽는
            한글입니다
          </>
        );
        break;
      case 2:
        const newChk2 = localStorage.getItem(tutoChk, false);
        // setTutoChk(newChk2);

        return (
          <>
            {!newChk2 ? (
              <>
                <span className="number">{highlightedIndex + 1}</span>
                <span>
                  학습 단어 읽는 연습을 합니다. 아래에 단어를 추가하여 메모할 수
                  있습니다. 보이지 않을 경우 화면을 아래로 내려보세요.
                </span>
              </>
            ) : (
              <>
                <span className="number">{highlightedIndex + 3}</span>
                <span>이렇게 단어장에 추가됩니다.</span>
                <button
                  className={
                    highlightedIndex ? "finishBtn highlighted" : "hide"
                  }
                  onClick={ischecked}
                >
                  화면 안내 종료
                </button>
              </>
            )}
          </>
        );

      case 3:
        return (
          <>
            <span className="number">{highlightedIndex + 1}</span>하얀색 네모에
            입력해보세요.
          </>
        );

      default:
        break;
    }
  };
  useEffect(() => {
    const localsto = localStorage.getItem("checked");
    if (localsto) {
      setTuto(false);
    }
  }, []);

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
                  background: "rgb(157 220 207)",
                }}
              >
                {" "}
                <span className="explain-wrap">
                  <Beww />
                </span>
              </h3>
            </div>

            {sampleword.map((item) => {
              return (
                <>
                  {" "}
                  <h1
                    className={
                      "letter timid" +
                      (highlightedIndex === 0 ? " highlighted" : "")
                    }
                  >
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
                      <div className="pron-list">
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
                  </div>
                  <div
                    className={
                      highlightedIndex === 2
                        ? "practice-con highlighted"
                        : "practice-con timid"
                    }
                  >
                    <h3 className="header">단어장.</h3>

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
                          //value={obj}
                          onChange={inputt}
                          className={
                            highlightedIndex === 3
                              ? "input-highlight highlighted"
                              : "timid"
                          }
                        ></input>
                        <button type="submit" onClick={click}>
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
