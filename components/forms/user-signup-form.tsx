"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
// import { login } from "@/server/actions/userAuth"
import { SignupValidation } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Select } from "@radix-ui/react-select"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignUpUserForm({ className, ...props }: UserAuthFormProps) {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(values: z.infer<typeof SignupValidation>) {

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
              <FormLabel htmlFor="email">
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-1">
              <FormLabel>
                Mot de passe
              </FormLabel>
              <FormControl>
                <Input
                    id="password"
                    placeholder="Entrer votre mot de pass"
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
              </FormControl>
              <FormDescription className="text-gray-400 text-xs">
                Min 8 caractères avec une combinaison de lettres et de chiffres
              </FormDescription> 
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="grid gap-1">
              <FormLabel>
                Confiramation de Mot de pass
              </FormLabel>
              <FormControl>
                <Input
                    id="confirmPassword"
                    placeholder="Confirmer votre mot de pass"
                    type="password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    disabled={isLoading}
                    {...field}
                  />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userRole"
          render={({ field }) => (
            <FormItem className="grid gap-1">
              <FormLabel>
                Role
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
              <SelectTrigger>
                    <SelectValue placeholder="Vous êtes Qui?" className="text-muted-foreground"/>
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                  <SelectItem value="Participant">Participant</SelectItem>
                  <SelectItem value="Organisateur">Organisateur</SelectItem>
                </SelectContent>
                </Select>
            </FormItem>
          )}
        />
        <Button disabled={isLoading}>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
            S'inscrire
        </Button>
        <p className="text-sm text-muted-foreground text-center">
            Vous avez déjà un compte? {" "}
          <Link
                href="/login"
                className="text-primary"
              >
                 Se connecter
          </Link>
        </p>
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