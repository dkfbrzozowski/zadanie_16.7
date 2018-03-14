import React from "react";

const Title = (props) => {
  return (
    <div>
      <h1>TODO Table</h1>
      <h3>Current tasks number: {props.counter}</h3>
    </div>
  );
};

export default Title;