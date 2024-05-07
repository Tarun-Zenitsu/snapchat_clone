import mongoose, { Document, Model, PopulatedDoc, Types } from "mongoose";
import { UserDocoment } from "./user.model";

export interface MessageInterface {
  senderId: Types.ObjectId | PopulatedDoc<UserDocoment>;
  reciverId: Types.ObjectId | PopulatedDoc<UserDocoment>;
  content: string;
  messageType: "text" | "image";
  opened: boolean;
}

export interface MessageDocument extends MessageInterface, Document {
  createdAt: Date;
  updatedAt: Date;
}

const messageModel = new mongoose.Schema<MessageDocument>(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reciverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      require: true,
    },
    messageType: {
      type: String,
      require: true,
      enum: ["text", "image"],
    },
    opened: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Message: Model<MessageDocument> =
  mongoose?.models?.Message || mongoose.model("Message", messageModel);
