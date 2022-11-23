import React from "react";

const Card: React.FunctionComponent<{ title: string; srcImage: string }> = ({
  title,
  srcImage,
}) => {
  return (
    <div className="card">
      <span style={{ color: "#e5e5e5" }}>{title}</span>
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
