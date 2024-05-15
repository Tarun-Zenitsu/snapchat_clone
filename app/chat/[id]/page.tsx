import ChatPage from "@/components/ChatPage";
import { getUserProfile } from "@/lib/userData";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let userProfile = await getUserProfile(id);
  // userProfile = JSON.stringify(userProfile)
  return (
    <div className="w-[75%]">
      <ChatPage userProfile={userProfile} />
    </div>
  );
};

export default page;
