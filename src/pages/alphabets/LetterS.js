import React from "react";

import { useState } from "react";
import { QuestionS } from "../../components/QuestionBox";
import letters from "../../data/letters.json";
import { useNavigate } from "react-router-dom";

const LetterS = () => {
  const [value, setValue] = useState("");
  function handle() {
    return value === "어"
      ? { return: alert("정답입니다!") }
      : { return: alert("다시한번!") };
  }

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuestionS.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const navigate = useNavigate();
  const onCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="demo-con alphabet-con">
        <button onClick={() => navigate(-1)}>뒤로가기</button>

        <div>
          {/*
          {letters.letter.map((letter) => (
            <h1 key={letter.id} className="letter">
              {letter.lettername}
            </h1>
          ))} */}
          <h1>S</h1>
        </div>

        <div className="pronunciation-con">
          <h3 className="header">발음은 어떻게 해야할까요?</h3>
          <div>
            <h3>1. 아</h3>
          </div>
          <div>
            <h3>2. 애</h3>
          </div>
          <div>
            <h3>3. 어</h3>
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
        </div>

        <div className="letter-test-con jugwansick">
          <div>Apple로 맞는 것은?</div>
          <div>
            <input
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="정답을 입력하세용"
            />
            <button onClick={handle}>제출</button>
          </div>
        </div>

        <div className="letter-test-con objective">
          {showScore ? (
            <section className="showScore-section">
              {QuestionS.length}개 중에서 {score}개나 맞추셨네요!
            </section>
          ) : (
            <>
              <section className="question-section">
                <h1 style={{ marginLeft: "auto" }}>
                  문제 {currentQuestion + 1}/{QuestionS.length}
                </h1>
                <p>{QuestionS[currentQuestion].questionText}d</p>
              </section>

              <section className="answer-section">
                {QuestionS[currentQuestion].answerOption.map((i) => (
                  <button onClick={() => handleClick(i.isCorrect)}>
                    {i.answerText}
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

export default LetterS;
