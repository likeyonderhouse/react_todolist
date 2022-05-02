export const YetList = (props) => {
  const { yetList, onClickComp, onClickDelete } = props;

  return (
    <>
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
    </>
  );
};
