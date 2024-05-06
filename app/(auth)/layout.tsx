import React from "react";
import snapChatlogo from "@/public/snapchat-log.png";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-300 h-screen">
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-white p-10 flex flex-col items-center rounded-lg shadow-md text-center">
          <Image src={snapChatlogo} alt="snapchatlog" width={40} height={40} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
