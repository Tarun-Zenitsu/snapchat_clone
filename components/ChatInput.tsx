"use client";

import React, { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { Button } from "./ui/button";
import { EmojiPopOver } from "./EmojiPopOver";

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>("");
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="p-2 cursor-pointer bg-gray-200 rounded-full">
        <MdPhotoCamera size={"24px"} />
      </div>
      <form onSubmit={submitHandler} className="w-full">
        <div className="flex gap-2 items-center">
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            placeholder="Sand a snap message"
            className="rounded-full w-full border border-gray-400 outline-none p-2 font-medium"
          />
          <Button className="rounded-full" type="submit">
            Sand snap
          </Button>
        </div>
      </form>
      <div>
        <EmojiPopOver />
      </div>
    </div>
  );
};

export default ChatInput;
