import React from "react";

const Card: React.FunctionComponent<{ title: string; imageSrc: string }> = ({
  title,
  imageSrc,
}) => {
  return (
    <div className="card">
      <span style={{ color: "#e5e5e5" }}>{title}</span>
      <img
        style={{ borderRadius: "0.2vw" }}
        src={imageSrc}
        alt={title}
        width="300"
        height="200"
      />
    </div>
  );
};

export { Card };
