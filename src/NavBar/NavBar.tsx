import React from "react";

import { SearchField } from "./SearchField";

const NavBar: React.FunctionComponent<{
  searchFieldValue: string;
  onSearchFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ searchFieldValue, onSearchFieldChange }) => {
  return (
    <div className="navbar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmHBEDX28rbZbBh8rmBA1u-YxPCsuoPpvN5w&usqp=CAU"
        alt="netflix-icon"
      />
      <SearchField
        searchFieldValue={searchFieldValue}
        onSearchFieldChange={onSearchFieldChange}
      ></SearchField>
    </div>
  );
};

export { NavBar };
