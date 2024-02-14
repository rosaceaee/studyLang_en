import logo from "./logo.svg";
import "./App.css";
import "./scss/App.scss";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AlphabetCon from "./pages/AlphabetCon";
import AlphabetsMain from "./pages/AlphabetsMain";
import AlphabetSection from "./pages/AlphabetSection";
import LetterA from "./pages/alphabets/LetterA";
import LetterB from "./pages/alphabets/LetterB";
import LetterC from "./pages/alphabets/LetterC";
import LetterD from "./pages/alphabets/LetterD";
import LetterE from "./pages/alphabets/LetterE";
import LetterF from "./pages/alphabets/LetterF";
import LetterG from "./pages/alphabets/LetterG";
import LetterH from "./pages/alphabets/LetterH";
import LetterI from "./pages/alphabets/LetterI";
import LetterJ from "./pages/alphabets/LetterJ";
import LetterK from "./pages/alphabets/LetterK";
import LetterL from "./pages/alphabets/LetterL";
import LetterM from "./pages/alphabets/LetterM";
import LetterN from "./pages/alphabets/LetterN";
import LetterO from "./pages/alphabets/LetterO";
import LetterP from "./pages/alphabets/LetterP";
import LetterQ from "./pages/alphabets/LetterQ";
import LetterR from "./pages/alphabets/LetterR";
import LetterS from "./pages/alphabets/LetterS";
import LetterT from "./pages/alphabets/LetterT";
import LetterU from "./pages/alphabets/LetterU";
import LetterV from "./pages/alphabets/LetterV";
import LetterW from "./pages/alphabets/LetterW";
import LetterX from "./pages/alphabets/LetterX";
import LetterY from "./pages/alphabets/LetterY";
import LetterZ from "./pages/alphabets/LetterZ";
import TodoTest from "./TodoTest";

import LetterContainer from "./pages/letters/LetterContainer";
import TestLetter from "./pages/alphabets/TestLetter";

import Header from "./components/Header";
import About from "./About";
import KeyboardInner from "./components/KeyboardInner";
import Content from "./pages/Content";
import SignIn from "./pages/SignIn";

import Conn from "./Conn";
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

const componentMapping = {
  "/A": LetterA,
  "/B": LetterB,
  // Add other pathnames and corresponding components here
};
function App() {
  return (
    <>
      <div className="App asdf">
        <Routes>
          <Route path="/" exact element={<Content />} />
          <Route path="/alphabetCon" exact element={<AlphabetCon />} />
          <Route path="/AlphabetsMain" exact element={<AlphabetsMain />} />
          <Route path="/SignIn" exact element={<SignIn />} />
          <Route path="/A" exact element={<LetterA />} />
          <Route path="/B" exact element={<LetterB />} />
          <Route path="/C" exact element={<LetterC />} />
          <Route path="/D" exact element={<LetterD />} />
          <Route path="/E" exact element={<LetterE />} />
          <Route path="/F" exact element={<LetterF />} />
          <Route path="/G" exact element={<LetterG />} />
          <Route path="/H" exact element={<LetterH />} />
          <Route path="/I" exact element={<LetterI />} />
          <Route path="/J" exact element={<LetterJ />} />
          <Route path="/K" exact element={<LetterK />} />
          <Route path="/L" exact element={<LetterL />} />
          <Route path="/M" exact element={<LetterM />} />
          <Route path="/N" exact element={<LetterN />} />
          <Route path="/O" exact element={<LetterO />} />
          <Route path="/P" exact element={<LetterP />} />
          <Route path="/Q" exact element={<LetterQ />} />
          <Route path="/R" exact element={<LetterR />} />
          <Route path="/S" exact element={<LetterS />} />
          <Route path="/T" exact element={<LetterT />} />
          <Route path="/U" exact element={<LetterU />} />
          <Route path="/V" exact element={<LetterV />} />
          <Route path="/W" exact element={<LetterW />} />
          <Route path="/X" exact element={<LetterX />} />
          <Route path="/Y" exact element={<LetterY />} />
          <Route path="/Z" exact element={<LetterZ />} />
          <Route path="/alphabetsection/" exact element={<AlphabetSection />} />
          <Route path="/zz/:id" exact element={<Conn />} />
          <Route path="/te/:idd" element={<TestLetter />} />
          <Route path="/todotest/" exact element={<TodoTest />} />
          <Route path="/lettercon" exact element={<LetterContainer />} />
          <Route path="/datatest" exact element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
