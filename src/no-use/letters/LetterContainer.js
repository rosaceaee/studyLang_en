import React from "react";
import { useState } from "react";
import { QuestionB } from "../../components/QuestionBox";
import item from "../../data/item.json";
import { useNavigate } from "react-router-dom";

import PronounceBox from "./PronounceBox";

const LetterContainer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="demo-con alphabet-con">
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <div>
          {item.twooo.map((a, index, array) => (
            <>
              <div>{a.name}</div>
              <h1>{array.name}</h1>
            </>
          ))}
        </div>

        {/* pronounce  */}
        <PronounceBox name="tdddd" />

        {/*  */}
        <div className="practice-con">
          <h3 className="header">단어장.</h3>
        </div>
      </div>
    </>
  );
};

export default LetterContainer;
