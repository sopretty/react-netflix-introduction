import React from "react";

const CardWithOptionalProps: React.FunctionComponent<{
  title?: string;
  imageSrc?: string;
}> = ({
  title = "Breaking Bad",
  imageSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Xz7AhXy8_BzMJfMTSOIrPPhbprot1bg3_A&usqp=CAU",
}) => {
  return (
    <div className="card">
      <span style={{ color: "#e5e5e5" }}>{title}</span>
      <img
        style={{ borderRadius: "0.2vw" }}
        src={imageSrc}
        alt=""
        width="300"
        height="200"
      />
    </div>
  );
};

export { CardWithOptionalProps };
