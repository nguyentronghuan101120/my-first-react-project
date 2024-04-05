import React from "react";
import "./TodoListStyle.css";

interface Props {
  buttonName: string;
  buttonType?: "success" | "danger" | "primary";

  onClick: () => void;
}

const TodoListButton = (props: Props) => {
  return (
    <button
      className={"btn btn-" + props.buttonType}
      style={{ margin: 0 }}
      onClick={() => props.onClick()}
    >
      {props.buttonName}
    </button>
  );
};

export default TodoListButton;
