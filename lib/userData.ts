import { Message } from "@/models/message.model";
import { User, UserDocument } from "@/models/user.model";
import connectDatabase from "./db";

export const getSidebarUsers = async (loggedInUserId: string) => {
  try {
    const otherUsers = await User.find({ _id: { $ne: loggedInUserId } });
    const userInfo = await Promise.all(
      otherUsers.map(async (user) => {
        const lastMessage = await Message.findOne({
          $or: [
            { senderId: user._id, receverId: loggedInUserId },
            { senderId: loggedInUserId, receiverId: user._id },
          ],
        })
          .sort({ createdAt: -1 })
          .populate("senderId", "fullname porfilePhoto _id")
          .populate("receiverId", "fullname porfilePhoto _id")
          .exec();
        return {
          _id: user._id,
          participants: [user],
          lastMessage: lastMessage
            ? {
                ...lastMessage.toJSON(),
                senderId: lastMessage.senderId,
                receiverId: lastMessage.reciverId,
              }
            : null,
        };
      })
    );
    return userInfo;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserProfile = async (userId: string) => {
  try {
    await connectDatabase();
    const user: UserDocument | null = await User.findOne({ _id: userId });
    if (!user) return "user not found";
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
