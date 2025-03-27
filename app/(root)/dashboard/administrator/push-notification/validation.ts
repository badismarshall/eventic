import { z } from "zod";

export const PushNotificationValidation = z.object({
    title: z.string().min(5, {message: "Le titre doit être supérieur à 5 caractères."}),
    description: z.string().min(5),
    file: z.custom<File[]>()
})
