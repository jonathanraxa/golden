import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"
import { postStatus } from "@/api/FirestoreAPIs";

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
  const form = useForm<z.infer<typeof FormSchema>>();

  function onSubmit(data: z.infer<typeof FormSchema>) {
   postStatus(data.post);
  };

  return (
    <div className="flex justify-center my-0 mx-auto w-[50%] mt-10">
      <Form {...form} >
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      <FormField
        control={form.control}
        name="post"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                placeholder="What do you want to talk about?"
                className="resize-none rounded-lg"
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
      <Button className="w-auto" type="submit">Submit</Button>
    </form>
  </Form>
    </div>
  );
}
