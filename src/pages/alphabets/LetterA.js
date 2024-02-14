import React from "react";

import { useState, useEffect } from "react";
import { QuestionBox } from "../../components/QuestionBox";
import { useNavigate, useLocation } from "react-router-dom";
import letters from "../../data/letters.json";

const LetterA = () => {
  const [value, setValue] = useState("");
  function handle() {
    return value === "어"
      ? { return: alert("정답입니다!") }
      : { return: alert("다시한번!") };
  }

  const navigate = useNavigate();
  function inputt(e) {
    setObj(e.target.value);
  }
  function handleClick() {
    setList((list) => [...list, obj]);
  }
  const [obj, setObj] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    const storedList = localStorage.getItem("test");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("test", JSON.stringify(list));
    }
  }, [list]);

  const location = useLocation();

  console.log(location.pathname);
  const pathh = location.pathname;

  return (
    <>
      <div className="demo-con alphabet-con">
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        {pathh ? console.log("yes" + pathh) : console.log("no")}

        {letters.letter
          .filter((word) => word.lettername.startsWith("A"))
          .map((item) => {
            return (
              <>
                {" "}
                <h1>{item.lettername}</h1>
                <div className="pronunciation-con">
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
                <div className="practice-con">
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
                        <div className="practice-wrap">
                          <p key={index}>{ii}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div>
                  <input type="text" value={obj} onChange={inputt}></input>
                  <button type="submit" onClick={handleClick}>
                    basdfdsafb
                  </button>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default LetterA;
