import { z } from "zod";

export const emailSchema = z
  .string({ message: "Email is required" })
  .email({ message: "Invalid email" });

export const passwordSchema = z
  .string({ message: "Password is required" })
  .min(8, { message: "Password must be at least 8 characters" })
  .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
  });

export const StartupSchema = z.object({
  company_name: z.string().min(1, { message: "Company name is required" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email" }),
  company_url: z.string().url({ message: "Invalid URL" }),
  company_do: z.string().min(1, { message: "Company description is required" }),
  financial_stage: z.enum(["STARTUP", "EARLY", "EXPANSION", "LATER"]),
  financial_request: z
    .string()
    .min(1, { message: "Financial request is required" }),
  previous_funding: z
    .string()
    .min(1, { message: "Previous funding is required" }),
  industry: z.string().min(1, { message: "Industry is required" }),
});

export const InvestorSchema = z.object({
  usCitizen: z.boolean(),
  businessStage: z.string(),
  fundingAmount: z.number().min(1, { message: "Funding amount is required" }),
  industryInterests: z
    .array(z.string())
    .min(1, { message: "At least one industry interest is required" }),
});
