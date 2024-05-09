import ChatCamera from "@/components/ChatCamera";
import React from "react";

const ChatPage = () => {
  return (
    <div className="flex flex-grow items-center">
      <div className="bg-chatImage bg-cover bg-right-bottom rounded-lg w-full h-[98%] flex m-2 items-center justify-center p-6">
        <ChatCamera />
      </div>
    </div>
  );
};

export default ChatPage;
