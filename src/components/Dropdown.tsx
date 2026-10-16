import {useState} from 'react'
import type { reusableType } from './types/Inputs'

type dropdownT = {options: string[]}

type dropdownType = reusableType & dropdownT

const Dropdown = ({errors,register,name,options}:dropdownType) => {
    const [selected, setSelected] = useState<string[]>([])

    const toggle = (value: string) => {
        setSelected((current) => 
         current.includes(value) 
        ? current.filter((item) => item != value)
        : [...current, value]
        )
    }


  return (
    <div className="dropdown w-full">
      <button type='button' tabIndex={0} className='btn w-full justify-between'>
        {
          selected.length > 0 ? `${selected.length} selecionadas` : 'Selecione as tecnologias'
        }
        <span>⌄</span>
      </button>

      <ul tabIndex={0} className='dropdown-content menu z-10 mt-2 w-full rounded-box bg-base-100 p-2 shadow'>
      {options.map((option) => {
  const field = register(name);

  return (
    <li key={option}>
      <label className="flex cursor-pointer items-center gap-2.5">
        <input
          type="checkbox"
          className="checkbox"
          {...field}
          value={option}
          checked={selected.includes(option)}
          onChange={(event) => {
            field.onChange(event);
            toggle(option);
          }}
        />
        <span>{option}</span>
      </label>
    </li>
  );
})}
      </ul>
      {errors[name] && <span className='text-red-700'>{errors[name].message}</span>}
    </div>
  )
}

export default Dropdown