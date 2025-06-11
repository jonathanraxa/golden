import React, { useState, useMemo } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { postStatus } from "@/api/FirestoreAPI";
import { getPosts } from "@/api/FirestoreAPI";
import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardAction,
  CardTitle,
} from "@/components/ui/card";
import { PostDropdown } from "@/components/home/post-dropdown";
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

export const Posts = ({ currentUser }) => {
  const [allPosts, setAllPosts] = useState([]);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      post: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    form.reset();
    postStatus({ currentUser, status: data.post });
  }

  useMemo(() => {
    getPosts(setAllPosts);
  }, []);

  return (
    <>
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
      <div className="mt-5 flex flex-col gap-5">
        {allPosts.map((post) => {
          return (
            <Card
              className="mt-[30px] flex min-h-auto flex-col rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] px-2 pb-5"
              key={post.id}
            >
              <CardHeader className="flex content-center justify-between px-0">
                <div className="px-2">
                  <CardTitle
                    className="cursor-pointer text-xl font-extrabold text-gray-900 transition-colors duration-200 hover:text-blue-600"
                    onClick={() => navigate(routes.profile)}
                  >
                    {post.userName}
                  </CardTitle>
                  <CardDescription className="font-small mt-2 text-sm leading-none text-[#757575]">
                    {post.timeStamp}
                  </CardDescription>
                </div>
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
    </>
  );
};
