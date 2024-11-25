import React from "react";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Link } from "react-router-dom";

const SideBar = () => {
  const toggleSideBar = useSelector((store) => store?.app?.isSidebarOpen);
  if (!toggleSideBar) return null;
  return (
    <div className="min-w-60 px-5">
      <ul className="py-2">
        <Link to="/">
          <li className="py-2">
            <HomeIcon className="mr-6" />
            Home
          </li>
        </Link>
        <li className="py-2">
          <OndemandVideoOutlinedIcon className="mr-6" />
          Shorts
        </li>
        <li className="py-2">
          <SubscriptionsOutlinedIcon className="mr-6" />
          Subscriptions
        </li>
      </ul>
      <hr className="border-gray-300 border" />
      <h1 className="text-xl py-4">You</h1>
      <ul className="py-2">
        <li className="py-2">
          <HistoryOutlinedIcon className="mr-6" />
          History
        </li>
        <li className="py-2">
          <PlaylistPlayOutlinedIcon className="mr-6" />
          Playlists
        </li>
        <li className="py-2">
          <WatchLaterOutlinedIcon className="mr-6" />
          Watch later
        </li>
        <li className="py-2">
          <ThumbUpOutlinedIcon className="mr-6" />
          Liked videos
        </li>
      </ul>
      <hr className="border-gray-300 border" />
    </div>
  );
};

export default SideBar;
