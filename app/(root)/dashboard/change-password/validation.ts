import { z } from "zod";

export const ChangePasswordValidation = z.object({
    currentPassword: z.string().min(8, { message: "Le mot de pass doit être supérieur à 5 caractères." }),
    newPassword: z.string().min(8, { message: "Le nouveau mot de pass doit être supérieur à 5 caractères." }),
    confirmPassword: z.string().min(8),
  })
  