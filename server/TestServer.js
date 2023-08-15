import { useState } from "react";

const TestServer = () => {
  const [userId, setUserId] = useState("");

  onclick = () => {
    const textbox = {
      inText: this.state.text,
    };
    fetch("http://localhost:3002/asdf", {
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(textbox), //textbox라는 객체를 보냄
    });
  };

  return (
    <>
      <div>
        <input
          value={userId}
          name="firstName"
          onChange={(e) => setUserId(e.target.value)}
        />
        <h3>{userId}</h3>
        <button onClick={this.onClick}>submit</button>
      </div>

      <div>
        <input name="text" onChange={this.handlChange}></input>
        <button onClick={this.onclick}>전송</button>
        <h3>{this.state.text}</h3>
      </div>
    </>
  );
};

export default TestServer;
