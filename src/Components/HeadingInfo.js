import React from "react";

function HeadingInfo(props) {
  return (
    <h1 className="text-center capitalize scroll-mt-11 text-3xl font-semibold mx-4 my-3 mt-11">
      {props.title} - {props.category} Top Headlines
    </h1>
  );
}
export default HeadingInfo;
