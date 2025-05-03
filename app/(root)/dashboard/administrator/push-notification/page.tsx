'use client'

import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PushNotificationValidation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ticketsSchema } from "@/app/(root)/dashboard/attendee/my-tickets/_components/table/tickets-data-table-schema";
import { columns } from "@/app/(root)/dashboard/attendee/my-tickets/_components/table/ticketsTableColumns"
import { DataTableToolbar } from "@/app/(root)/dashboard/attendee/my-tickets/_components/table/tickets-data-table-toolbar"
import { useEffect, useState } from "react";
import FileUploader from "@/components/fileUploader/FileUploader";

type PushNotificationFormValues = z.infer<typeof PushNotificationValidation>


export default  function  PushNotificationPage (){
    const [ tickets, setTickets ] = useState<any>()

    // useEffect(() => {
    //     async function getTickets() {
    //         const data = await fs.readFile(
    //           path.join(process.cwd(), "/components/table/attendee/tickets/tickets-data.json")
    //         )
          
    //           const tickets = JSON.parse(data.toString())
            
    //           setTickets(z.array(ticketsSchema).parse(tickets))
    //       }

    //       getTickets()
    // }, [])

    const form = useForm<PushNotificationFormValues>({
        resolver: zodResolver(PushNotificationValidation),
        defaultValues: {
            title: "",
            description: ""
        }
    })

    function onSubmit(values: PushNotificationFormValues) {
        console.log(values)
    }

  return (
    <div>
        <div className="hidden h-full flex-1 flex-col space-y-8  md:flex">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Envoyer des Notifications</h2>
                    <p className="text-muted-foreground">
                        Envoyer les notification a vos clinets!
                    </p>
                </div>
            </div>
            <Card className="">
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-row p-3 gap-5">
                                <div className="space-y-6 pt-3 flex-1">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={ ( { field } ) => (
                                        <FormItem>
                                            <FormLabel>Titre</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Nouvelle notification" />
                                            </FormControl>
                                            <FormDescription>
                                                Un titre pour votre notification.
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={ ( { field } ) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea {...field} placeholder="Description..." className="min-h-[156px]"/>
                                            </FormControl>
                                            <FormDescription>
                                                Une description pour votre notification.
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />
                                </div>
                                <div className="flex-1 pt-3 justify-center">
                                        <FormField
                                            control={form.control}
                                            name="file"
                                            render={({ field }) => (
                                                <FormItem>
                                                <div>
                                                    <FormLabel>
                                                        Le Fichier de la notification
                                                    </FormLabel>
                                                </div>
                                                <FormControl>
                                                    <FileUploader 
                                                        fieldChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                        Le fichier image de la notification (ex: notification.png)
                                                </FormDescription>
                                                <FormMessage/>
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
            {/* <DataTable 
                data={tickets} 
                columns={columns} 
                DataTableToolbar={DataTableToolbar} // need to modify this
            /> */}
        </div>
    </div>
  )
}

