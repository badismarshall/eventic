import { z } from "zod"


export const usersSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    status: z.string(),
    registrationdate: z.string(),
    phoneNo: z.string(),
})

export type User = z.infer<typeof usersSchema>