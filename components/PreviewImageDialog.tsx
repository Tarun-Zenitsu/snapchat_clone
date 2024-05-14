import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import Image from "next/image";

export function PreviewImageDialog({
  selectedFile,
  close,
  imageChange,
  setFleg,
}: {
  selectedFile: any;
  close: any;
  imageChange: any;
  setFleg: any;
}) {
  return (
    <Dialog open={selectedFile}>
      <DialogContent
        onInteractOutside={close}
        className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col"
      >
        <DialogHeader>
          <div className="flex items-center relative h-3/4 my-auto">
            <Image
              src={selectedFile}
              alt="selected file"
              width={400}
              height={400}
              className="rounded-md border mx-auto border-gray-400 object-contain"
            />
          </div>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mx-auto flex items-center">
          <DialogClose>
            <Button
              variant={"destructive"}
              size={"sm"}
              onClick={close}
              className="rounded-full"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button size={"sm"} onClick={imageChange} className="rounded-full">
            Change
          </Button>
          <Button
            size={"sm"}
            onClick={() => setFleg && setFleg(true)}
            className="rounded-full px-4 bg-green-500 hover:bg-green-400"
          >
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
