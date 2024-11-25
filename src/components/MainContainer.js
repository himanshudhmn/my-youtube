import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="p-3 w-[85%] overflow-hidden">
      <ButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
