import {useState} from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { DadosDefault,EducationDefault, ExperienceDefault, SkillsDefault } from '../form/consts/Defaults';
import MultStepForm from "../form/MultStepForm";
import { zodResolver } from '@hookform/resolvers/zod';
import {schemaMultiStepForm, type MultiStepFormData} from '../lib/SchemaMultStepForm';
import { Resume } from '../components/Resume_Preview/Resume';
import { RowSteps } from '../components/RowSteps';
import { InformationHeader } from '../components/InformationHeader';

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
    <main>
      <h1>Formulario simples</h1>
        <div className='grid  grid-cols-2 items-center place-items-center gap-2.5'>
            <div className=''>
              <div className='my-5'>
                <RowSteps step={step}/>
                {
                 StepsInformation.map((item,index) => (
                    item.step === step && <InformationHeader key={index} title={item.title} text={item.text} /> 
                 )) 
                }
                </div>
              <MultStepForm onNextS={onNext} onBack={onBack} step={step} />
            </div>
            <section className=' p-2 w-full h-180 xl:w-200 overflow-y-scroll overflow-x-hidden relative'>
              <Resume/>
            </section>
        </div>
    </main>
    </FormProvider>
  )
}

export default Main