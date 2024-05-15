"use server";

import { auth, signOut } from "@/auth";
import { Chat } from "@/models/chat.model";
import { Message } from "@/models/message.model";
import { redirect } from "next/navigation";

export const sandSnapMessage = async (
  image: string,
  reciverId: string,
  messageType: "image" | "text"
) => {
  try {
    const authUser = await auth();
    const senderId = authUser?.user?._id;

    const newMessage = await Message.create({
      senderId,
      reciverId,
      content: "cld",
      messageType,
    });
    let chat = await Chat.findOne({
      participents: { $all: [senderId, reciverId] },
    });
    if (!chat) {
      chat = await Chat.create({
        participents: [senderId, reciverId],
        messages: [newMessage._id],
      });
    } else {
      chat.messages.push(newMessage._id);
      await chat.save();
    }

    return JSON.parse(JSON.stringify(newMessage));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logoutHandler = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
    throw error;
  }
  redirect("/login");
};
