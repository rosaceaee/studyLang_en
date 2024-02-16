import React, { useContext } from "react";
import { Contextt } from "./LetterNew";
import { useParams } from "react-router-dom";

const Letterrr = () => {
  const { obj, setObj, list, setList } = useContext(Contextt);
  const { lettername, pronounce } = useParams(); // useParams로 추출한 lettername과 pronounce 값을 추출

  return (
    <>
      <h1>second {list}</h1>
      <h1>zzz {lettername}</h1>
      <h1>{pronounce}</h1>
    </>
  );
};

export default Letterrr;
