import React from "react";

const Author = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.category}</h2>
      <h3>{props.intersectionality}</h3>
    </div>
    );
  };

export default Author;
