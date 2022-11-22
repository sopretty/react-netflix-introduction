import React, { useState } from "react";
import { Card } from "./Card/Card";
import "./App.css";
import { NavBar } from "./NavBar/NavBar";
import { initialSeries } from "./series";

const App: React.FunctionComponent = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  /**
   * Créer un hook d'état "series" qui à pour valeur initiale "initialSeries"
   */

  const onSearchFieldValueChange = (value: string) => {
    setSearchFieldValue(value);
  };

  /**
   * Créer une constante "filteredSeries" qui contient les films qui ont été filtré
   */

  return (
    <div>
      <NavBar
        searchFieldValue={searchFieldValue}
        onSearchFieldValueChange={onSearchFieldValueChange}
      ></NavBar>
      <div className="cards">
        {/* Parcourir la constante "filteredSeries" et pour chaque élément parcouru, instancier le composant Card */}
      </div>
    </div>
  );
};

export default App;
