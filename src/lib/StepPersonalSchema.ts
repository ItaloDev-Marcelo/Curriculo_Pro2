import {z} from "zod";

export const schemaPersonal = z.object({
   fullName:  z.string().nonempty('Esse campo e obrigatorio'),
   email: z.string().nonempty('Informe seu Email'),
   tel: z.string().nonempty('Informe um numero valido'),
   city: z.string().nonempty('Informe a  sua cidade'),
   linkedin: z.string().optional(),
   about:  z.string().min(1,'Esse campo e obrigatorio'),
})

  export type FormPersonal  = z.infer<typeof schemaPersonal>;