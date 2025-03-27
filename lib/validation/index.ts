
import * as z from "zod"




// it will be removed later
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





