import { z } from "zod"


export const paymentGatewaysSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    orderofapperence: z.number(),
})

export type PaymentGetway = z.infer<typeof paymentGatewaysSchema>