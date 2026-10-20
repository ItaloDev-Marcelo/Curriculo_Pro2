import { ResumeHeader } from './ResumeHeader'
import { ResumeAbout } from './ResumeAbout'
import { ResumeEducation } from './ResumeEducation'
import { ResumeExperience }  from './ResumeExperience'
import { ResumeSkills } from './ResumeSkills'
 import { type MultiStepFormData } from '../../lib/SchemaMultStepForm'
  import { useFormContext } from "react-hook-form";
export const Resume = () => {
      
          const {watch} = useFormContext<MultiStepFormData>();
        
          const FormOn = watch()
  return (
    <>
      {
        FormOn.fullName !== '' && <section className="bg-white mx-auto my-5 shadow-2xl ">
        <ResumeHeader/>
        <div className='px-5 pt-7'>
        <ResumeAbout/>
        <ResumeEducation />
        <ResumeExperience />
        <ResumeSkills/>
        </div>
    </section>
      }
    </>
   
  )
}
