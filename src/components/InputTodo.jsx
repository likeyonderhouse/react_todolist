export const InputTodo = (props) => {
  const { inputText, onChange, onClick, yetList, disabled } = props;
  return (
    <div>
      <input
        disabled={disabled}
        value={inputText}
        onChange={onChange}
        placeholder="Taskを追加"
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
      {yetList.length >= 5 && <p>目の前のタスク消化してから追加しろや。</p>}
    </div>
  );
};
