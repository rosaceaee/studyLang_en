import React, { useEffect } from "react";
import axios from "axios";

const SignIn = () => {
  const getData = async () => {
    let response = await axios.get(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
    return response.data;
  };

  let res = getData();

  res.then((data) => {
    console.log(data);
  });

  return (
    <>
      <h1>11</h1>
    </>
  );
};

export default SignIn;
