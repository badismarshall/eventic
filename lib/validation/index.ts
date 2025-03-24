
import { description } from "@/app/(root)/dashboard/administrator/page"
import { title } from "process"
import * as z from "zod"

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  })

export const SignupValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
    userRole: z.string().default("Participant"),
  })

export const ForgetPasswordValidation = z.object({
  email: z.string().email(),
})

export const ProfileFormValidation = z.object({
  email: z.string().email(),
  username: z.string().min(3, { message: "Username must be at least 3 characters." }),
  firstName: z.string().min(3, { message: "First name must be at least 3 characters." }),
  lastName: z.string().min(3, { message: "Last name must be at least 3 characters." }),
  phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 characters." }),
  dateOfBirth: z.string().min(10, { message: "Date of birth must be at least 10 characters." }),
  address: z.string(),
  city: z.string(),
  zipCode: z.string(),
  state: z.string(),
})

export const ChangePasswordValidation = z.object({
  currentPassword: z.string().min(8, { message: "Le mot de pass doit être supérieur à 5 caractères." }),
  newPassword: z.string().min(8, { message: "Le nouveau mot de pass doit être supérieur à 5 caractères." }),
  confirmPassword: z.string().min(8),
})

export const PushNotificationValidation = z.object({
    title: z.string().min(5, {message: "Le titre doit être supérieur à 5 caractères."}),
    description: z.string().min(5),
    file: z.custom<File[]>()
})

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

export const AddBannerValidation = z.object({
  title: z.string().min(5, {message: "Le titre doit être supérieur à 5 caractères."}),
  file: z.custom<File[]>()
})