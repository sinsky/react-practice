import React, { useState } from "react";
import ColorfullMessage from "./compornents/ColorfullMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, faceShowFunc] = useState(false);
  const onClickCountup = () => {
    setNum(num + 1);
  };
  /* 下のif-elseにより使えなくなっている */
  const swichFaceShow = () => {
    faceShowFunc(!faceShowFlag);
  };
  if (num && num % 3 === 0) faceShowFlag || faceShowFunc(true);
  else faceShowFlag && faceShowFunc(false);
  /* returnできる要素は親に一つだけ */
  /* 不要なタグを避けるために<React.Fragment>か<>を使うことで、無用な表記を避けれる */
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <ColorfullMessage color="blue">元気?</ColorfullMessage>
      <ColorfullMessage color="pink" message="元気ですよ" />
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
      <div style={{ display: "flex" }}>
        <button onClick={swichFaceShow}>on/off</button>
        {faceShowFlag && <span>(´・ω・)?</span>}
      </div>
    </>
  );
};

export default App;
