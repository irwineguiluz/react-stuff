import { useState } from 'react';

function useInput(defaultValue, validationFn) {
  const [inputValue, setInputValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(inputValue);

  function handleInputBlur() {
    setDidEdit(true);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
    setDidEdit(false);
  }

  return {
    value: inputValue,
    hasError: didEdit && !valueIsValid,
    handleInputBlur,
    handleInputChange,
  };
}

export default useInput;
