import React from "react";

function HeadingInfo(props) {
  return (
    <h1 className="text-center text-capitalize" style={{ margin: "37px 0" }}>
      {props.title} - {props.category} Top Headlines
    </h1>
  );
}
export default HeadingInfo;
