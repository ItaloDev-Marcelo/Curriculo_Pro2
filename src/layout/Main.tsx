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
  const [step, setStep] = useState(0)
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
      step: 0,
      title: 'Dados Pessoais',
      text: 'Comece com suas informações basicas.'
     },
     {
      step: 1,
      title: 'Formação Academica',
      text: 'Informe seus estudos e certificações'
     },
     {
      step: 2,
      title: 'Experiencia Profissional',
      text: 'Informe seus estudos e certificações'
     },
     {
      step: 3,
      title: 'Habilidades',
      text: 'Selecione suas principais habilidades.'
     }
  ]



  return (
    <FormProvider {...methods}>
    <main className='flex flex-col  gap-2 p-2.5 w-[80%] h-screen '>
        <HeaderBlock />
        <div className='grid  grid-cols-2 mt-7 items-center place-content-center gap-2.5'>
            <div className='bg-blue-200 rounded-md w-full '>
              <div className='m-5 pl-2.5'>
                <RowSteps step={step}/>
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
            <section className=' p-4.5 w-full bg-blue-200 rounded-md h-175 xl:w-full overflow-y-scroll overflow-x-hidden relative flex flex-col items-start'>
              <div>
                <h3><span className='text-green-500 mr-2'>⬤</span> Preview Currículo</h3>
                <p>Atualização em tempo real</p>
              </div>
              <Resume/>
            </section>
        </div>
    </main>
    </FormProvider>
  )
}

export default Main