import React from "react";
import ChatBody from "./ChatBody";
import ChatTopbar from "./ChatTopbar";
import ChatInput from "./ChatInput";

const ChatPage = () => {
  return (
    <div>
      <ChatTopbar />
      <ChatBody />
      <ChatInput />
    </div>
  );
};

export default ChatPage;
