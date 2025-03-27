import { z } from "zod";

export const AddNewCouponValidation = z.object({
    couponType: z.string().min(3),
    couponTitle: z.string().min(3),
    couponCode: z.string().min(3),
    LimitForSameUser: z.string().min(3),
    DiscountType: z.string().min(3),
    DiscountPercent : z.number(),
    MinimumPurchase : z.number(),
    MaximumPurchase : z.number(),
    StartDate: z.date(),
    ExpireDate: z.date()
  })