import React from "react";

interface TodoItem {
  id: string;
  name: string;
  level: number;
}
interface Props {
  todoItem: TodoItem;
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setEditItem: React.Dispatch<React.SetStateAction<TodoItem>>;
  setIsEditItem: React.Dispatch<React.SetStateAction<boolean>>;
}

const Item: React.FC<Props> = ({
  todoItem,
  todoItems,
  setTodoItems,
  setEditItem,
  setIsEditItem,
}) => {
  const renderLevel = (level: number) => {
    switch (level) {
      case 1:
        return <span className="label label-danger">Medium</span>;
      case 2:
        return <span className="label label-warning">High</span>;
      default:
        return <span className="label label-info">Low</span>;
    }
  };

  // xoa todoItem
  const deleteTodoItem = (id: string) => {
    // loc tra ve mang moi khong chua todoItem can xoa
    setTodoItems(todoItems.filter((todoItem) => todoItem.id !== id));
  };

  // click hien component ItemEdit
  const editTodoItem = () => {
    setEditItem(todoItem);
    setIsEditItem(false);
    setTimeout(() => {
      setIsEditItem(true);
    });
  };

  return (
    <tr>
      <td className="text-center">{todoItems.indexOf(todoItem) + 1}</td>
      <td>{todoItem.name}</td>
      <td className="text-center">{renderLevel(todoItem.level)}</td>
      <td>
        <button
          id={todoItem.id}
          type="button"
          className="btn btn-warning btn-sm"
          onClick={function (e) {
            editTodoItem();
          }}
        >
          Edit
        </button>
        <button
          id={todoItem.id}
          type="button"
          className="btn btn-danger btn-sm"
          onClick={function (e) {
            deleteTodoItem(e.currentTarget.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Item;
