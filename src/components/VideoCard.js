import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { timeSinceEvent } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  return (
    <div className="w-80 m-2">
      <img src={thumbnails.medium.url} alt="Thumbnail" className="rounded-lg" />
      <ul className="py-2 px-1">
        <li className="flex justify-between font-bold text-lg">
          {title}
          <MoreVertOutlinedIcon />
        </li>
        <li>{channelTitle}</li>
        <li className="text-gray-700">
          {timeSinceEvent(publishedAt)} |{" "}
          {(statistics.viewCount / 1000000).toFixed(2)}M
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
