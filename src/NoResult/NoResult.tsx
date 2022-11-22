import React from "react";

const NoResult: React.FunctionComponent<{
  searchFieldValue: string;
}> = ({ searchFieldValue }) => {
  return (
    <div className="no-result">
      Your search for "{searchFieldValue}" did not have any matches
    </div>
  );
};

export { NoResult };
