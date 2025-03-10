"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
// import { login } from "@/server/actions/userAuth"
import { ForgetPasswordValidation } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ForgetPasswordUserForm({ className, ...props }: UserAuthFormProps) {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof ForgetPasswordValidation>>({
    resolver: zodResolver(ForgetPasswordValidation),
    defaultValues: {
      email: '',
    },
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(values: z.infer<typeof ForgetPasswordValidation>) {

    setIsLoading(true)

    // const error = await login({
    //   email: values.email,
    //   password: values.password
    // })

    // setIsLoading(false)
    // if (error) {
    //   toast({
    //     title: "Login Failed",
    //     variant: "destructive",
    //   })
    // }
  }

  return (
    <>
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid gap-6", className)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid gap-1">
              <FormLabel className="" htmlFor="email">
                Email
              </FormLabel>
              <FormControl>
                <Input
                    id="email"
                    placeholder="Entrer votre email"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isLoading}>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Envoyer
        </Button>
      </form>
    </Form>
       <div className="relative">
         <div className="absolute inset-0 flex items-center">
           <span className="w-full border-t" />
         </div>
       </div>
    </>
  )
}