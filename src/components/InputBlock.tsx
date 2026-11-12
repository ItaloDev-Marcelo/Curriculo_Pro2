import type { InputBlockType } from "./types/Inputs"

const InputBlock = ({errors,register,title, name, placeholder, type, style, errorStyle}:InputBlockType) => {
  return (
     <div className={`flex flex-col relative ${style}`}>
                 <label className="pb-1.5 text-black">{title} <span className='text-red-700'>*</span></label>
                 <input type={type} {...register(name)} placeholder={placeholder} className="input w-full" />
                 {errors[name]?.message && <span className={`text-red-700 absolute ${errorStyle} `}>{errors[name]?.message}</span>}
    </div>
  )
}

export default InputBlock