import React from "react";
import { useState } from "react";
import { QuestionB } from "../../components/QuestionBox";
import item from "../../data/item.json";
import { useNavigate } from "react-router-dom";

const PronounceBox = (test) => {
  return (
    <>
      <div className="pronunciation-con">
        <h3 className="header">발음은 어떻게 해야할까요?</h3>

        <p>
          <h1> dd </h1>
        </p>
        {test.name}
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
    </>
  );
};

export default PronounceBox;
