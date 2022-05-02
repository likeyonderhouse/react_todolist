import { useState } from "react";

export const App = () => {
  // console.log("change");
  const [inputText, setInputText] = useState("");
  const [yetList, setYetList] = useState(["息を吸う", "踊る"]);

  // 入力内容のstate保持
  const onChangeInputText = (e) => {
    return setInputText(e.target.value);
  };

  // 「追加」ボタンで未完了リストに追加
  const onClickAdd = () => {
    if (inputText === "") return;
    const newYetList = [...yetList, inputText];
    setYetList(newYetList);
    setInputText("");
  };

  // 「削除」ボタンで未完了リストから削除

  return (
    <>
      <div>
        <input
          value={inputText}
          onChange={onChangeInputText}
          placeholder="Taskを追加"
        />
        <button onClick={onClickAdd()}>追加</button>
      </div>

      <h2>未完了リスト</h2>
      <ul id="listDo">
        {yetList.map((todo) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <button>完了</button>
              <button>削除</button>
            </li>
          );
        })}
      </ul>

      <h2>完了済みリスト</h2>
      <ul id="listDone">
        <li>
          <p>息を吸う</p>
          <button>未完了にする</button>
        </li>
      </ul>
    </>
  );
};
