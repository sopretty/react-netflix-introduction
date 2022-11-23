import React from "react";
import { Card } from "./Card/Card";
import { CardWithOptionalProps } from "./Card/CardOptionalProps";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Card
        title="The Walking Dead"
        srcImage="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:210/q:75/https://bleedingcool.com/wp-content/uploads/2022/09/TWD11_KA_HZ-2.jpg"
      />
      <CardWithOptionalProps />
    </div>
  );
};

export { App };
