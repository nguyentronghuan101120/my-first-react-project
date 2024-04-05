import React, { useEffect, useRef, useState } from "react";

const UseRefApp = () => {
  let [number, setNumber] = useState(0);

  const ref = useRef(0);

  useEffect(() => console.log("Component rerendered"));

  function handleClick() {
    // setNumber((n) => n + 1);
    ref.current++;
    console.log(ref.current);
  }

  return <button onClick={handleClick}>Click me</button>;
};

export default UseRefApp;
