import React, { useState } from "react";

interface TodoItem {
  id: string;
  name: string;
  level: number;
}

interface Props {
  todoItems: TodoItem[];
  setTodoItems: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Search: React.FC<Props> = ({ todoItems, setTodoItems }) => {
  const [searchData, setSearchData] = useState(todoItems);
  const [searchInput, setSearchInput] = useState<string>("");
  // xoa dau tieng viet
  const removeAccents = (str: string) => {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ",
      "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
      var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return str;
  };

  // tim kiem danh sach theo ten
  const filterTodoItemsByInput = (str: string) => {
    //lay chuoi o input element
    setSearchInput(str);
    // loc danh sach theo ten todoItem
    setTodoItems(
      searchData.filter((todoItem) =>
        removeAccents(todoItem.name)
          .toLowerCase()
          .includes(removeAccents(str).toLowerCase())
      )
    );
  };

  // lam rong input search
  const clearSeacrhInput = () => {
    setSearchInput("");
    // render lai danh sach todoItems
    setTodoItems(searchData);
  };

  return (
    <div className="input-group">
      <input
        value={searchInput}
        type="text"
        className="form-control"
        placeholder="Search item name"
        onChange={function (e) {
          filterTodoItemsByInput(e.target.value);
        }}
        onClick={function () {
          return setSearchData(todoItems);
        }}
      />
      <span className="input-group-btn">
        <button
          className="btn btn-info"
          type="button"
          onClick={clearSeacrhInput}
        >
          Clear
        </button>
      </span>
    </div>
  );
};

export default Search;
