import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const data = await response.json();
    setVideos((prevVideos) => [...prevVideos, ...data.items]);
  };

  const handleScroll = (e) => {
    console.log(e.target);
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 50) {
      getVideos();
    }
  };
  useEffect(() => {
    getVideos();
  }, []);
  if (videos.length === 0) return null;

  return (
    <div
      className="p-2 m-2 flex flex-wrap overflow-auto h-screen"
      onScroll={handleScroll}
    >
      {videos.map((video) => (
        <Link to={`watch?v=${video.id}`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
