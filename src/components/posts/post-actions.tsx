import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
  Textarea,
} from "@/components/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { deletePost, updatePost } from "@/api";

const FormSchema = z.object({
  post: z
    .string()
    .min(10, {
      message: "Post must be at least 2 characters.",
    })
    .max(160, {
      message: "Post must not be longer than 30 characters.",
    }),
});

export const PostActions = ({ post }) => {
  const [postValue, setPostValue] = useState(post.status);
  const [open, setOpen] = useState(false);

  const handleOnChangeInput = (event) => {
    setPostValue(event.target.value);
  };

  const form = useForm<z.infer<typeof FormSchema>>();

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    form.reset();
    updatePost(post.id, postValue);
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button
              variant="secondary"
              size="icon"
              className="size-10 shadow-none hover:bg-[#7978787c]"
              onClick={() => setOpen(true)}
            >
              <FontAwesomeIcon icon={faPen} />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Edit post</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="post"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="mt-[30px] flex h-[120px] resize-none items-center justify-around rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke]"
                          {...field}
                          {...form.register("post")}
                          value={postValue}
                          onChange={handleOnChangeInput}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="mt-3">
                  <DialogClose className="mr-3 rounded bg-[black] px-4 py-2 font-sans text-base text-white hover:bg-[#006699]">
                    Cancel
                  </DialogClose>
                  <Button
                    className="rounded bg-[#0077B5] px-4 py-2 font-sans text-base text-white hover:bg-[#006699]"
                    type="submit"
                    disabled={
                      !postValue.trim() ||
                      postValue.length < 5 ||
                      postValue.length > 500
                    }
                  >
                    Update
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button
              variant="secondary"
              size="icon"
              className="size-10 shadow-none hover:bg-[#7978787c]"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Are you sure you want to
                permanently delete this post from our servers?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                className="rounded bg-[#0077B5] px-4 py-2 font-sans text-base text-white hover:bg-[#006699]"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
