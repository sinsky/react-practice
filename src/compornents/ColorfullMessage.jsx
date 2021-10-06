import React from "react";

export const ColorfullMessage = (props) => {
  // console.group("ColorfullMessage");
  // console.log(props);
  // console.groupEnd("ColorfullMessage");
  const { color, message, children } = props;
  const colorStyle = {
    color: color,
    fontSize: "18px",
    margin: "0px"
  };
  return <p style={colorStyle}>{message || children}</p>;
};

// export default ColorfullMessage;
