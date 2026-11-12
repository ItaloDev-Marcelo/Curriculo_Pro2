import InputBlock from '../../components/InputBlock'
import { useFormContext } from 'react-hook-form'
import TextareaBlock from '../../components/TextareaBlock'
import type { NextT } from '../types/MultiStepType'
import ButtonNext from '../ui/ButtonNext'
import ButtonsContainer from '../ui/ButtonsContainer'

import type { MultiStepFormData} from '../../lib/SchemaMultStepForm';

export const Personal = ({onNextS}: NextT) => {

  const {register, formState: {errors}} = useFormContext<MultiStepFormData>()

  return (
    <div className={`px-1.5 w-full relative -top-2.5  xl:w-150`}> 

         <InputBlock errors={errors} register={register} title='Nome completo'  name='fullName'  placeholder=''  style='my-1.5 py-2.5' type='text' errorStyle='top-19' />
        
         <div className='flex flex-col xl:flex-row xl:gap-5 py-1.5'>
        <InputBlock errors={errors} register={register} title='Email'  name='email'  placeholder='Exemplo@gmail.com'  style='my-1.5 xl:w-[50%]' type='email' errorStyle='top-16' />

         <InputBlock errors={errors} register={register} title='Telefone'  name='tel'  placeholder='(11) 000000000'  style='my-1.5 xl:w-[50%]' type='tel' errorStyle='top-16' />

         </div>


        <div className='flex flex-col xl:flex-row xl:gap-5 py-1.5'>
           <InputBlock errors={errors} register={register} title='Cidade' name='city'  placeholder='São Paula, Sp'  style='my-1.5 xl:w-[50%] ' type='text' errorStyle='top-16'/>


         <InputBlock errors={errors} register={register} title='Linkedin (Opcional)'  name='linkedin'  placeholder='linkedin.com/in/Usuario'  style='my-1.5 xl:w-[50%]' type='text' errorStyle='top-16' />
        </div>
        
         

         <TextareaBlock errors={errors} register={register} title='Sobre'  name='about'  placeholder='ex: Nós conte mais sobre voce!' />
         
        <ButtonsContainer> 
          <ButtonNext next={onNextS} type='button' />
        </ButtonsContainer>
    </div>
  )
}
