import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>React write.</p>
      <p>first commit from sandbox</p>
    </>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
