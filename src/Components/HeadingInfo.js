import React from "react";

function HeadingInfo(props) {
  return (
    <h1 className="text-center text-capitalize" style={{fontSize:"2rem" ,margin: "37px 0" }}>
      {props.title} - {props.category} Top Headlines
    </h1>
  );
}
export default HeadingInfo;
