'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { HomepageHeroValidation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


type HomepageHeroFormValues = z.infer<typeof HomepageHeroValidation>

export default function HomepageHeroPage()  {

    const form = useForm<HomepageHeroFormValues>({
        resolver: zodResolver(HomepageHeroValidation),
        defaultValues: {
            heroshow: "hideslider",
            events: [],
            showSearchBox: false,
            numberOfEventsToShow: 0,
            numberOfFeaturedCategoriesToShow: 0,
            numberOfBlogToShow: 0,
            showCallToAction: false,
        }
    })

    function onSubmit(values: HomepageHeroFormValues) {
        console.log(values)
    }

  return (
    <div>
      <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Gérer la page d'accueil</h2>
            <p className="text-muted-foreground">
              Configurez la page d'accueil de votre site web.
            </p>
          </div>
        </div>
        <Card className="">
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                        control={form.control}
                        name="heroshow"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Afficher le slider</FormLabel>
                                <FormControl>
                                    
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        
                    </form>
                </Form>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

