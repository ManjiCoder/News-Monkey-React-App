import React from "react";

function SomethingWentWrong(props) {
  return (
    <div>
      <h1 className="text-3xl font-semibold somethingwentwrong">
        Something Went Wrong..
        <details>{props.error}</details>
      </h1>
    </div>
  );
}
export default SomethingWentWrong;
