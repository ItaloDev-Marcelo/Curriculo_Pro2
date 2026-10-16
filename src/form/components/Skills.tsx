import { useFormContext } from 'react-hook-form'
import { languages, softSkills, tecSkills } from '../../consts/tecs'
import type { Both } from '../types/MultiStepType'
import ButtonBack from '../ui/ButtonBack'
import ButtonNext from '../ui/ButtonNext'
import ButtonsContainer from '../ui/ButtonsContainer'
import type { MultiStepFormData} from '../../lib/SchemaMultStepForm';
import Dropdown from '../../components/Dropdown'

const Skills = ({onNextS,onBack}:Both) => {
    
  const {register, formState: {errors}} = useFormContext<MultiStepFormData>()

  return (
    <div className=" p-2 w-full  xl:w-150 ">
         <div className='flex flex-col w-full my-4.5'>
                 <label className='py-2 text-[#58667a]'>Tecnologias <span className='text-red-700'>*</span></label> 
                 <Dropdown errors={errors} register={register} name='tecs' options={tecSkills} />
               </div>   

               <div className='flex flex-col w-full my-4.5'>
                 <label className='py-2 text-[#58667a]'>Soft Skills <span className='text-red-700'>*</span></label> 
                 <Dropdown errors={errors} register={register} name='soft' options={softSkills} />
               </div>

               <div className='flex flex-col w-full my-4.5'>
                 <label className='py-2 text-[#58667a]'>Idiomas <span className='text-red-700'>*</span></label> 
                 <Dropdown errors={errors} register={register} name='languages' options={languages} />
               </div>

               <ButtonsContainer>
                 <ButtonBack back={() => onBack(2)} />
                 <ButtonNext type='submit'  next={onNextS}/>   
               </ButtonsContainer>   
    </div>
  )
}

export default Skills