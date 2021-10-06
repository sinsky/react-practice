import React from "react";

const App = () => {
  const onClickButton = () => alert("click");
  const myStyle = {
    color: "green",
    fontSize: "18px",
    marginBottom: "0px"
  };
  /* returnできる要素は親に一つだけ */
  /* 不要なタグを避けるために<React.Fragment>か<>を使うことで、無用な表記を避けれる */
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <p style={myStyle}>React write.</p>
      <p>first commit from sandbox</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
