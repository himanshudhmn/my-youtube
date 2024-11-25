import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className="w-full">
      <div className="px-6 py-4 flex">
        <div>
          <iframe
            width="1150"
            height="630"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1?si=OIGMvKMnNr36CXsF`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
