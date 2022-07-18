import React from "react";

function HeadingInfo(props) {
  return (
    <h1 className="dark:bg-gray-900 dark:text-white text-center capitalize scroll-pt-11 text-3xl font-semibold px-8 py-3 pt-11">
      {props.title} - {props.category} Top Headlines
    </h1>
  );
}
export default HeadingInfo;
