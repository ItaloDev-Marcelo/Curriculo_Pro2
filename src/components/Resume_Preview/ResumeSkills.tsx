import { FaGear } from "react-icons/fa6";
import { LuUsersRound } from "react-icons/lu";
import { Bubble } from "../Bubble";
import { MdLanguage } from "react-icons/md";
import { type MultiStepFormData } from '../../lib/SchemaMultStepForm'
import { useFormContext } from "react-hook-form";

export const ResumeSkills = () => {
  const {watch} = useFormContext<MultiStepFormData>();
  const skillsData = watch()


  return (
    <div className="flex flex-col">
        <div>
          {skillsData.tecs.length > 0 && <div className='flex flex-row items-end'>
                    <div className='flex flex-row items-center justify-start'>
                    <FaGear  size={35} />
                    <h2 className='pl-2.5'>Habilidades</h2>
                    </div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
           </div>}
            
           <div className='flex flex-row gap-2.5 flex-wrap  pl-11 py-5'>
              {
                skillsData.tecs.map((item) => (
                    <Bubble title={item} />
                ))
              }
           </div>
        </div>
        <div>
          {skillsData.soft.length > 0 &&  <div className='flex flex-row items-end'>
                    <div className='flex flex-row flex-nowrap items-center justify-start'>
                    <LuUsersRound  size={35} />
                    <h2 className='pl-2.5'>Habilidades interpessoais</h2>
                    </div>
                    <div className='w-[78%] h-[2px] bg-gray-400'></div>
           </div>}
           
           <div className='flex flex-row  flex-wrap pl-11 gap-2.5  py-5'>
              {
                skillsData.soft.map((item) => (
                    <Bubble title={item} />
                ))
              }
           </div>
        </div>
        <div>
          {
            skillsData.languages.length > 0 && <div className='flex flex-row items-end'>
                    <div className='flex flex-row items-center justify-start'>
                    <MdLanguage  size={35} />
                    <h2 className='pl-2.5'>Idiomas</h2>
                    </div>
                    <div className='w-full h-[2px] bg-gray-400'></div>
           </div>
          }
            
           <div className='flex flex-row  flex-wrap gap-2.5  pl-11 py-5'>
              {
                skillsData.languages.map((item) => (
                    <Bubble title={item} />
                ))
              }
           </div>
        </div>
    </div>
  )
}
