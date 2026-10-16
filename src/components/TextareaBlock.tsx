import type { reusableType } from "./types/Inputs"


const TextareaBlock = ({errors,register,title, name, placeholder}:reusableType) => {
  return (
     <div className='flex flex-col'>
                    <label className='py-2 text-[#58667a]'>{title} <span className='text-red-700'>*</span></label>
                    <textarea {...register(name)} placeholder={placeholder}  className="textarea text-black textarea-md w-full"></textarea>
                    {errors[name] && <span className='text-red-700'>{errors[name].message}</span>}
     </div>
  )
}

export default TextareaBlock