import React from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { postStatus } from "@/api";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 w-[100%] space-y-6"
      >
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
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button
            className="rounded bg-[#0077B5] px-4 py-2 font-sans text-base text-white hover:bg-[#006699]"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
