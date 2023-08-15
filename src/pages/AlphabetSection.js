import React from "react";

import { useState } from "react";
import item from "../data/item.json";
import { useNavigate } from "react-router-dom";

const AlphabetSection = () => {
  return (
    <>
      <div>
        {item.twooo.map((a, index) => (
          <>
            <div>{a.name}</div>
            <h1 style={{ color: "red" }}>{index.name}</h1>
          </>
        ))}
      </div>
    </>
  );
};

export default AlphabetSection;
