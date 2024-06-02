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
import { motion } from "framer-motion";

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
      id="contact"
      className="h-full md:h-screen justify-center mx-auto md:mt-20 w-screen max-w-5xl flex flex-col md:flex-row items-center rounded-2xl mt-5 pt-8 md:pt-0 bg-lightestTeal"
    >
      <div className="flex px-2 md:px-0 flex-col w-80 md:h-full justify-center rounded-2xl md:bg-lighterTeal">
        <div className="flex flex-col md:pb-10 p-5">
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            className=" border text-center text-white bg-darkTeal"
            href="tel:0710093161"
          >
            Call: 071 009 3161
          </motion.a>
          <motion.a
            href="mailto:drmsutupsych@gmail.com"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            className=" mt-1 border text-center text-white bg-darkTeal"
          >
            Email: drmsutupsych@gmail.com
          </motion.a>
        </div>
        <motion.a
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
          }}
          href="https://maps.app.goo.gl/Cp3WwSUiyMjdM2ef9"
          target="_blank"
          rel="noopener noreferrer"
          className="p-5 mx-5 bg-darkTeal border"
        >
          <p className="text-white">Claro Clinic</p>
          <p className="text-white">Syfred Douglas Street </p>
          <p className="text-white">N1 City </p>
          <p className="text-white">Cape Town </p>
          <p className="text-white">7463 </p>
        </motion.a>

        {/* <div className="md:pb-10 p-5">
          <p className="">Working Hours possibly here</p>
        </div> */}

        <div className="md:pb-10 p-5">
          <motion.a
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255, 255, 255)",
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            href="https://maps.app.goo.gl/Cp3WwSUiyMjdM2ef9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center cursor-pointer border bg-darkTeal"
          >
            <p className="mr-3 text-2xl text-white">Proceed to map</p>
            <Icon name="location" color="white"/>
          </motion.a>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center md:h-full justify-center mt-5">
        <h1 className="pb-10 text-darkBrown text-2xl text-center">
          Fill out our quick contact form for more information on our fees.
        </h1>
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
              <motion.div
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255, 255, 255)",
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
              >
                <Button
                  className="w-full h-[60px]"
                  type="submit"
                  variant={"default"}
                >
                  <p className="uppercase">
                    {loading ? <Loader2 /> : "send message"}
                  </p>
                </Button>
              </motion.div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
