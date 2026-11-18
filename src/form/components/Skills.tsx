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
    <div className=" p-2 w-full  xl:w-120 relative -top-6 ">
         <div className='flex flex-col w-full my-2.5 py-3'>
                 <label className='py-2 text-black'>Tecnologias <span className='text-red-700'>*</span></label> 
                 <Dropdown errors={errors} register={register} name='tecs' options={tecSkills} h='h-70' />
               </div>   

               <div className='flex flex-col w-full my-2.5 py-3'>
                 <label className='py-2 text-black'>Soft Skills <span className='text-red-700'>*</span></label> 
                 <Dropdown errors={errors} register={register} name='soft' options={softSkills} h='h-50' />
               </div>

               <div className='flex flex-col w-full mt-2.5 mb-6 py-3'>
                 <label className='py-2 text-black'>Idiomas <span className='text-red-700'>*</span></label> 
                 <Dropdown errors={errors} register={register} name='languages' options={languages} 
                 h='h-30' />
               </div>

               <ButtonsContainer>
                 <ButtonBack back={() => onBack(2)} />
                 <ButtonNext type='submit'  next={onNextS}/>   
               </ButtonsContainer>   
    </div>
  )
}

export default Skills