import React from "react";

const SearchField: React.FunctionComponent = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // changer la valeur de l'état local 
    // vous récupérez la valeur de ce que tape l'utilisateur via event.target.value
  };

  return (
    <input
      onChange={onChange}
      className="search-field"
      type="text"
      placeholder="Search"
    />
  );
};

export { SearchField };
