'use client'

import { promises as fs } from "fs"
import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PushNotificationValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import path from "path"
import { ticketsSchema } from "@/components/table/attendee/tickets/tickets-data-table-schema";
import { columns } from "@/components/table/attendee/tickets/ticketsTableColumns"
import { DataTableToolbar } from "@/components/table/attendee/tickets/tickets-data-table-toolbar"
import { useEffect, useState } from "react";
import { FileIcon } from "lucide-react";
import { Label } from "@/components/ui/label";

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
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
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
                                <div>Bannière de notification</div>
                                <Card className="mt-3">
                                    <CardContent className="p-6 space-y-4">
                                        <div className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col gap-1 p-6 items-center">
                                        <FileIcon className="w-12 h-12" />
                                        <span className="text-sm font-medium text-gray-500">Drag and drop a file or click to browse</span>
                                        <span className="text-xs text-gray-500">PDF, image, video, or audio</span>
                                        </div>
                                        <div className="space-y-2 text-sm">
                                        <Label htmlFor="file" className="text-sm font-medium">
                                            Fichier
                                        </Label>
                                        <Input id="file" type="file" placeholder="Fichier" accept="image/*" />
                                        </div>
                                    </CardContent>
                                    </Card>
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

