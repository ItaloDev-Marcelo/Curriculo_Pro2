import {useState} from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { DadosDefault,EducationDefault, ExperienceDefault, SkillsDefault } from '../form/consts/Defaults';
import MultStepForm from "../form/MultStepForm";
import { zodResolver } from '@hookform/resolvers/zod';
import {schemaMultiStepForm, type MultiStepFormData} from '../lib/SchemaMultStepForm';
import { Resume } from '../components/Resume_Preview/Resume';
import { RowSteps } from '../components/RowSteps';
import { InformationHeader } from '../components/InformationHeader';
import { HeaderBlock } from '../components/HeaderBlock';

const Main = () => {
  const [step, setStep] = useState(1)
  const onNext = () => setStep((prevStep) => prevStep +1)
  const onBack = (num:number) => setStep(num)

  const methods = useForm<MultiStepFormData>({
    resolver: zodResolver(schemaMultiStepForm),
    defaultValues: {
      ...DadosDefault,
      ...EducationDefault,
      ...ExperienceDefault,
      ...SkillsDefault,
    },
    mode: 'onTouched'
  })



  const StepsInformation = [
     {
      step: 1,
      title: 'Dados Pessoais',
      text: 'Comece com suas informações basicas.'
     },
     {
      step: 3,
      title: 'Formação Academica',
      text: 'Informe seus estudos e certificações'
     },
     {
      step: 2,
      title: 'Experiencia Profissional',
      text: 'Informe seus estudos e certificações'
     },
     {
      step: 4,
      title: 'Habilidades',
      text: 'Selecione suas principais habilidades.'
     }
  ]


  const level1 = 'w-[30%]' 
  const level2 = 'w-[57%]' 
  const level3 = 'w-[82%]' 
  const level4 = 'w-[100%]' 


 const movingStepBar = (step: number) => {
     switch(step){
       case 1:
         return level1 
       break  
        case 2:
         return level2 
       break  
        case 3:
         return level3 
       break  
        case 4:
         return level4 
       break  
     }
 }

  return (
    <FormProvider {...methods}>
    <main className='flex flex-col  gap-2 p-2.5 w-[80%] bg-[#fbfcfe] h-screen '>
        <HeaderBlock />
        <div className='grid  grid-cols-2 mt-7  items-center place-content-center gap-2.5'>
            <div className='bg-[#fefefe] border-gray-200 border rounded-md w-full h-175  '>
              <div className='m-5 pl-2.5 '>
                <RowSteps step={step}/>
                <div className='w-[92%] h-2.5 relative top-2 rounded-md bg-gray-200'> 
                  <div className={`bg-[#1061de]  ${movingStepBar(step)} h-2.5 rounded-md`}></div>
                </div>
                {
                 StepsInformation.map((item,index) => (
                    item.step === step && <InformationHeader key={index} title={item.title} text={item.text} /> 
                 )) 
                }
                
                </div>
              <div className='mx-6'>
                 <MultStepForm onNextS={onNext} onBack={onBack} step={step} />
              </div>
            </div>
            <section className=' p-4.5 w-full border-gray-200 border bg-[#fefefe] rounded-md h-175 xl:w-full overflow-y-scroll overflow-x-hidden relative flex flex-col items-start'>
              <div>
                <h3 className='font-bold'><span className='text-green-500 mr-2'>⬤</span> Preview Currículo</h3>
                <p className='font-semibold mt-2'>Atualização em tempo real</p>
              </div>
              <Resume/>
            </section>
        </div>
    </main>
    </FormProvider>
  )
}

export default Main