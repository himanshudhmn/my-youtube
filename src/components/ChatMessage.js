import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex items-center my-2">
      <img
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        className="w-9 h-9 "
      />
      <span className="font-bold mx-2">{name}</span>
      <span> {text} </span>
    </div>
  );
};

export default ChatMessage;
