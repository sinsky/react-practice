import React from "react";
import ColorfullMessage from "./compornents/ColorfullMessage";

const App = () => {
  const onClickButton = () => alert("click");
  /* returnできる要素は親に一つだけ */
  /* 不要なタグを避けるために<React.Fragment>か<>を使うことで、無用な表記を避けれる */
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfullMessage color="blue">元気?</ColorfullMessage>
      <ColorfullMessage color="pink" message="元気ですよ" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
