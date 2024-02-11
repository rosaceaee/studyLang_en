import React, { useState, useContext, createContext } from "react";

const LetterContext = createContext();

export const LL = ({ children }) => {
  const [use, setUse] = useState([]);
  const value = [use, setUse];
  return (
    <>
      <LetterContext.value> {children}</LetterContext.value>
    </>
  );
};

export const useLetterContext = () => {
  return useContext(LetterContext);
};
