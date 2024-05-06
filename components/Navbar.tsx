import React from "react";
import SnapchatLogo from "@/public/snapchat-log.png";
import Image from "next/image";
import { Input } from "./ui/input";
import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";
import { TbGridDots } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-screen px-10 py-4">
      <div className="flex items-center gap-2">
        <Image src={SnapchatLogo} width={50} height={50} alt="snapchat-logo" />
        <Input type="text" placeholder="Search..." className="rounded-full" />
      </div>
      <div className="md:block hidden">
        <Button variant="ghost">Stories</Button>
        <Button variant="ghost">Spotlight</Button>
        <Button variant="ghost">Chat</Button>
        <Button variant="ghost">Lenses</Button>
      </div>
      <div className="flex items-center gap-5">
        <Button
          size={"icon"}
          variant={"secondary"}
          className="rounded-full bg-white text-black"
        >
          <TbGridDots size={"24px"} />
        </Button>
        <Button className="rounded-full">Snapchat Ads</Button>
        <Button className="rounded-full">Download</Button>
      </div>
    </div>
  );
};

export default Navbar;
