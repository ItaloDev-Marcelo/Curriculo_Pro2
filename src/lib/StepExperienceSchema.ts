import {z} from "zod";

export const schemaExperience = z.object({
   position:  z.string().nonempty('Esse campo e obrigatorio'),
   company:  z.string().nonempty('Esse campo e obrigatorio'),
   startAt1:  z.string().nonempty('Esse campo e obrigatorio'),
   endAt1:  z.string().nonempty('Esse campo e obrigatorio'),
   description:  z.string().nonempty('Esse campo e obrigatorio'),
})

  export type FormExperience  = z.infer<typeof schemaExperience>;