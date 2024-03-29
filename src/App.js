import { useState, useEffect, useContext, createContext } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import KeyboardInner from "./components/KeyboardInner";

import logo from "./logo.svg";
import "./App.css";
import "./scss/App.scss";

import AlphabetCon from "./pages/AlphabetCon";
import LetterNew from "./pages/alphabets/LetterNew";
import Letterrr from "./pages/alphabets/Letterrr";
import LetterTutorial from "./pages/alphabets/LetterTutorial";
import Content from "./pages/Content";
import SignIn from "./pages/SignIn";

{
  /*
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

const keyboard = new Keyboard({
  onChange: (input) => onChange(input),
  onKeyPress: (button) => onKeyPress(button),
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
*/
}

// scroll top
function ScrollToTop() {
  const { currLocation } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currLocation]);
  return null;
}

function App() {
  return (
    <>
      <div className="App asdf">
        {" "}
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Content />} />
          <Route path="/alphabetCon" exact element={<AlphabetCon />} />
          <Route path="/SignIn" exact element={<SignIn />} />
          <Route path="/lettertuto" exact element={<LetterTutorial />} />

          <Route path="/letterlist/" exact element={<LetterNew />} />
          <Route path="/letterlist/:lettername" exact element={<Letterrr />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
