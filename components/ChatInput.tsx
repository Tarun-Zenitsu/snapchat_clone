"use client";

import React, { useState } from "react";
import { MdPhotoCamera } from "react-icons/md";
import { Button } from "./ui/button";
import { EmojiPopOver } from "./EmojiPopOver";
import { sandSnapMessage } from "@/lib/serveractions";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";

const ChatInput = () => {
  const param = useParams<{ id: string }>();
  const receiverId = param.id;
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      //send snap useing server action
      await sandSnapMessage(inputText, receiverId, "text");
      setInputText("");
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setLoading(false);
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
          {loading ? (
            <Button>
              <Loader2 className="mr-2 h-4 w-4 animate-spin rounded-full" />
              please wait
            </Button>
          ) : (
            <Button className="rounded-full" type="submit">
              Sand snap
            </Button>
          )}
        </div>
      </form>
      <div>
        <EmojiPopOver />
      </div>
    </div>
  );
};

export default ChatInput;
