import {useState} from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { DadosDefault,EducationDefault, ExperienceDefault, SkillsDefault } from '../form/consts/Defaults';
import MultStepForm from "../form/MultStepForm";
import { zodResolver } from '@hookform/resolvers/zod';
import {schemaMultiStepForm, type MultiStepFormData} from '../lib/SchemaMultStepForm';
import { Resume } from '../components/Resume_Preview/Resume';

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


  return (
    <FormProvider {...methods}>
    <main>
      <h1>Formulario simples</h1>
        <div className='grid bg-blue-600 grid-cols-2 items-center place-items-center gap-2.5'>
            <div className='bg-pink-700'>
              <MultStepForm onNextS={onNext} onBack={onBack} step={step} />
            </div>
            <section className='bg-red-300 p-2 w-full h-180 xl:w-200 overflow-y-scroll overflow-x-hidden relative'>
              <Resume/>
            </section>
        </div>
    </main>
    </FormProvider>
  )
}

export default Main