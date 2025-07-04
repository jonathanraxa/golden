import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Modal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>Open Dialog</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Textarea id="name-1" placeholder="Type your message here." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>Cancel</DialogClose>
            <Button type="submit">Post</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
