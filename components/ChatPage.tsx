import React from "react";
import ChatBody from "./ChatBody";
import ChatTopbar from "./ChatTopbar";
import ChatInput from "./ChatInput";

const ChatPage = ({ userProfile }: { userProfile: any }) => {
  return (
    <div className="m-2 flex flex-col h-[96%]">
      <ChatTopbar userProfile={userProfile} />
      <ChatBody />
      <ChatInput />
    </div>
  );
};

export default ChatPage;
