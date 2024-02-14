import React, { createContext } from "react";
import ConDown from "./ConDown";
import { WordLists } from "./components/WordLists";
export const AppContext = createContext();

const Conn = () => {
  const user = {
    name: "naaaa",
    job: "jobbbbbb",
  };

  return (
    <>
      <AppContext.Provider value={user}>
        <div>
          <ConDown />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default Conn;
