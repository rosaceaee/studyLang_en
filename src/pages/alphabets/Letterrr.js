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
  const { params, lettername } = useParams();

  const letter = letters.letter.find((item) => item.lettername === lettername);
  const pronounce = letter ? letter.pronounce : null;
  function inputt(e) {
    setObj(e.target.value);
  }
  function handleClick() {
    setList((list) => [...list, obj]);
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
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <h2>{lettername}</h2>
      <h1>Pronounce: {pronounce}</h1>
      <hr />
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
};

export default Letterrr;
