import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  const buttons = [
    "All",
    "Cricket",
    "Trending",
    "Football",
    "Podcasts",
    "UFC",
    "Diljit Dosanjh",
    "Jukebox",
    "Techno",
    "UFC",
    "Watched",
    "New to you",
    "HIMYM",
    "Friends",
    "Recently uploaded",
    "GOT",
    "Witcher",
  ];
  return (
    <div className="overflow-x-scroll">
      <div className="flex">
        {buttons.map((btn) => (
          <Button name={btn} />
        ))}
      </div>
    </div>
  );
};

export default ButtonsList;
