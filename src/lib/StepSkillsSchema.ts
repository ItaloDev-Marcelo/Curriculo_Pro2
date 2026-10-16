import {z} from "zod";
import { languages, softSkills, tecSkills } from "../consts/tecs";

export const schemaSkills = z.object({
   tecs: z.array(z.enum(tecSkills)).min(1, 'Selecione pelo menos uma tecnologia!'),
   soft: z.array(z.enum(softSkills)).min(1, 'Selecione pelo menos uma soft Skill!'),
   languages: z.array(z.enum(languages)).min(1, 'Selecione pelo menos um Idioma!')
})

  export type SkillsForm  = z.infer<typeof schemaSkills >; 