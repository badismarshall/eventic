import { z } from "zod";

type heroShow = "hideslider" | "evetnsslider" | "organizersslider" | "customhero"

export const HomepageHeroValidation = z.object({
    heroshow : z.custom<heroShow>(),
    events: z.array(z.string()),
    showSearchBox: z.boolean(),
    numberOfEventsToShow: z.number(),
    numberOfFeaturedCategoriesToShow: z.number(),
    numberOfBlogToShow: z.number(),
    showCallToAction: z.boolean(),
})

