import React from "react";

const LoadingIndicator = () => {
  /* Loading indicater style are in src/app/globals.css*/
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingIndicator;
