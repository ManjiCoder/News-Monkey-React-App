import React, { useContext } from "react";
import UseContext from "../Context/UseContext";

function HeadingInfo(props) {
  const { isDark } = useContext(UseContext);
  return (
    <h1
      className={`text-center capitalize scroll-pt-11 text-3xl font-semibold px-8 py-3 pt-11 ${
        isDark ? "text-white" : ""
      }`}
    >
      {props.headingTxt}
    </h1>
  );
}
export default HeadingInfo;
