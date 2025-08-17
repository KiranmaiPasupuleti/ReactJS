import React, { useState } from "react";

const AddTodo = ({ handleAdd }) => {
  const [inputValue, setInputVal] = useState("");

  function handleClick() {
    handleAdd(inputValue);
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputVal(event.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddTodo;
