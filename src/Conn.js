import React, { createContext } from "react";
import ConDown from "./ConDown";
import { WordLists } from "./components/WordLists";
export const AppContext = createContext();

const Conn = () => {
  const user = {
    name: "naaaa",
    job: "jobbbbbb",
  };

  const Wordlist = JSON.parse(WordLists);

  return (
    <>
      <AppContext.Provider value={Wordlist}>
        <div>
          <ConDown />
          {Wordlist.a}
        </div>
      </AppContext.Provider>
    </>
  );
};

export default Conn;
