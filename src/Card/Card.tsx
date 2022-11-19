import React from "react";

const Card: React.FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "200px",
        margin: "8px",
        alignItems: "center",
      }}
    >
      <span>The Walking Dead</span>
      <img
        style={{ borderRadius: "0.2vw" }}
        src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:376/h:210/q:75/https://bleedingcool.com/wp-content/uploads/2022/09/TWD11_KA_HZ-2.jpg"
        alt="The Walking Dead"
        width="300"
        height="200"
      />
    </div>
  );
};

export { Card };
