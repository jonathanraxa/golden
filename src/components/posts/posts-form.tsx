import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { postStatus } from "@/api";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Card,
  CardContent,
} from "@/components/ui";
import { Car } from "lucide-react";

const FormSchema = z.object({
  post: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export const PostsForm = ({ currentUser }) => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      post: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    form.reset();
    postStatus({ currentUser, status: data.post });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <img
          className="post-image"
          src={currentUser?.imageLink}
          alt="imageLink"
        /> */}
      <Card className="relative mt-[7rem] flex min-h-auto flex-col rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] px-2 pb-2">
        <CardContent className="flex flex-col items-center gap-2 py-10">
          <DialogTrigger
            variant="secondary"
            size="icon"
            className="ml-[-30px] h-[50px] w-[80%] cursor-pointer rounded-[30px] border border-[#b7b7b7] bg-[whitesmoke] px-[15px] py-0 text-left font-sans text-[14px] font-semibold text-[rgba(84,84,84,0.89)] outline-none"
          >
            Start a post
          </DialogTrigger>
        </CardContent>
      </Card>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Start a post</DialogTitle>
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
                      placeholder="What do you want to talk about?"
                      className="mt-[30px] flex h-[120px] resize-none items-center justify-around rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke]"
                      {...form.register("post")}
                      {...field}
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
                // disabled={
                //   !commentValue.trim() ||
                //   commentValue.length < 5 ||
                //   commentValue.length > 500
                // }
              >
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
