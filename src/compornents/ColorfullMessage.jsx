import React from "react";

const ColorfullMessage = (props) => {
  // console.group("ColorfullMessage");
  // console.log(props);
  // console.groupEnd("ColorfullMessage");
  const colorStyle = {
    color: props.color,
    fontSize: "18px",
    margin: "0px"
  };
  return <p style={colorStyle}>{props.message || props.children}</p>;
};

export default ColorfullMessage;
