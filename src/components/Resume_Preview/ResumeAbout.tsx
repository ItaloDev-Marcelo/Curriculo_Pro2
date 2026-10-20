import { FaRegUser } from "react-icons/fa";
import { type MultiStepFormData } from '../../lib/SchemaMultStepForm'
import { useFormContext } from "react-hook-form";

export const ResumeAbout = () => {
        const {watch} = useFormContext<MultiStepFormData>();
        const AboutData = watch()


  return (
    <div>
       {
        AboutData.about &&  <div className='flex flex-row items-center justify-start'>
          <FaRegUser size={35} />
          <h2 className="ml-2.5">Resumo Profisional</h2>
        </div>
       }
        

        <div className="pl-11 py-5">
            <p className="w-[65%]">{AboutData.about}</p>
        </div>
    </div>
  )
}
