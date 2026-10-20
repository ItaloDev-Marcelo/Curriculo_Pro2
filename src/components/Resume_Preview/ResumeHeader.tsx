import { MdOutlineMail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { type MultiStepFormData } from '../../lib/SchemaMultStepForm'
import { useFormContext } from "react-hook-form";
export const ResumeHeader = () => {
    
        const {watch} = useFormContext<MultiStepFormData>();
      
        const HeaderData = watch()


   const CreateLogo = (name:string) => {
    const userName = name.trim().split(/\s+/).filter(Boolean);
    const firstName = userName?.[0]?.[0] ?? 'C'
    const userMiddleName = userName.slice(1,2) ?? 'P'
    const secondName = userMiddleName?.[0]?.[0]
    return (firstName + secondName).toUpperCase();
   }

   const LetterResult = HeaderData.fullName.length == 0 ? 'Curriculo Pro' : HeaderData.fullName

  return (
    <div className="border-b border-b-2 pb-2.5 border-gray-500 ">
        <div className="flex flex-row items-center px-10 py-7">
            <div className='w-25 h-25 bg-blue-700 text-center content-center rounded-full text-white'>
                 <p className="text-[1.7em]">{CreateLogo(LetterResult)}</p>
            </div>
           <div className='ml-5'>
            <h1 className='font-bold text-gray-700'>{HeaderData.fullName}</h1>
            <p className='font-semibold text-gray-600'>{HeaderData.position}</p>
           </div>
        </div>
        <div className='flex flex-row flex-wrap gap-2.5 pl-5 w-[80%]  items-center justify-between'>
           { HeaderData.email && <div className='flex flex-row items-center content-center'>
                <MdOutlineMail size={30} />
                <p className='pl-2.5'>{HeaderData.email}</p>
            </div>}
            { HeaderData.tel && <div className='flex flex-row items-center content-center'>
                <BsFillTelephoneFill size={30} />
                <p className='pl-2.5'>{HeaderData.tel}</p>
            </div>}
             {HeaderData.city && <div className='flex flex-row items-center content-center'>
                <IoLocationSharp size={30} />
                <p className='pl-2.5'>{HeaderData.city}</p>
            </div>}
            { HeaderData.linkedin && <div className='flex flex-row items-center content-center'>
                <FaLinkedin size={30} />
                <p className='pl-2.5'>{HeaderData.linkedin}</p>
            </div>}
        </div>
    </div>
  )
}
