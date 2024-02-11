import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Listss = (prop) => {
  return (
    <>
      <p>dd</p>
    </>
  );
};

const TodoTest = () => {
  const [val, setVal] = useState("");
  const onChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <>
      <button>도움말</button>

      <div>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              <span>
                <input type="text" onChange={setVal} placeholder="text" />
              </span>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TodoTest;
