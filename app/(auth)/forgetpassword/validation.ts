import { z } from "zod";

export const ForgetPasswordValidation = z.object({
    email: z.string().email(),
  })