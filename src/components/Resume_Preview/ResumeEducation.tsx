import { IoSchool } from "react-icons/io5";
import { type MultiStepFormData } from '../../lib/SchemaMultStepForm'
import { useFormContext } from "react-hook-form";

export const ResumeEducation = () => {
      const {watch} = useFormContext<MultiStepFormData>();
      const EducationData = watch()

  return (
    <div className="flex flex-col">
        {EducationData.school && <div className='flex flex-row items-end'>
            <div className='flex flex-row items-center justify-start'>
            <IoSchool size={35} />
            <h2 className='pl-2.5'>Formação</h2>
            </div>
            <div className='w-full h-[2px] bg-gray-400'></div>
        </div>}
        
        <div className="pl-11 py-5">
            <h3 className='font-semibold'>{EducationData.school}</h3>
            <p className='font-normal text-gray-800'>{EducationData.course}</p>
            <p className='font-normal text-gray-800'><span>{EducationData.startAt}</span> {EducationData.startAt && '-'}  <span>{EducationData.endAt}</span></p>
        </div>
    </div>
  )
}
