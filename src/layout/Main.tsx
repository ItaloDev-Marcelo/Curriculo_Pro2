import {useState} from 'react'
import { useForm, FormProvider } from "react-hook-form";
import { DadosDefault,EducationDefault, ExperienceDefault, SkillsDefault } from '../form/consts/Defaults';
import MultStepForm from "../form/MultStepForm";
import { zodResolver } from '@hookform/resolvers/zod';
import {schemaMultiStepForm, type MultiStepFormData} from '../lib/SchemaMultStepForm';

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
        <div>
            <MultStepForm onNextS={onNext} onBack={onBack} step={step} />
        </div>
    </main>
    </FormProvider>
  )
}

export default Main