import React from "react";

const CardWithOptionalProps: React.FunctionComponent<{
  title?: string;
  srcImage?: string;
}> = ({
  title = "Breaking Bad",
  srcImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Xz7AhXy8_BzMJfMTSOIrPPhbprot1bg3_A&usqp=CAU",
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
      <span>{title}</span>
      <img
        style={{ borderRadius: "0.2vw" }}
        src={srcImage}
        alt=""
        width="300"
        height="200"
      />
    </div>
  );
};

export { CardWithOptionalProps };
