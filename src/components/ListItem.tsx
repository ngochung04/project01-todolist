import React, { useState } from "react";
import Item from "./Item";
import ItemEdit from "./ItemEdit";

interface TodoItem {
  id: string;
  name: string;
  level: number;
}

interface Props {
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const ListItem: React.FC<Props> = ({ todoItems, setTodoItems }) => {
  const [isEditItem, setIsEditItem] = useState<boolean>(false);
  const [editItem, setEditItem] = useState<TodoItem>({
    id: "",
    name: "",
    level: 0,
  });

  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Item</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Name</th>
            <th style={{ width: "15%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "15%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoItems.map((todoItem) => (
            <Item
              todoItem={todoItem}
              key={todoItem.id}
              todoItems={todoItems}
              setTodoItems={setTodoItems}
              setEditItem={setEditItem}
              setIsEditItem={setIsEditItem}
            />
          ))}
          {isEditItem && (
            <ItemEdit
              editItem={editItem}
              setEditItem={setEditItem}
              todoItems={todoItems}
              setTodoItems={setTodoItems}
              setIsEditItem={setIsEditItem}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
