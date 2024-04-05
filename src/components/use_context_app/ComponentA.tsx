import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <ComponentB></ComponentB>
    </div>
  );
};

export default ComponentA;
