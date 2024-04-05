import React, { createContext } from "react";
import ComponentA from "./ComponentA";
import "./index.css";

export const UserContext = createContext("");

const UseContextApp = () => {
  const thisIsData = "this is data";

  return (
    <div className="box">
      <h1>Use context app</h1>
      <p>{thisIsData}</p>
      <UserContext.Provider value={thisIsData}>
        <ComponentA></ComponentA>
      </UserContext.Provider>
    </div>
  );
};

export default UseContextApp;
