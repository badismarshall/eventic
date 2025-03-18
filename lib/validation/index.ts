
import { use } from "react"
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
