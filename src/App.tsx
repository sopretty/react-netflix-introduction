import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { NoResult } from "./NoResult/NoResult";
import { Loading } from "./Loading/Loading";

const App: React.FunctionComponent = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState<{ title: string; imageSrc: string }[]>(
    []
  );

  const onSearchFieldValueChange = (value: string) => {
    setSearchFieldValue(value);
  };

  const filteredSeries = series.filter(
    (serie) =>
      !searchFieldValue || serie.title.toLowerCase().includes(searchFieldValue)
  );

  useEffect(() => {
    fetch("http://localhost:3001/series.json")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSeries(data);
      });
  }, []);

  return (
    <div>
      <NavBar
        searchFieldValue={searchFieldValue}
        onSearchFieldValueChange={onSearchFieldValueChange}
      ></NavBar>
      {loading && <Loading />}
      {!loading && (
        <div className="cards">
          {filteredSeries.map((serie) => (
            <Card
              key={serie.title}
              title={serie.title}
              imageSrc={serie.imageSrc}
            ></Card>
          ))}
        </div>
      )}
      {!filteredSeries.length && !loading && (
        <NoResult searchFieldValue={searchFieldValue}></NoResult>
      )}
    </div>
  );
};

export default App;
