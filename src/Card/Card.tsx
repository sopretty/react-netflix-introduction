import React from "react";

const Card: React.FunctionComponent<{ title: string; srcImage: string }> = ({
  title,
  srcImage,
}) => {
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
      <span style={{ color: "#e5e5e5" }}>The Walking Dead</span>
      <img
        style={{ borderRadius: "0.2vw" }}
        src={srcImage}
        alt={title}
        width="300"
        height="200"
      />
    </div>
  );
};

export { Card };
