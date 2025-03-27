import { z } from "zod";

export const AddBannerValidation = z.object({
    title: z.string().min(5, {message: "Le titre doit être supérieur à 5 caractères."}),
    file: z.custom<File[]>()
  })