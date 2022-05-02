export const CompList = (props) => {
  const { compList, onClickReturn } = props;
  return (
    <>
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
