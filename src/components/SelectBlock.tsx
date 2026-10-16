import type { reusableType } from './types/Inputs'
type selectBlock = {options: string[], isMultiple: boolean}
type SelectedBlockT = reusableType & selectBlock

const SelectBlock = ({errors,register,name, placeholder,options,isMultiple}:SelectedBlockT) => {
  return (
    <div className='w-[50%]'>
                          <select multiple={isMultiple} className="select" {...register(name)}  defaultValue={ isMultiple ? [] : ''}>
                            <option disabled={true}>{placeholder}</option>
                            {
                              options.map((item,index) => (
                                 <option key={index}>{item}</option>
                              ))
                            }
                          </select>
                          {errors[name] && <span className='text-red-700'>{errors[name].message}</span>}
    </div>
  )
}

export default SelectBlock