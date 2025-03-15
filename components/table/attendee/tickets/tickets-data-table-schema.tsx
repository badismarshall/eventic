import { z } from "zod"


export const ticketsSchema = z.object({
    id: z.string(),
    event: z.string(),
    date: z.string(),
    price: z.string(),
    status: z.string(),
})

export type Ticket = z.infer<typeof ticketsSchema>