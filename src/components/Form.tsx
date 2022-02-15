import React, { useState } from "react";
const { v4: uuidv4 } = require("uuid");

interface TodoItem {
  id: string;
  name: string;
  level: number;
}

interface Props {
  setIsAddItem: React.Dispatch<React.SetStateAction<boolean>>;
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Form: React.FC<Props> = ({ todoItems, setTodoItems, setIsAddItem }) => {
  const [nameItem, setNameItem] = useState<string>("");
  const [levelItem, setLevelItem] = useState<number>(0);
  console.log("ádasd");
  // them item
  const addTodoItem = () => {
    setTodoItems([
      ...todoItems,
      {
        id: uuidv4(), // id uuidv4: 2aeb587d-04c6-4e15-a53e-1bc9b86f279f
        name: nameItem,
        level: levelItem,
      },
    ]);
  };
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={nameItem}
          onChange={function (e) {
            setNameItem(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          onChange={function (e) {
            setLevelItem(parseInt(e.target.value));
          }}
        >
          <option value={0}>Low</option>
          <option value={1}>Medium</option>
          <option value={2}>High</option>
        </select>
      </div>
      <button type="button" className="btn btn-primary" onClick={addTodoItem}>
        Submit
      </button>
      <button
        type="button"
        className="btn btn-default"
        onClick={function () {
          setIsAddItem(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default Form;
