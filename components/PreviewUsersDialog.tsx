import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function PreviewUsersDialog({
  selectedFile,
  close,
  onPreview,
}: {
  selectedFile: any;
  close: any;
  onPreview: any;
}) {
  return (
    <Dialog open={selectedFile}>
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
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
