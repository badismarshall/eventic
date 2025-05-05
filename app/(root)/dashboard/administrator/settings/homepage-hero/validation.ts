import { z } from "zod";

type heroShow = "hideslider" | "evetnsslider" | "organizersslider" | "customhero"

const eventsSchema = z.object({
    label: z.string(),
    value: z.string(),
    disable: z.boolean().optional(),
})

export const HomepageHeroValidation = z.object({
    heroshow : z.custom<heroShow>(),
    events: z.array(eventsSchema).min(1),
    showSearchBox: z.boolean(),
    numberOfEventsToShow: z.number(),
    numberOfFeaturedCategoriesToShow: z.number(),
    numberOfBlogToShow: z.number(),
    showCallToAction: z.boolean(),
})

