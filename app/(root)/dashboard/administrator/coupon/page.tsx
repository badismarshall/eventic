'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AddNewCouponValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils"


type AddCouponFormValues = z.infer<typeof AddNewCouponValidation>

export default function CouponPage()  {

  const form = useForm<AddCouponFormValues>({
    resolver: zodResolver(AddNewCouponValidation),
    defaultValues: {
      couponType: "",
      couponTitle: "",
      couponCode: "",
      LimitForSameUser: "",
      DiscountType: "",
      DiscountPercent:  "",
      MinimumPurchase: 2,
      StartDate: new Date(), 
      ExpireDate: new Date() 
    }
  })

  function onSubmit(values: AddCouponFormValues) {
    console.log(values)
}

  return(
    <div>
              <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Ajouter des Coupons</h2>
                        <p className="text-muted-foreground">
                            Des coupons pour vos clients!
                        </p>
                    </div>
                </div>
                <Card className="max-w-5xl">
                  <CardContent>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="p-3">
                          <FormField
                            control={form.control}
                             name="couponTitle"
                             render = { ( { field })  => (
                                <FormItem>
                                  <FormLabel>Titre</FormLabel>
                                  <FormControl>
                                      <Input {...field} placeholder="Nouveau coupon" />
                                  </FormControl>
                                  <FormDescription>
                                      Un titre pour votre coupon.
                                  </FormDescription>
                                </FormItem>
                              )}
                          />
                          <div className="grid grid-cols-1 xl:grid-cols-3 pt-5 gap-3">
                              <div className="flex flex-col gap-3">
                                <FormField
                                  control={form.control}
                                  name="couponType"
                                  render = { ( { field })  => (
                                    <FormItem>
                                      <FormLabel>Type de Coupon</FormLabel>
                                      <FormControl>
                                          <Input {...field} placeholder="Type..." />
                                      </FormControl>
                                      <FormDescription>
                                          Le type de votre coupon.
                                      </FormDescription>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="LimitForSameUser"
                                  render = { ( { field })  => (
                                    <FormItem>
                                      <FormLabel>Limite pour Utilisateur</FormLabel>
                                      <FormControl>
                                          <Input {...field} placeholder="Type..." />
                                      </FormControl>
                                      <FormDescription>
                                          Limite pour le meme utilisateur.
                                      </FormDescription>
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="MinimumPurchase"
                                  render = { ( { field })  => (
                                    <FormItem>
                                      <FormLabel>Achat minimum</FormLabel>
                                      <FormControl>
                                          <Input {...field} placeholder="Type..." type="number"/>
                                      </FormControl>
                                      <FormDescription>
                                        L'achat minimum pour le meme utilisateur.
                                      </FormDescription>
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex flex-col gap-3">
                                <FormField
                                    control={form.control}
                                    name="couponCode"
                                    render = { ( { field })  => (
                                      <FormItem>
                                        <FormLabel>Code</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Code..."/>
                                        </FormControl>
                                        <FormDescription>
                                          Le code de coupon.
                                        </FormDescription>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                      control={form.control}
                                      name="DiscountType"
                                      render = { ( { field })  => (
                                        <FormItem>
                                          <FormLabel>Type de remise</FormLabel>
                                          <FormControl>
                                              <Input {...field} placeholder="Type..."/>
                                          </FormControl>
                                          <FormDescription>
                                            Le type de remise de coupon.
                                          </FormDescription>
                                        </FormItem>
                                      )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="DiscountPercent"
                                        render = { ( { field })  => (
                                          <FormItem>
                                            <FormLabel>Pourcentage de remise</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Pourcentage..."/>
                                            </FormControl>
                                            <FormDescription>
                                              Le pourcentage de remise de coupon.
                                            </FormDescription>
                                          </FormItem>
                                        )}
                                      />
                                </div>
                              <div className="flex flex-col gap-3">
                                  <FormField
                                    control={form.control}
                                    name="MaximumPurchase"
                                    render = { ( { field })  => (
                                      <FormItem>
                                        <FormLabel>Achat maximum</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Max..."/>
                                        </FormControl>
                                        <FormDescription>
                                          L'achat maximum pour le coupon.
                                        </FormDescription>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="StartDate"
                                    render = { ( { field })  => (
                                      <FormItem className="">
                                        <FormLabel>Date de début</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                              <FormControl>
                                                <Button
                                                  variant={"outline"}
                                                  className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                  )}
                                                >
                                                  {field.value ? (
                                                    format(field.value, "PPP")
                                                  ) : (
                                                    <span>Choisissez une date</span>
                                                  )}
                                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                              </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                              <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                  date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                              />
                                            </PopoverContent>
                                          </Popover>
                                        <FormDescription>
                                          Date de début du coupon.
                                        </FormDescription>
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name="ExpireDate"
                                    render = { ( { field })  => (
                                      <FormItem>
                                        <FormLabel>Date du fin</FormLabel>
                                          <Popover>
                                            <PopoverTrigger asChild>
                                              <FormControl>
                                                <Button
                                                  variant={"outline"}
                                                  className={cn(
                                                    "w-full pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                  )}
                                                >
                                                  {field.value ? (
                                                    format(field.value, "PPP")
                                                  ) : (
                                                    <span>Choisissez une date</span>
                                                  )}
                                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                              </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                              <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                  date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                              />
                                            </PopoverContent>
                                          </Popover>
                                        <FormDescription>
                                          Date de fin du coupon.
                                        </FormDescription>
                                      </FormItem>
                                    )}
                                  />
                              </div>
                          </div>
                          <CardFooter className="px-6 mt-5 justify-end">
                                <Button type="submit">Confirmer</Button>
                          </CardFooter>
                        </form>
                      </Form>
                  </CardContent>
                </Card>
              </div>
    </div>
  )
}
