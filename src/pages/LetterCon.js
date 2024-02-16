import React from "react";

import { useState } from "react";
import { QuestionBox } from "../components/QuestionBox";
import { useNavigate, useLocation } from "react-router-dom";
import letters from "../data/letters.json";

const LetterCon = () => {
  const [value, setValue] = useState("");
  function handle() {
    return value === "어"
      ? { return: alert("정답입니다!") }
      : { return: alert("다시한번!") };
  }

  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const location = useLocation();

  console.log(location);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuestionBox.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="demo-con alphabet-con">
        <button onClick={() => navigate(-1)}>뒤로가기</button>

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
                  <h3 className="header">단어장.</h3>
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
                </div>
              </>
            );
          })}

        <div className="letter-test-con objective">
          {showScore ? (
            <section className="showScore-section">
              {QuestionBox.length}개 중에서 {score}개나 맞추셨네요!
            </section>
          ) : (
            <>
              <section className="question-section">
                <h1 style={{ marginLeft: "auto" }}>
                  문제 {currentQuestion + 1}/{QuestionBox.length}
                </h1>
                <p>{QuestionBox[currentQuestion].questionText}</p>
              </section>

              <section className="answer-section">
                {QuestionBox[currentQuestion].answerOptions.map((item) => (
                  <button onClick={() => handleClick(item.isCorrect)}>
                    {item.answerText}
                  </button>
                ))}
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LetterCon;
