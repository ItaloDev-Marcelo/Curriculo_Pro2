import { BiBriefcase } from "react-icons/bi";
import { type MultiStepFormData } from '../../lib/SchemaMultStepForm'
import { useFormContext } from "react-hook-form";

export const ResumeExperience = () => {

    const {watch} = useFormContext<MultiStepFormData>();
    const ExperienceData = watch()
  

  return (
    <div className="flex flex-col">
      {ExperienceData.position &&  <div className='flex flex-row items-end'>
                <div className='flex flex-row items-center justify-start'>
                <BiBriefcase size={35} />
                <h2 className='pl-2.5'>Experiência</h2>
                </div>
                <div className='w-full h-[2px] bg-gray-400'></div>
            </div>}
           

            <div className="pl-11 py-5">
                <h3 className='font-semibold'>{ExperienceData.position}</h3>
                <p className='font-semibold text-gray-700'>{ExperienceData.company} {ExperienceData.startAt1 && '|'}   <span>{ExperienceData.startAt1}</span> {ExperienceData.startAt1 && "-"}<span>{ExperienceData.endAt1}</span></p>
                <p className="w-[65%] text-gray-800">{ExperienceData.description}</p>
            </div>
    </div>
  )
}
