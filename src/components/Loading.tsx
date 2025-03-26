import React from "react";
import loadingIcon from "../assets/icons/progress.gif";

const Loading = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
    >
      <img src={loadingIcon} alt="Loading..." width="100" />
    </div>
  );
};

export default Loading;
