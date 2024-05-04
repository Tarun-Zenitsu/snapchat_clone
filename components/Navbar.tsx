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
    <div className="flex items-center justify-between px-10 py-4 w-screen">
      <div className="flex items-center gap-2">
        <Image src={SnapchatLogo} alt="snapchatLogo" width={50} height={50} />
        <div className="relative">
          <Input
            placeholder="search"
            type="text"
            className="rounded-full outline-none border-none pl-10 pr-4 py-2"
          />
          <IoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div>
        <Button variant={"ghost"}>Stories</Button>
        <Button variant={"ghost"}>Spotlight</Button>
        <Button variant={"ghost"}>Chat</Button>
        <Button variant={"ghost"}>Lenses</Button>
      </div>
      <div className="flex gap-2">
        <Button
          variant={"ghost"}
          className="rounded-full bg-white text-black"
          size={"icon"}
        >
          <TbGridDots size={"25px"} />
        </Button>
        <Button className="rounded-full">Snapchat Ads</Button>
        <Button className="rounded-full">Download</Button>
        <Button className="rounded-full text-white" size={"icon"}>
          <IoMdLogOut size={"20px"} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
