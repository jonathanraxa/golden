import React, { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { postStatus, getPosts } from "@/api/FirestoreAPI";
import { PostDropdown } from "@/components/home/post-dropdown";

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

export const Home = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      post: "",
    },
  });
  const [allPosts, setAllPosts] = useState([]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    form.reset();
    postStatus(data.post);
  }

  useMemo(() => {
    getPosts(setAllPosts);
  }, []);

  return (
    <div className="flex justify-center flex-col my-0 mx-auto w-[50%] mt-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[100%] space-y-6"
        >
          <FormField
            control={form.control}
            name="post"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="What do you want to talk about?"
                    className="resize-none h-[120px] bg-[whitesmoke] mt-[30px] border border-[#b7b7b7] rounded-[7px] flex justify-around items-center"
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
              className="bg-[#0077B5] hover:bg-[#006699] text-white font-sans text-base px-4 py-2 rounded"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-col gap-5 mt-5">
        {allPosts.map((post) => {
          return (
            <Card
              className="px-2 min-h-auto bg-[whitesmoke] mt-[30px] border border-[#b7b7b7] rounded-[7px] flex flex-col pb-5"
              key={post.id}
            >
              <CardHeader className="px-0 flex justify-between content-center">
                <CardDescription className="px-2 text-sm leading-none font-small text-[#757575]">
                  {post.timeStamp}
                </CardDescription>
                <CardAction>
                  <PostDropdown postId={post.id} />
                </CardAction>
              </CardHeader>
              <CardContent className="px-2">
                <p>{post.status}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
