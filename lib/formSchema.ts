import { z } from "zod";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First Name must be at least 3 characters long" }),
  lastName: z
    .string()
    .min(3, { message: "Last Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(3, { message: "Message must be at least 3 characters long" }),
});

export default formSchema;
