import React, { useState } from "react";
import { Card } from "./Card/Card";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { NoResult } from "./NoResult/NoResult";

const App: React.FunctionComponent = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [series, setSeries] = useState<{ title: string; srcImage: string }[]>(
    []
  );

  const onSearchFieldValueChange = (value: string) => {
    setSearchFieldValue(value);
  };

  const filteredSeries = series.filter(
    (serie) =>
      !searchFieldValue || serie.title.toLowerCase().includes(searchFieldValue)
  );

  return (
    <div>
      <NavBar
        searchFieldValue={searchFieldValue}
        onSearchFieldValueChange={onSearchFieldValueChange}
      ></NavBar>
      <div className="cards">
        {filteredSeries.map((serie) => (
          <Card
            key={serie.title}
            title={serie.title}
            srcImage={serie.srcImage}
          ></Card>
        ))}
      </div>
      {!filteredSeries.length && (
        <NoResult searchFieldValue={searchFieldValue}></NoResult>
      )}
    </div>
  );
};

export default App;
