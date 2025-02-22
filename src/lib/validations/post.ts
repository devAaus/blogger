import * as z from "zod"

export const postFormSchema = z.object({
   title: z
      .string()
      .min(1, { message: 'Title is required' })
      .min(3, { message: "Title must be at least 3 characters" })
      .max(100, { message: "Title must be less than 100 characters" }),
   excerpt: z
      .string()
      .min(1, { message: 'Excerpt is required' })
      .min(60, { message: "Excerpt must be at least 60 characters" })
      .max(200, { message: "Excerpt must be less than 200 characters" }),
   content: z
      .string()
      .min(1, { message: 'Content is required' })
      .min(100, { message: "Content must be at least 100 characters" })
      .max(50000, { message: "Content must be less than 50,000 characters" }),
   categorySlug: z.string({
      required_error: "Please select a category",
   }),
   imageUrl: z
      .string(),
})

export type PostFormValues = z.infer<typeof postFormSchema>

