import React from "react";

function HeadingInfo(props) {
  return (
    <h1
      className="text-center capitalize scroll-pt-11 text-3xl font-semibold px-8 py-3 pt-11 
        dark:text-white"
    >
      {props.headingTxt}
    </h1>
  );
}
export default HeadingInfo;
