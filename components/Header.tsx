import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import avatarImg from "@/public/myai-asset.webp";
import { FaLaptop } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/auth";
import { AiOutlineMessage } from "react-icons/ai";

const Header = async () => {
  const autUser = await auth();

  return (
    <div className="flex justify-between max-w-6xl items-center mx-auto">
      <div>
        <h1 className="text-7xl font-medium">
          Snapchat is <br /> now on the <br />
          web!
        </h1>
        <h1 className="my-5 text-xl">
          Chat, Snap, and video call your friends from <br />
          wherever you are.
        </h1>
        {autUser ? (
          <Link href={"/login"}>
            <Button className="rounded-full gap-2">
              <AiOutlineMessage size="18px" />
              Start Chat
            </Button>
          </Link>
        ) : (
          <Link href={"/login"}>
            <Button className="rounded-full gap-2">
              <FaLaptop />
              Login to chat
            </Button>
          </Link>
        )}
      </div>
      <div>
        <Image src={avatarImg} alt="avatarImg" width={650} height={650} />
      </div>
    </div>
  );
};

export default Header;
