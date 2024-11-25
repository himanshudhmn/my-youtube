import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const cache = useSelector((store) => store.search);
  const handleToggle = () => {
    dispatch(toggleSidebar());
  };
  const getSearchResults = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + search);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(
      cacheResults({
        [search]: data[1],
      })
    );
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[search]) {
        setSuggestions(cache[search]);
      } else {
        getSearchResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  return (
    <div className="grid grid-flow-col items-center px-4">
      <div className="col-span-1 flex items-center">
        <img
          onClick={handleToggle}
          className="w-9 h-9 p-1 cursor-pointer"
          alt="sidebar"
          src="https://icon-library.com/images/sidebar-icon/sidebar-icon-20.jpg"
        />
        <Link to="/">
          <img
            onClick={handleToggle}
            className="w-28 mx-4"
            alt="logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          />
        </Link>
      </div>
      <div className="col-span-10 mx-auto">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-[37rem] border px-4 py-2 rounded-l-full border-gray-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-slate-100 px-6 py-2 rounded-r-full border border-gray-500">
            <SearchOutlinedIcon />
          </button>
        </div>
        {showSuggestions && suggestions.length !== 0 && (
          <div className="absolute bg-white w-[37rem] py-2 px-5 shadow-lg rounded-lg">
            <ul>
              {suggestions.map((result) => (
                <li className="py-2">
                  <SearchOutlinedIcon fontSize="small" className="mr-1" />{" "}
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="w-9"
          alt="icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
