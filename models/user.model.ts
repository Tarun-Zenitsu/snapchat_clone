import mongoose, { Document, Model } from "mongoose";

export interface UserInterface {
  username: string;
  fullname: string;
  email: string;
  porfilePhoto: string;
}

export interface UserDocument extends UserInterface, Document {
  createdAt: Date;
  updatedAt: Date;
}

//both userModel and userSchama are same

const userModel = new mongoose.Schema<UserDocument>(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    fullname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    porfilePhoto: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const User: Model<UserDocument> =
  mongoose?.models?.User || mongoose.model("User", userModel);
