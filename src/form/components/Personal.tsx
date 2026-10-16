// import React from 'react'
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
    <div className=" p-2 w-full xl:w-150"> 

         <InputBlock errors={errors} register={register} title='Nome completo'  name='fullName'  placeholder=''  style='my-2' type='text' />
        
         <div className='flex flex-col xl:flex-row xl:gap-5'>
        <InputBlock errors={errors} register={register} title='Email'  name='email'  placeholder='Exemplo@gmail.com'  style='my-2 xl:w-[50%]' type='email' />

         <InputBlock errors={errors} register={register} title='Telefone'  name='tel'  placeholder='(11) 000000000'  style='my-2 xl:w-[50%]' type='tel' />

         </div>

          <div className='flex flex-col xl:flex-row xl:gap-5'>
             <InputBlock errors={errors} register={register} title='Data de nascimento '  name='data'  placeholder=''  style='my-2 xl:w-[50%]' type='date' />

         <InputBlock errors={errors} register={register} title='Cidade' name='city'  placeholder='São Paula, Sp'  style='my-2 xl:w-[50%]' type='text'/>

         </div>

         <InputBlock errors={errors} register={register} title='Linkedin (Opcional)'  name='linkedin'  placeholder='linkedin.com/in/Usuario'  style='my-2 xl:w-full' type='text' />

         <TextareaBlock errors={errors} register={register} title='Sobre'  name='about'  placeholder='ex: Nós conte mais sobre voce!' />
         
        <ButtonsContainer> 
          <ButtonNext next={onNextS} type='button' />
        </ButtonsContainer>
    </div>
  )
}
