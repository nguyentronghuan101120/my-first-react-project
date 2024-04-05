import React, { useState } from "react";
import "./TodoListStyle.css";
import EnterATaskField from "./EnterATaskField";
import TodoListComponent from "./TodoListComponent";

const TodoListIndex = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(taskName: string) {
    setNewTask(taskName);
  }

  function handleAddNewTask() {
    if (newTask !== "") {
      setTasks((oldList) => [...oldList, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    setTasks((oldList) => {
      let newList = [...oldList];
      newList.splice(index, 1);
      return newList;
    });
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      setTasks((oldList) => {
        let newList = [...oldList];
        // Swap the task with the one above it
        [newList[index - 1], newList[index]] = [
          newList[index],
          newList[index - 1],
        ];
        return newList;
      });
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      setTasks((oldList) => {
        let newList = [...oldList];
        // Swap the task with the one below it
        [newList[index], newList[index + 1]] = [
          newList[index + 1],
          newList[index],
        ];
        return newList;
      });
    }
  }

  return (
    <div className="flex-colum-center">
      <p className="heading">To-Do-List</p>

      <div style={{ height: 24 }}></div>

      <EnterATaskField
        onKeyDown={handleAddNewTask}
        onInputChanged={(event) => {
          handleInputChange(event.target.value);
        }}
        inputValue={newTask}
        onAdd={() => handleAddNewTask()}
      ></EnterATaskField>
      <div style={{ height: 16 }}></div>

      {tasks.map((item, index) => (
        <TodoListComponent
          todoValue={item}
          onDelete={() => {
            deleteTask(index);
          }}
          onUp={() => {
            moveTaskUp(index);
          }}
          onDown={() => {
            moveTaskDown(index);
          }}
        ></TodoListComponent>
      ))}
    </div>
  );
};

export default TodoListIndex;
