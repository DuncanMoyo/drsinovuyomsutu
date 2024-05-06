"use client";

import formSchema from "@/lib/formSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Icon from "../ui/Icon";
import Link from "next/link";

type Props = {
  message: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
};

const ContactMe = ({ message }: Props) => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: message,
  });

  const onSubmit = (values: z.infer<typeof formSchema>, e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // @ts-ignore
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          from_name: values.firstName,
          to_name: "Duncan Moyo",
          from_email: values.email,
          to_email: "duncanfmoyo@gmail.com",
          message: values.message,
        },
        process.env.NEXT_PUBLIC_USER_ID
      )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          form.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="four"
      className="h-full md:h-screen justify-center mx-auto md:mt-20 w-screen max-w-5xl flex flex-col md:flex-row items-center rounded-2xl mt-5 pt-8 md:pt-0 bg-lightChampagne"
    >
      <div className="flex px-2 md:px-0 flex-col w-80 md:h-full justify-center rounded-2xl md:bg-peach">
        <div className="flex flex-col md:pb-10 p-5">
          <a className="font-light" href="tel:0710093161">
            Call: 071 009 3161
          </a>
          <a href="mailto:drmsutupsych@gmail.com" className="font-light mt-1">
            Email: drmsutupsych@gmail.com
          </a>
        </div>
        <div className="md:pb-10 p-5">
          <p className="font-light">Claro Clinic</p>
          <p className="font-light">Syfred Douglas Street </p>
          <p className="font-light">N1 City </p>
          <p className="font-light">Cape Town </p>
          <p className="font-light">7463 </p>
        </div>

        <div className="md:pb-10 p-5">
          <p className="">Working Hours possibly here</p>
        </div>

        <div className="md:pb-10 p-5">
          <a
            href="https://maps.app.goo.gl/Cp3WwSUiyMjdM2ef9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center cursor-pointer"
          >
            <p className="mr-3">Proceed to map</p>
            <Icon name="location" />
          </a>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center md:h-full justify-center  mt-5">
        <div className="pb-5">
          <Form {...form}>
            <form
              className="w-[300px] md:w-[500px]"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex-col md:flex md:flex-row">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem className="w-full px-2 my-3">
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem className="w-full px-2 my-3">
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex-col md:flex md:flex-row">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full px-2 my-3">
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full px-2 my-3">
                    <FormControl>
                      <Textarea
                        placeholder="Message"
                        className="text-slate"
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full mt-4 h-[60px]"
                type="submit"
                variant={"default"}
              >
                <p className="uppercase text-lighNavy">
                  {loading ? <Loader2 /> : "send message"}
                </p>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
