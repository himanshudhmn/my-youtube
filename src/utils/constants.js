// const API_KEY = "AIzaSyA756cFvUzwgFR6aaduni-wbral-P8VPKY";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
