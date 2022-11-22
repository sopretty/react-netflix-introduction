import React from "react";

const SearchField: React.FunctionComponent<{
  searchFieldValue: string;
  setSearchFieldValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ searchFieldValue, setSearchFieldValue }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFieldValue(event.target.value);
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
