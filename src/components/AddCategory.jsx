import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const inputValueTrimmed = inputValue.trim();
    if (inputValueTrimmed.length <= 1) return;
    onNewCategory(inputValueTrimmed);
    setInputValue('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
