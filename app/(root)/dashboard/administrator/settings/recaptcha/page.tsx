'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { RecaptchaValidation } from "./validation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


type RecaptchaFormValues = z.infer<typeof RecaptchaValidation>




export default function  Recaptchapage() {

    const form = useForm<RecaptchaFormValues>({
        resolver: zodResolver(RecaptchaValidation),
        defaultValues: {
            enableRecaptcha: false,
            secretKey: '',
            siteKey: ''
        }
    })

    function onSubmit(values : RecaptchaFormValues) {
        console.log(values)
    }  
  
return (
    <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Gérer les paramètres de paiement globaux.</h2>
                    <p className="text-muted-foreground">
                        Configurez recaptcha pour site.
                    </p>
                </div>
            </div>
            <Card className="max-w-5xl pt-5">
                <CardContent>
                    <Form {...form}>
                        <form 
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-6"
                        >
                            <FormField
                                control={form.control}
                                name="enableRecaptcha"
                                render = { ( { field  } ) => (
                                    <FormItem>
                                        <FormLabel>Activer  Repatcha</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue="yes"
                                                className="flex gap-7"
                                            >
                                                <FormItem className='flex-col space-x-2'>
                                                <FormControl>
                                                    <RadioGroupItem value="yes" id="yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Oui
                                                </FormLabel>
                                                </FormItem>
                                                <FormItem className='flex-col space-x-2'>
                                                <FormControl>
                                                    <RadioGroupItem value="no" id="no" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Non
                                                </FormLabel>
                                                </FormItem>
                                            </RadioGroup>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="secretKey"
                                render={ ( { field } ) => (
                                    <FormItem>
                                    <FormLabel>Clé du site</FormLabel>
                                    <FormControl>
                                        <Input {...field} 
                                        placeholder="Clé du site..." 
                                        />
                                    </FormControl>
                                </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="siteKey"
                                render={ ( { field } ) => (
                                    <FormItem>
                                    <FormLabel>Clé secrète</FormLabel>
                                    <FormControl>
                                        <Input {...field} 
                                        placeholder="Clé secrète..." 
                                        />
                                    </FormControl>
                                </FormItem>
                                )}
                            />
                            <CardFooter className="px-6 mt-5 justify-end">
                            <Button type="submit">Sauvgarder</Button>
                        </CardFooter>
                        </form>
                    </Form>
                </CardContent>
            </Card>
    </div>
  )
}

