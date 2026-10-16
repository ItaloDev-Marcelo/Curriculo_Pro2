import {useFormContext, type Path} from 'react-hook-form'
import type { multiStepFormT } from './types/MultiStepType';
import { Personal } from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { camposPorStep } from './consts/formConsts';
import type { MultiStepFormData } from '../lib/SchemaMultStepForm';

const MultStepForm = ({onNextS, onBack, step}:multiStepFormT) => {

  const methods  = useFormContext<MultiStepFormData>();

  const next = async (fields: Path<MultiStepFormData>[]) => {
    const isValid = await methods.trigger(fields);
    if(isValid) onNextS()
  }

  

  const onSubmit = (data:MultiStepFormData) => {
    console.log('Dados enviados:',data)
    alert('Formulario enviado! Veja o console')
  }

//   const onInvalid = (errors: FieldErrors<MultiStepFormData>) => {
//   console.log('Erros de validação:', errors);
//    console.log('Valores de tecs:', getValues('tecs'));
//   console.log('Valores de soft:', getValues('soft'));
//   console.log('Valores de languages:', getValues('languages'));
// };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
       {step === 0 && <Personal onNextS={() => next([...camposPorStep[0]])} /> }
       {step === 1 && <Education onBack={onBack} onNextS={() => next([...camposPorStep[1]])} /> }
       {step === 2 && <Experience onBack={onBack} onNextS={() => next([...camposPorStep[2]])} /> }
       {step === 3 && <Skills onBack={onBack} onNextS={() => next([...camposPorStep[3]])} /> }
    </form>
  )
}

export default MultStepForm