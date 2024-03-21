import React from "react";
import LoadingIndicator from "./loading-indicator";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen justify-center items-center flex">
      <LoadingIndicator />
    </div>
  );
};

export default LoadingScreen;
