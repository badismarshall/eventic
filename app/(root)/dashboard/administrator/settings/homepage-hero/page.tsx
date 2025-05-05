'use client'

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { HomepageHeroValidation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MultipleSelector, { Option } from '@/components/ui/multiple-selector';


type HomepageHeroFormValues = z.infer<typeof HomepageHeroValidation>

const events: Option[] = [
  { label: 'EuroTrack', value: 'eurotrack' },
  { label: 'Arrenagaming', value: 'arrenagaming' },
  { label: 'Expo', value: 'expo' },
];

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
        <Card className="pt-5">
            <CardContent>
                <Form {...form}>
                    <form 
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="flex flex-col gap-6"
                    >
                        <FormField
                        control={form.control}
                        name="heroshow"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Afficher le slider</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue="option-one"
                                    className="grid grid-cols-1 xl:grid-cols-4 gap-3"
                                  >
                                    <FormItem className='flex-col space-x-2'>
                                      <FormControl>
                                        <RadioGroupItem value="option-one" id="option-one" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Masquer le slider
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex-col space-x-2'>
                                      <FormControl>
                                        <RadioGroupItem value="option-two" id="option-two" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Le slider d'événements
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex-col space-x-2'>
                                      <FormControl>
                                        <RadioGroupItem value="option-three" id="option-three" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Le slider des organisateurs
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className='flex-col space-x-2'>
                                      <FormControl>
                                        <RadioGroupItem value="option-four" id="option-four" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Hero Personnalisé
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                            </FormItem>
                        )}
                        />
                        <FormField
                          control={form.control}
                          name="events"
                          render={ ( { field } ) => (
                            <FormItem>
                              <FormLabel>Événements</FormLabel>
                              <FormControl>
                              <MultipleSelector
                                  {...field}
                                  defaultOptions={events}
                                  placeholder="Sélectionnez les événements que vous aimez..."
                                  emptyIndicator={
                                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400 ">
                                     aucun résultat trouvé.
                                    </p>
                                  }
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        
                        />
                        <FormField
                          control={form.control}
                          name="showSearchBox"
                          render={( { field }) => (
                            <FormItem>
                              <FormLabel>Afficher le champ de recherche</FormLabel>
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
                        <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
                          <FormField
                            control={form.control}
                            name="numberOfEventsToShow"
                            render={ ( { field } ) => (
                              <FormItem>
                                <FormLabel>Nombre d'événements à afficher</FormLabel>
                                <FormControl>
                                    <Input {...field} 
                                    placeholder="Nombre..." 
                                    type="number"
                                    />
                                </FormControl>
                            </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="numberOfFeaturedCategoriesToShow"
                            render={ ( { field } ) => (
                              <FormItem>
                                <FormLabel>Nombre de catégories à afficher</FormLabel>
                                <FormControl>
                                    <Input {...field} 
                                    placeholder="Nombre..." 
                                    type="number"
                                    />
                                </FormControl>
                            </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="numberOfBlogToShow"
                            render={ ( { field } ) => (
                              <FormItem>
                                <FormLabel>Nombre d'articles de blog à afficher</FormLabel>
                                <FormControl>
                                    <Input {...field} 
                                    placeholder="Nombre..." 
                                    type="number"
                                    />
                                </FormControl>
                            </FormItem>
                            )}
                          />
                        </div>
                        <CardFooter className="px-6 mt-5 justify-end">
                            <Button type="submit">Sauvgarder</Button>
                        </CardFooter>
                    </form>
                </Form>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

