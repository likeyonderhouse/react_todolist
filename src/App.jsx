import { useState } from "react";
import { CompList } from "./components/CompList";
import { InputTodo } from "./components/InputTodo";
import { YetList } from "./components/YetList";

export const App = () => {
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
      <InputTodo
        inputText={inputText}
        onChange={onChangeInputText}
        onClick={onClickAdd}
        disabled={yetList.length >= 5}
        yetList={yetList}
      />

      <YetList
        yetList={yetList}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />

      <CompList compList={compList} onClickReturn={onClickReturn} />
    </>
  );
};
