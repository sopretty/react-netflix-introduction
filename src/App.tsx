import React, { useState } from "react";
import { Card } from "./Card/Card";
import "./App.css";
import { CardWithOptionalProps } from "./Card/CardOptionalProps";
import { NavBar } from "./NavBar/NavBar";

const App: React.FunctionComponent = () => {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  return (
    <div>
      <NavBar
        searchFieldValue={searchFieldValue}
        setSearchFieldValue={setSearchFieldValue}
      ></NavBar>
      <div className="cards">
        <Card
          title="The Walking Dead"
          srcImage="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:210/q:75/https://bleedingcool.com/wp-content/uploads/2022/09/TWD11_KA_HZ-2.jpg"
        />
        <CardWithOptionalProps />
      </div>
    </div>
  );
};

export default App;
