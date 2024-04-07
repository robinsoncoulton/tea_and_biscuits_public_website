import React from "react";

const Image = (props) => {
  const url = require(props.src);
  return <img src={url} alt={props.alt} />;
};

export default Image;
