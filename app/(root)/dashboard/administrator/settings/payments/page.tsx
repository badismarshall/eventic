'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { PaymentValidation } from "./validation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaymentGateways from "./_components/paymentgateways";


type PaymentFormValues = z.infer<typeof PaymentValidation>

export default  function PaymentPage () {

    const form = useForm<PaymentFormValues>({
        resolver: zodResolver(PaymentValidation),
        defaultValues: {
            currency: 'DZD',
            ticketfee: 10,
            ticketPricePercentageCut: 10,
        }
    })

    function onSubmit(values: PaymentFormValues) {
        console.log(values)
    }

  return (
    <div>
        <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Gérer les paramètres de paiement globaux.
                </h2>
                <p className="text-muted-foreground">
                    Configurez les frais de billet et les passerelles de paiement.
                </p>
            </div>
            </div>
            <Card className="pt-5 max-w-5xl">
                <CardContent>
                    <Form {...form}>
                        <form 
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col gap-6"
                        >
                            <FormField
                                control={form.control}
                                name="currency"
                                render={ ( { field } ) => (
                                    <FormItem>
                                        <FormLabel>Devise</FormLabel>
                                        <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger>
                                              <SelectValue className='text-primary' placeholder="Selectioner le type de devise." />
                                            </SelectTrigger>
                                            <SelectContent>
                                                  <SelectItem value={ "DZD" } className="hover:bg-primary-foreground hover:text-primary" >
                                                    <div>
                                                      DZD
                                                    </div>
                                                  </SelectItem>
                                                  <SelectItem value={ "EUR" } className="hover:bg-primary-foreground hover:text-primary" >
                                                    <div>
                                                        EUR
                                                    </div>
                                                  </SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ticketfee"
                                render={ ( { field } ) => (
                                    <FormItem>
                                        <FormLabel>Frais de billetterie (en ligne)</FormLabel>
                                        <FormDescription className="flex gap-2 items-center text-xs">
                                            <span><CircleAlert size={20}/></span> Ces frais seront ajoutés au prix de vente des billets achetés en ligne, mettez 0 pour désactiver les frais supplémentaires pour les billets achetés en ligne, ne s'applique pas aux billets gratuits, sera appliqué aux commandes futures.
                                        </FormDescription>
                                        <FormControl>
                                            <Input {...field} placeholder="Frais..." type="number"/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ticketPricePercentageCut"
                                render={ ( { field } ) => (
                                    <FormItem>
                                        <FormLabel>Réduction en pourcentage du prix du billet (en ligne)</FormLabel>
                                        <FormDescription className="flex gap-2 items-center text-xs">
                                            <span><CircleAlert size={20}/></span> Ce pourcentage sera déduit de chaque billet vendu en ligne, sur demande de paiement de l'organisateur, ce pourcentage sera prélevé sur chaque billet vendu en ligne, sera appliqué aux commandes futures
                                        </FormDescription>
                                        <FormControl>
                                            <Input {...field} placeholder="Frais..." type="number"/>
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
            <Card className="pt-5 max-w-5xl">
                <CardContent>
                    {/* will fix this bug in future days (dont use fs anymore) */}
                    {/* <PaymentGateways/> */}
                </CardContent>
            </Card>
        </div>
    </div>
  )
}


