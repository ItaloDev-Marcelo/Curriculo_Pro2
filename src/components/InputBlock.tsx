import type { InputBlockType } from "./types/Inputs"

const InputBlock = ({errors,register,title, name, placeholder, type, style}:InputBlockType) => {
  return (
     <div className={`flex flex-col ${style}`}>
                 <label className="pb-2.5 text-[#58667a]">{title} <span className='text-red-700'>*</span></label>
                 <input type={type} {...register(name)} placeholder={placeholder} className="input w-full" />
                 {errors[name]?.message && <span className='text-red-700'>{errors[name]?.message}</span>}
    </div>
  )
}

export default InputBlock