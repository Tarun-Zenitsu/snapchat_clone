import React from "react";
import LogoutBtn from "./shared/LogoutBtn";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import SearchBar from "./SearchBar";
import Friends from "./Friends";

const LeftSidebar = async () => {
  const authUser = await auth();
  return (
    <div className="w-[50%] md:w-[25%] border-2 border-gray-300 rounded-lg">
      <div className="flex items-center justify-between border-b border-gray-300 pb-3 p-4 m-2">
        <div className="flex items-center gap-2">
          {authUser && (
            <>
              <Avatar>
                <AvatarImage src={authUser.user?.image!} alt="userImg" />
              </Avatar>
              <h1 className="font-medium">{authUser.user?.name}</h1>
            </>
          )}
        </div>
        <div>
          <LogoutBtn />
        </div>
      </div>
      <div className="p-2">
        <SearchBar />
        <Friends />
      </div>
    </div>
  );
};

export default LeftSidebar;
