import{ glob} from "astro/loaders"
import { defineCollection } from "astro:content"
import{ z } from "astro/zod"

const Books = defineCollection({
    // loader:file('src/content/Books.json'),
    loader: glob({base: 'src/content/Books',pattern:'*.md'}),
    schema:z.object({
        // id:z.string(),
        title: z.string(),
        author:z.string(),
        rating:z.number(),
        summary:z.string()
    })
})

export const collections={ Books }