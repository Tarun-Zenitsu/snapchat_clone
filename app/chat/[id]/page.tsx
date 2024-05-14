import ChatPage from "@/components/ChatPage";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="w-[75%]">
      <ChatPage />
    </div>
  );
};

export default page;
