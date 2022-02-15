import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { BsFillCaretDownFill } from "react-icons/bs";

interface TodoItem {
  id: string;
  name: string;
  level: number;
}

interface Props {
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Sort: React.FC<Props> = ({ todoItems, setTodoItems }) => {
  const [currentTypeSort, setcurrentTypeSort] = useState<string>("NAME - DESC");
  const [typeSorts] = useState<string[]>([
    "NAME - DESC",
    "NAME - ASC",
    "LEVEL - DESC",
    "LEVEL - ASC",
  ]);

  const sortTodoItems = (selectItem: number) => {
    // selectItem la vi tri trong typeSorts
    switch (selectItem) {
      case 0:
        // render ra man hinh button NAME - DESC
        setcurrentTypeSort("NAME - DESC");
        // sap xep danh sach
        sortByNameDesc();
        break;
      case 1:
        setcurrentTypeSort("NAME - ASC");
        sortByNameAsc();
        break;
      case 2:
        setcurrentTypeSort("LEVEL - DESC");
        sortByLevelDesc();
        break;
      case 3:
        setcurrentTypeSort("LEVEL - ASC");
        sortByLevelAsc();
        break;
      default:
        break;
    }
  };
  // sort by NAME - ASC
  const sortByNameAsc = () => {
    setTodoItems(
      todoItems
        .sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          return 0;
        })
        .map((item) => item)
    );
  };

  // sort by NAME - DESC
  const sortByNameDesc = () => {
    setTodoItems(
      todoItems
        .sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        })
        .filter((todoItem) => todoItem)
    );
  };

  // sort by Level - ASC
  const sortByLevelAsc = () => {
    setTodoItems(
      todoItems
        .sort((a, b) => {
          if (a.level < b.level) {
            return -1;
          }
          if (a.level > b.level) {
            return 1;
          }
          return 0;
        })
        .filter((todoItem) => todoItem.name !== "")
    );
  };
  // sort by Level - DESC
  const sortByLevelDesc = () => {
    setTodoItems(
      todoItems
        .sort((a, b) => {
          if (a.level < b.level) {
            return 1;
          }
          if (a.level > b.level) {
            return -1;
          }
          return 0;
        })
        .filter((todoItem) => todoItem.name !== "")
    );
  };

  return (
    <Dropdown className="dropdown">
      <Dropdown.Toggle variant="default" id="dropdown-basic">
        Sort By <BsFillCaretDownFill />
      </Dropdown.Toggle>
      {/* render danh sach loai sap xep */}
      <Dropdown.Menu>
        {typeSorts.map((typeSort, index) => (
          <li key={index}>
            <Dropdown.Item
              id={`${index}`}
              onClick={function () {
                sortTodoItems(index);
              }}
            >
              {typeSort}
            </Dropdown.Item>
          </li>
        ))}
      </Dropdown.Menu>
      <span className="label label-success label-medium">
        {currentTypeSort}
      </span>
    </Dropdown>
  );
};

export default Sort;
