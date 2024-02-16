import React from "react";

import { useState, useEffect, useContext, createContext } from "react";
import {
  useNavigate,
  useLocation,
  useMatch,
  useParams,
  Link,
} from "react-router-dom";
import Letterrr from "./Letterrr";
import letters from "../../data/letters.json";

export const Contextt = createContext({
  setObj: () => {},
  setList: () => [],
});
const LetterNew = () => {
  const [obj, setObj] = useState("");
  const [list, setList] = useState([""]);
  const [data, setData] = useState({});

  const params = useParams();
  const [click, setClick] = useState(null);
  const currLocation = useLocation();
  const navigate = useNavigate();

  const clickEvt = (lettername) => {
    setClick(lettername);
  };

  useEffect(() => {
    fetch(`./letternew/${params.lettername}`)
      .then((res) => res.json)
      .then((data) => setData(data.results));
  }, []);
  return (
    <>
      <Contextt.Provider value={{ obj, setObj, list, setList }}>
        <div className="alphabet-lists">
          {letters.letter.map((letter) => {
            const isClick = click === letter.lettername;
            const className = `box ${isClick ? "acc" : ""}`;
            console.log("Class Name:", className);
            return (
              <div className={className} key={letter.id}>
                <Link
                  to={{
                    pathname: `./ll/${letter.lettername}`,
                    state: {
                      from: currLocation.pathname,
                      pronounce: letter.pronounce,
                    },
                  }}
                  onClick={() => clickEvt(letter.lettername)}
                >
                  {letter.lettername}
                </Link>
              </div>
            );
          })}
        </div>
      </Contextt.Provider>
    </>
  );
};

export default LetterNew;
