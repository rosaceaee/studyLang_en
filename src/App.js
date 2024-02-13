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

function App() {
  return (
    <>
      <div className="App asdf">
        <Routes>
          <Route path="/" exact element={<Content />} />
          <Route path="/alphabetCon" exact element={<AlphabetCon />} />
          <Route path="/AlphabetsMain" exact element={<AlphabetsMain />} />
          <Route path="/SignIn" exact element={<SignIn />} />
          <Route path="/alphabetCon/A" exact element={<LetterA />} />
          <Route path="/alphabetCon/B" exact element={<LetterB />} />
          <Route path="/alphabetCon/C" exact element={<LetterC />} />
          <Route path="/alphabetCon/D" exact element={<LetterD />} />
          <Route path="/alphabetCon/E" exact element={<LetterE />} />
          <Route path="/alphabetCon/F" exact element={<LetterF />} />
          <Route path="/alphabetCon/G" exact element={<LetterG />} />
          <Route path="/alphabetCon/H" exact element={<LetterH />} />
          <Route path="/alphabetCon/I" exact element={<LetterI />} />
          <Route path="/alphabetCon/J" exact element={<LetterJ />} />
          <Route path="/alphabetCon/K" exact element={<LetterK />} />
          <Route path="/alphabetCon/L" exact element={<LetterL />} />
          <Route path="/alphabetCon/M" exact element={<LetterM />} />
          <Route path="/alphabetCon/N" exact element={<LetterN />} />
          <Route path="/alphabetCon/O" exact element={<LetterO />} />
          <Route path="/alphabetCon/P" exact element={<LetterP />} />
          <Route path="/alphabetCon/Q" exact element={<LetterQ />} />
          <Route path="/alphabetCon/R" exact element={<LetterR />} />
          <Route path="/alphabetCon/S" exact element={<LetterS />} />
          <Route path="/alphabetCon/T" exact element={<LetterT />} />
          <Route path="/alphabetCon/U" exact element={<LetterU />} />
          <Route path="/alphabetCon/V" exact element={<LetterV />} />
          <Route path="/alphabetCon/W" exact element={<LetterW />} />
          <Route path="/alphabetCon/X" exact element={<LetterX />} />
          <Route path="/alphabetCon/Y" exact element={<LetterY />} />
          <Route path="/alphabetCon/Z" exact element={<LetterZ />} />
          <Route path="/alphabetsection/" exact element={<AlphabetSection />} />
          <Route path="/zz/" exact element={<Conn />} />

          <Route path="/todotest/" exact element={<TodoTest />} />
          <Route path="/lettercon" exact element={<LetterContainer />} />
          <Route path="/datatest" exact element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
