import logo from "./logo.svg";
import "./App.css";
import data from "./data/question.json";

// console.log(Object.keys(data));
const st = JSON.stringify(data);
// const obb = JSON.parse(data);

for (const [key, id] in Object.entries(data)) {
  console.log(`${key + 1}의 맛은 ${id}`); // "아메리카노의 맛은 쓴 맛", "라떼의 맛은 고소한 맛", "말차라떼의 맛은 달콤한 맛"
}

console.log(st);

const About = () => {
  return (
    <>
      <h1>abt</h1>
    </>
  );
};

export default About;
