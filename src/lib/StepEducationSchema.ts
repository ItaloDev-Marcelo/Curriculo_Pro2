import {z} from "zod";

export const schemaEducation = z.object({
   school:  z.string().nonempty('Esse campo e obrigatorio'),
   course:  z.string().nonempty('Esse campo e obrigatorio'),
   startAt:  z.string().nonempty('Esse campo e obrigatorio'),
   endAt:  z.string().nonempty('Esse campo e obrigatorio'),
})

  export type FormEducation  = z.infer<typeof schemaEducation>;