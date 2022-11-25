import React, { useState } from "react";

const SearchField: React.FunctionComponent = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  const onSearchFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFieldValue(event.target.value);
  };

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
