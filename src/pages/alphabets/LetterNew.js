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
import Tutorial from "../Tutorial";
export const Contextt = createContext({
  setObj: () => {},
  setList: () => [],
});

const LetterNew = () => {
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
  // scroll top
  function ScrollToTop() {
    const { currLocation } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [currLocation]);
    return null;
  }

  return (
    <>
      <Contextt.Provider>
        <ScrollToTop />

        <Tutorial />
        <div className="demo-con alpha">
          <h1 style={{ paddingTop: "2rem", marginTop: "0" }}>알파벳 목록</h1>
          <div className="alphabet-lists">
            {letters.letter.map((letter) => {
              const isClick = click === letter.lettername;
              const className = `box ${isClick ? "acc" : ""}`;
              //    console.log("Class Name:", className);
              return (
                <div className={className} key={letter.id}>
                  <Link
                    to={{
                      pathname: `./${letter.lettername}`,
                      state: {
                        from: currLocation.pathname,
                        pronounce: letter.pronounce,
                        id: letter.id,
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
        </div>
      </Contextt.Provider>
    </>
  );
};

export default LetterNew;
