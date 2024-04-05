import React, { useState } from "react";
import "./ColorPickerStyle.css";

const ColorPickerIndex = () => {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <div className="flex-column-center">
      <p className="heading">Color picker</p>

      <div style={{ height: 24 }}></div>

      <p style={{ backgroundColor: color }} className="color-display-container">
        Selected color: {color}
      </p>

      <div style={{ height: 16 }}></div>

      <p style={{ margin: 0 }}>Select a color</p>

      <div style={{ height: 16 }}></div>

      <input
        type="color"
        onChange={(event) => setColor(event.target.value)}
        className="color-picker-input"
      ></input>
    </div>
  );
};

export default ColorPickerIndex;
