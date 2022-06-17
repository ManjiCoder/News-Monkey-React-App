import React from "react";
import Emoji from "../Images/emoji.png";

function NoDataFound() {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <img className="emoji" src={Emoji} alt="No Data Found" />
      <h1 className="showError text-center text-capitalize">Sorry No Data Found</h1>
    </div>
  );
}

export default NoDataFound;
