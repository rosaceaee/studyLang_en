import React, { useContext } from "react";
import { WordLists } from "./components/WordLists";

import { AppContext } from "./Conn";

const ConDown = () => {
  const user = useContext(AppContext);
  return (
    <>
      <h3>name은 {user.name}입니다.</h3>
      <h3> job은 {user.job}입니다.</h3>
    </>
  );
};

export default ConDown;
