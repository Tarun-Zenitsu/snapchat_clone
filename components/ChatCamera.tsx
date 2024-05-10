"use client";
import { FaCamera } from "react-icons/fa";
import React, { useRef, useState } from "react";
import { readFileAsDataURL } from "@/lib/utils";

const ChatCamera = () => {
  const imageRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [fleg, setFleg] = useState(false);
  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      const dataUrl = await readFileAsDataURL(file);
      setSelectedFile(dataUrl);
    }
  };
  console.log(selectedFile);

  return (
    <div className="flex flex-col items-center justify-center m-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border p-5">
      <div
        className="rounded-full p-8 bg-white-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-200 cursor-pointer text-white"
        onClick={() => imageRef.current?.click()}
      >
        <FaCamera size={"30px"} />
        <input
          type="file"
          accept="image/*"
          hidden
          ref={imageRef}
          onChange={fileChangeHandler}
        />
      </div>
      <p className="w-2/3 text-center text-white mt-4 font-semibold text-lg">
        Let's send your fast snap.
      </p>
    </div>
  );
};

export default ChatCamera;
