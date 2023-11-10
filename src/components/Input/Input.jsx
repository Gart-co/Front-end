import React, { useState } from 'react';

function Input({ initialValue, style}) {
  const [inputValue, setInputValue] = useState(initialValue);

  const [isFocused, setIsFocused] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    // 在输入框获得焦点时，将其值清零
    setInputValue("");
  };const handleInputBlur = () => {
    setIsFocused(false);
    if (inputValue === "") {
      // 如果输入框为空，将其值还原为初始值
      setInputValue(initialValue);
    }
  };

  return (
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        style={style}
      />
  );
}



export default Input;
