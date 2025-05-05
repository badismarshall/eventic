import { z } from "zod";


export const RecaptchaValidation = z.object(
    {
        enableRecaptcha: z.boolean(),
        siteKey: z.string(),
        secretKey: z.string(),
    }
)