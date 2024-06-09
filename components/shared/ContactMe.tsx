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
      className="w-full h-full bg-white"
      style={{
        backgroundImage: 'url("/assets/images/contactme.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        id="contact"
        className="h-full md:h-screen justify-center mx-auto md:my-20 w-screen max-w-5xl flex flex-col md:flex-row items-center mt-5 pt-8 md:pt-0 bg-black/40 md:rounded-2xl"
      >
        <div className="flex px-2 md:px-0 flex-col w-80 md:h-full justify-center md:bg-black/20 md:rounded-2xl">
          <div className="flex flex-col md:pb-10 p-5">
            {/* <motion.p
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
              className=" border text-center p-1 border-black bg-white"
            >
              To schedule an appointment for assessment or treatment, please
              contact Claro Clinic during our office hours. We are available
              Monday to Thursday from 08:00 to 16:00, and Fridays from 08:00 to
              12:00. We kindly ask that any cancellations be made at least 24
              hours in advance. In the event of a no-show or failure to cancel,
              the patient will be responsible for the full payment, except in
              cases of emergency.
            </motion.p> */}
            <motion.a
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}
              className=" border text-center border-black bg-white mt-10 text-darkBrown"
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
              className=" mt-1 border border-black text-center bg-white text-darkBrown"
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
            className="p-5 mx-5 bg-white border border-black"
          >
            <p className="text-darkBrown">Claro Clinic</p>
            <p className="text-darkBrown">Syfred Douglas Street </p>
            <p className="text-darkBrown">N1 City </p>
            <p className="text-darkBrown">Cape Town </p>
            <p className="text-darkBrown">7463 </p>
          </motion.a>

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
              className="flex w-full items-center justify-center cursor-pointer border border-black bg-white"
            >
              <p className="mr-3 text-2xl text-darkBrown">Proceed to map</p>
              <Icon name="location" color="darkBrown" />
            </motion.a>
          </div>
        </div>
        <div className="flex flex-col mx-auto items-center md:h-full justify-center mt-5">
          <h1 className="py-5 text-white md:text-2xl text-center">
            Fill out the contact form for more information on our fees.
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
    </div>
  );
};

export default ContactMe;
