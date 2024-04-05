import React from "react";
import "./TodoListStyle.css";
import TodoListButton from "./TodoListButton";

interface Props {
  onKeyDown: () => void;
  onInputChanged: (event: any) => void;
  inputValue: string;
  onAdd: () => void;
}

const EnterATaskField = (props: Props) => {
  return (
    <div className="enter-a-task-field">
      <input
        className="input"
        placeholder="Enter a task..."
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            return props.onKeyDown();
          }
        }}
        onChange={props.onInputChanged}
        value={props.inputValue}
      ></input>
      <div style={{ width: 8 }}></div>
      <TodoListButton
        buttonName="Add"
        buttonType="success"
        onClick={() =>props.onAdd() }
      ></TodoListButton>
    </div>
  );
};

export default EnterATaskField;
