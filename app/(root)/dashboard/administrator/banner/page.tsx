'use client'

import FileUploader from "@/components/fileUploader/FileUploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AddBannerValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type AddBannerFormValues = z.infer<typeof AddBannerValidation>

export default function BannerPage()  {


    const form = useForm<AddBannerFormValues>({
        resolver: zodResolver(AddBannerValidation),
        defaultValues: {
            title: "",
        }
    })

    function onSubmit(values: AddBannerFormValues) {
        console.log(values)
    }

  return (
    <div>
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Ajouter de Banner</h2>
                <p className="text-muted-foreground">
                    Ajouter des banner pour l'application!
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
                                            <Input {...field} placeholder="Nouveau banner" />
                                        </FormControl>
                                        <FormDescription>
                                            Un titre pour votre banner.
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
                                                        Le Fichier du banner
                                                    </FormLabel>
                                                </div>
                                                <FormControl>
                                                    <FileUploader 
                                                        fieldChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormDescription>
                                                    Le fichier image du banner (ex: banner.png)
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

