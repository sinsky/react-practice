import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>React writer</p>
    </>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
