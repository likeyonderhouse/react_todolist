import { useState } from "react";

export const App = () => {
  // console.log("change");
  const [inputText, setInputText] = useState("");
  const [yetList, setYetList] = useState(["息を吸う", "踊る"]);
  const [compList, setCompList] = useState(["発狂する"]);

  // 入力内容のstate保持
  const onChangeInputText = (e) => {
    setInputText(e.target.value);
  };

  // 「追加」ボタンで未完了リストに追加
  const onClickAdd = () => {
    if (inputText === "") return;
    const newYetList = [...yetList, inputText];
    setYetList(newYetList);
    setInputText("");
  };

  // 「削除」ボタンで未完了リストから削除
  const onClickDelete = (index) => {
    // console.log(index);
    const newYetList = [...yetList];
    newYetList.splice(index, 1);
    setYetList(newYetList);
  };

  // 「完了」ボタンで未完了リストから削除→完了済みリストに追加
  const onClickComp = (index) => {
    // console.log(index);
    const newYetList = [...yetList];
    newYetList.splice(index, 1);
    const newCompList = [...compList, yetList[index]];
    setYetList(newYetList);
    setCompList(newCompList);
  };

  // 「未完了にする」ボタンで完了済みリストから削除→未完了リストに追加
  const onClickReturn = (index) => {
    const newCompList = [...compList];
    newCompList.splice(index, 1);
    const newYetList = [...yetList, compList[index]];
    setYetList(newYetList);
    setCompList(newCompList);
  };

  return (
    <>
      <div>
        <input
          value={inputText}
          onChange={onChangeInputText}
          placeholder="Taskを追加"
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <h2>未完了リスト</h2>
      <ul>
        {yetList.map((todo, index) => {
          return (
            <li key={todo}>
              <p>{todo}</p>
              <button onClick={() => onClickComp(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          );
        })}
      </ul>

      <h2>完了済みリスト</h2>
      <ul>
        {compList.map((done, index) => {
          return (
            <li key={done}>
              <p>{done}</p>
              <button onClick={() => onClickReturn(index)}>未完了にする</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
