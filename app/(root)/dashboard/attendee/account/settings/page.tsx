'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { z } from "zod"
import { ProfileFormValidation } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


type ProfileFormValues = z.infer<typeof ProfileFormValidation>

export default function SettingsAccountPage() {

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormValidation),
    defaultValues: {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      dateOfBirth: "",
      address: "",
      city: "",
      zipCode: "",
      state: "",
    },
    mode: "onSubmit",
  })

  function onSubmit(values: ProfileFormValues) {
    console.log(values)
  }

    return(
        <div>
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Gérer Votre Compte! </h2>
                <p className="text-muted-foreground">
                  Modifier vos informations personnelles
                </p>
              </div>
            </div>
          <div >
            <Card className="max-w-5xl">
              <CardContent>
                <div className="flex justify-center items-center py-6">
                  <Avatar className="w-32 h-32">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>Toi</AvatarFallback>
                  </Avatar>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-3">
                    <FormField 
                      control={form.control} 
                      name="email" 
                      render={( { field} ) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre email
                          </FormDescription>
                        </FormItem>
                      )} 
                   />
                    <FormField 
                      control={form.control} 
                      name="username" 
                      render={( { field} ) => (
                        <FormItem>
                          <FormLabel>Nom d'utilisateur</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre nom d'utilisateur
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField 
                      control={form.control} 
                      name="firstName" 
                      render={( { field} ) => (
                        <FormItem>
                          <FormLabel>Prénom</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre prénom
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre nom
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numéro du Tel</FormLabel>
                          <FormControl>
                            <InputOTP maxLength={10}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                              </InputOTPGroup>
                              <InputOTPSeparator />
                              <InputOTPGroup>
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                              <InputOTPSeparator />
                              <InputOTPGroup>
                                <InputOTPSlot index={6} />
                                <InputOTPSlot index={7} />
                              </InputOTPGroup>
                              <InputOTPSeparator />
                              <InputOTPGroup>
                                <InputOTPSlot index={8} />
                                <InputOTPSlot index={9} />
                              </InputOTPGroup>
                            </InputOTP>
                          </FormControl>
                          <FormDescription>
                            Changer votre numéro de téléphone
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date de naissance</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre date de naissance
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adresse de la rue</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre adresse
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cité</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre cité
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Code Postale</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre code postale
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>État</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="" />
                          </FormControl>
                          <FormDescription>
                            Changer votre état
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                    <CardFooter className="px-6 py-4 justify-end">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button type="submit">Confirmer</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Vous etes sur !</DialogTitle>
                            <DialogDescription>
                              Vous etes sur de vouloir changer vos informations
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