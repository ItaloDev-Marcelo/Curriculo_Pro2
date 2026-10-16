import { z } from 'zod';

import { schemaPersonal } from './StepPersonalSchema';
import { schemaEducation } from './StepEducationSchema';
import { schemaExperience } from './StepExperienceSchema';
import { schemaSkills } from './StepSkillsSchema';


export const schemaMultiStepForm = schemaPersonal.
extend(schemaEducation.shape)
.extend(schemaExperience.shape)
.extend(schemaSkills.shape)

export type MultiStepFormData = z.infer<
  typeof schemaMultiStepForm
>;