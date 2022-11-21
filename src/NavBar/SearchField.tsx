import React, { useState } from "react";

const SearchField: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      value={inputValue}
      onChange={onChange}
      className="search-field"
      type="text"
      placeholder="Search"
    />
  );
};

export { SearchField };
