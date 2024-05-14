"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { UserDocument } from "@/models/user.model";
import { Loader2 } from "lucide-react";

export function PreviewUsersDialog({
  selectedFile,
  close,
  onPreview,
}: {
  selectedFile: string;
  close: () => void;
  onPreview: () => void;
}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDocument>();

  const selectedUserHandler = (user: UserDocument) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const featchUser = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/chat/getusers");
        const jsonData = await res.json();
        setUsers(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    featchUser();
  }, []);

  return (
    <Dialog open={!!selectedFile}>
      <DialogContent
        onInteractOutside={close}
        className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col"
      >
        <DialogHeader>
          <div className="flex items-center relative h-3/4 my-auto">
            <Input
              type="text"
              placeholder="Serch user to send snap"
              id="name"
            />
          </div>
        </DialogHeader>
        <div className="grid gap-1 py-4">
          {users.map((user: UserDocument) => (
            <div
              className={`flex ${
                selectedUser?._id === user._id ? "bg-gray-200" : null
              } items-center gap-5 cursor-pointer p-2 rounded-md hover:bg-gray-200`}
              key={user._id}
              onClick={() => selectedUserHandler(user)}
            >
              <Avatar>
                <AvatarImage src={user.porfilePhoto} alt="user" />
              </Avatar>
              <div>
                <h1 className="font-medium">{user.username}</h1>
              </div>
            </div>
          ))}
          {loading && (
            <div className="mx-auto">
              <Loader2 className="m-2 h-5 w-5 animate-spin" />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
