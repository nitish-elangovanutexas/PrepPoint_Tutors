import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Valid email required"),
  phone: z.string().max(40).optional().or(z.literal("")),
  message: z.string().min(1, "Message is required").max(5000),
  service: z.enum(["sat", "counseling", "both"]),
  preferredTime: z.enum(["morning", "afternoon", "evening"]),
  website: z.string().optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
