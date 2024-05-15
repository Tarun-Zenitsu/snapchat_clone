import { ArrowBigLeft } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const ChatTopbar = ({ userProfile }: { userProfile: any }) => {
  console.log(userProfile);

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <ArrowBigLeft />
        <Avatar>
          <AvatarImage src={userProfile.porfilePhoto} alt="userProfilePhoto" />
        </Avatar>
        <h1 className="font-semibold text-lg">{userProfile.username}</h1>
      </div>
      <form>
        <Submitbutton />
      </form>
    </div>
  );
};

export default ChatTopbar;

const Submitbutton = () => {
  return <Button>Submit</Button>;
};
