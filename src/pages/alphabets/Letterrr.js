import React from "react";

import { useState, useEffect, useContext, createContext } from "react";
import {
  useNavigate,
  useLocation,
  useMatch,
  useParams,
  Link,
} from "react-router-dom";
import { Contextt } from "./LetterNew";
import letters from "../../data/letters.json";

const Letterrr = (props) => {
  const [obj, setObj] = useState("");
  const [list, setList] = useState([]);
  //const { obj, setObj, list, setList } = useContext(Contextt);
  const { params, lettername, id } = useParams();

  const letter = letters.letter.find((item) => item.lettername === lettername);
  const pronounce = letter ? letter.pronounce : null;
  const eachKey = letter ? letter.id : null;

  function inputt(e) {
    setObj(e.target.value);
  }
  function handleClick() {
    if (obj === "") {
      return;
    }
    return setList((list) => [...list, obj], setObj(""));
  }

  useEffect(() => {
    const storedList = localStorage.getItem(lettername);
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem(lettername, JSON.stringify(list));
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
    localStorage.setItem(lettername, JSON.stringify(updatedList));
  };
  return (
    <>
      {" "}
      <div className="demo-con alphabet-con">
        <button onClick={() => navigate(-1)}>뒤로가기</button>
        <h1 className="letter">{lettername}</h1>
        <div className="pronunciation-con" key={eachKey}>
          <div className="pronunciation-wrap">
            <h3 className="header">발음은 어떻게 해야할까요?</h3>
            <div className="pron-list">
              {[...pronounce].map((item, index) => {
                return (
                  <div key={index}>
                    <h3>{pronounce[index]}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="practice-con">
          {" "}
          <h3 className="header">단어장.</h3>
          <div className="practice-wrap">
            <h3>아래에 단어를 추가해보세요</h3>
          </div>
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
        </div>
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
      </div>
    </>
  );
};

export default Letterrr;
