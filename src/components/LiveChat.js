import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generate } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessages({
          name: generate(),
          text: "Great movie",
        })
      );
      // console.log("Timer");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAddNewMessage = () => {
    if (newMessage.length > 0) {
      dispatch(
        addMessages({
          name: "Himanshu",
          text: newMessage,
        })
      );
    }
    setNewMessage("");
  };
  return (
    <>
      <div className="ml-2 p-2 border border-slate-500 w-full h-[580px] rounded-lg bg-slate-50 overflow-y-scroll flex flex-col-reverse">
        {messages.map((m) => (
          <ChatMessage name={m.name} text={m.text} />
        ))}
      </div>
      <div className="flex justify-between items-center w-full ml-2">
        <input
          type="text"
          placeholder="Enter your message"
          className="p-2 my-2 border-b-2 w-96 outline-none"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="px-4 py-2 border rounded-lg bg-slate-200"
          onClick={handleAddNewMessage}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChat;
