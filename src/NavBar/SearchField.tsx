import React from "react";

const SearchField: React.FunctionComponent<{
  searchFieldValue: string;
  onSearchFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ searchFieldValue, onSearchFieldChange }) => {
  return (
    <input
      value={searchFieldValue}
      onChange={onSearchFieldChange}
      className="search-field"
      type="text"
      placeholder="Search"
    />
  );
};

export { SearchField };
