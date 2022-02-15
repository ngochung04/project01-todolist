import React from "react";

interface TodoItem {
  id: string;
  name: string;
  level: number;
}
interface Props {
  editItem: TodoItem;
  setEditItem: React.Dispatch<React.SetStateAction<TodoItem>>;
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  setIsEditItem: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemEdit: React.FC<Props> = ({
  editItem,
  setEditItem,
  todoItems,
  setTodoItems,
  setIsEditItem,
}) => {
  const clickCancelItem = () => {
    setIsEditItem(false);
  };
  // ham luu item
  const clickSaveItem = () => {
    setTodoItems(
      todoItems.map((todoItem) => {
        if (todoItem.id === editItem.id) {
          return editItem;
        }
        return todoItem;
      })
    );
    setIsEditItem(false);
  };
  return (
    <tr>
      <td className="text-center">{todoItems.indexOf(editItem) + 1}</td>
      <td>
        <input
          type="text"
          className="form-control"
          defaultValue={editItem.name}
          onChange={function (e) {
            setEditItem({ ...editItem, name: e.target.value });
          }}
        />
      </td>
      <td className="text-center">
        <select
          className="form-control"
          value={editItem.level}
          onChange={function (e) {
            setEditItem({ ...editItem, level: parseInt(e.target.value) });
          }}
        >
          <option value={0}>Low</option>
          <option value={1}>Medium</option>
          <option value={2}>High</option>
        </select>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-default btn-sm"
          onClick={function () {
            clickCancelItem();
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-success btn-sm"
          onClick={function () {
            clickSaveItem();
          }}
        >
          Save
        </button>
      </td>
    </tr>
  );
};

export default ItemEdit;
