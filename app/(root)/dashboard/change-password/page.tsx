'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ChangePasswordValidation } from "./validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type ChangePasswordFormValues = z.infer<typeof ChangePasswordValidation>

export default function AccountPage() {

  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(ChangePasswordValidation),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
  })

  function onSubmit(values: ChangePasswordFormValues) {
    console.log(values)
  }

    return(
        <div>
          <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Gérer Votre Compte! </h2>
                <p className="text-muted-foreground">
                Changer votre mot de passe!
                </p>
              </div>
            </div>
          <div >
            <Card className="max-w-5xl">
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-3" >
                    <FormField 
                      control={form.control}
                      name="currentPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mot de passe actuel</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" type="password"/>
                          </FormControl>
                          <FormDescription>
                            Votre mot de passe actuel
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField 
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nouveau mot de passe</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" type="password"/>
                          </FormControl>
                          <FormDescription>
                            Votre nouveau mot de passe
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField 
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirmer le nouveau mot de passe</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" type="password"/>
                          </FormControl>
                          <FormDescription>
                            Répéter le nouveau mot de passe
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <CardFooter className="px-6 py-2 justify-end">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button type="submit">Confirmer</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Vous etes sur !</DialogTitle>
                            <DialogDescription>
                            Vous etes sur de vouloir changer votre mot de passe.                              
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button type="submit">Confirmer</Button>
                            <DialogClose asChild>
                                <Button variant="destructive">Cancel</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </form>
                </Form>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
    )
}