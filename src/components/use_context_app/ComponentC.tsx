import React, { useContext } from "react";
import { UserContext } from "./UseContextApp";

const ComponentC = () => {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>ComponentC</h1>
      <p>{`Bye ${user}`}</p>
    </div>
  );
};

export default ComponentC;
