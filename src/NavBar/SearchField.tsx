import React from "react";

const SearchField: React.FunctionComponent<{
  searchFieldValue: string;
  onSearchFieldValueChange: (value: string) => void;
}> = ({ searchFieldValue, onSearchFieldValueChange }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchFieldValueChange(event.target.value);
  };

  return (
    <input
      value={searchFieldValue}
      onChange={onChange}
      className="search-field"
      type="text"
      placeholder="Search"
    />
  );
};

export { SearchField };
