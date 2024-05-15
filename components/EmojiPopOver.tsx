import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EmojiArray } from "@/lib/emoji";
import Image from "next/image";
import { MdEmojiEmotions } from "react-icons/md";

export function EmojiPopOver() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} className="rounded-full" variant="outline">
          <MdEmojiEmotions size={"24px"} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-1">
        <div className="flex flex-wrap gap-4 items-center">
          {EmojiArray.map((emoji, index) => {
            return (
              <div
                className="cursor-pointer scale-90 hover:scale-110 transition-transform duration-100"
                key={index}
              >
                <Image src={emoji.src} alt={emoji.alt} width={35} height={35} />
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
