import React from "react";
import TodoListButton from "./TodoListButton";

interface Props {
  todoValue: string;

  onDelete: () => void;

  onUp: () => void;
  onDown: () => void;
}

const TodoListComponent = (props: Props) => {
  return (
    <div className="todo-list-component">
      <p className="todo-title">{props.todoValue}</p>
      <div className="todo-list-component-buttons">
        <TodoListButton
          buttonName="Delete"
          buttonType="danger"
          onClick={() => props.onDelete()}
        ></TodoListButton>
        <div style={{ width: 8 }}></div>
        <TodoListButton
          buttonName="Up"
          buttonType="primary"
          onClick={props.onUp}
        ></TodoListButton>
        <div style={{ width: 8 }}></div>
        <TodoListButton
          buttonName="Down"
          buttonType="primary"
          onClick={props.onDown}
        ></TodoListButton>
      </div>
    </div>
  );
};

export default TodoListComponent;
