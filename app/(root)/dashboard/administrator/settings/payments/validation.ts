import { z } from "zod";

export const PaymentValidation = z.object({
    currency : z.string(),
    ticketfee : z.number(),
    ticketPricePercentageCut: z.number().max(60) /* max of 60% */
    /* Anthor fields in future */
})