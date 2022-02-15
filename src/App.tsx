import React, { useState } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import Search from "./components/Search";
import Sort from "./components/Sort";
import Title from "./components/Title";

interface TodoItem {
  id: string;
  name: string;
  level: number;
}

const data: TodoItem[] = [
  {
    id: "abc1",
    name: "Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết",
    level: 2, // high
  },
  {
    id: "abc2",
    name: "Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018",
    level: 0, // low
  },
  {
    id: "abc3",
    name: "Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo",
    level: 1, // medium
  },
  {
    id: "abc4",
    name: "Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết",
    level: 0, // low
  },
  {
    id: "abc5",
    name: "VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết",
    level: 2, // high
  },
  {
    id: "abc6",
    name: "F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
    level: 1, // medium
  },
];

const App: React.FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(data);
  let [isAddItem, setIsAddItem] = useState(false);

  function clickAddItem() {
    setIsAddItem(true);
  }

  return (
    <div className="container">
      <Title />
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Search todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Sort todoItems={todoItems} setTodoItems={setTodoItems} />
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button
            type="button"
            className="btn btn-info btn-block marginB10"
            onClick={clickAddItem}
          >
            Add Item
          </button>
        </div>
      </div>
      {isAddItem ? (
        <div className="row marginB10">
          <div className="col-md-offset-7 col-md-5">
            <Form
              todoItems={todoItems}
              setTodoItems={setTodoItems}
              setIsAddItem={setIsAddItem}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {todoItems ? (
        <ListItem todoItems={todoItems} setTodoItems={setTodoItems} />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
