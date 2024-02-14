import React from "react";

import { useState, useEffect } from "react";

const Tutorial = () => {
  const [tuto, setTuto] = useState(true);

  useEffect(() => {
    const localsto = localStorage.getItem(checked);
    if (localsto) {
      setTuto(false);
    }
  }, []);

  const tutoo = () => {
    localStorage.setItem("checked", true);
    setTuto(false);
  };
  return (
    <>
      <div>
        <h1>hi</h1>
        <button onClick={tutto}>got it</button>
      </div>
    </>
  );
};

export default Tutorial;
