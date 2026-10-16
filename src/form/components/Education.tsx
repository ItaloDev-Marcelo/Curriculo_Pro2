import { useFormContext } from 'react-hook-form';
import InputBlock from '../../components/InputBlock'
import SelectBlock from '../../components/SelectBlock';
import { years, yearsOrCurrent } from '../../consts/years';
import type { Both } from '../types/MultiStepType';
import ButtonNext from '../ui/ButtonNext';
import ButtonBack from '../ui/ButtonBack';
import ButtonsContainer from '../ui/ButtonsContainer';

import type { MultiStepFormData} from '../../lib/SchemaMultStepForm';
const Education = ({onNextS,onBack}:Both) => {

 const {register, formState: {errors}} = useFormContext<MultiStepFormData>()


  return (
    <div className='p-2 w-full  xl:w-150'>
       <InputBlock errors={errors} register={register} title='Instituição'  name='school'  placeholder='Faculdade exemplo'  type='text' />
       <InputBlock errors={errors} register={register} title='Curso'  name='course'  placeholder='Ciencia da computação' type='text' />
     <div className='flex flex-col my-2'>
       <label className='py-2 text-[#58667a]'>Periodo <span className='text-red-700'>*</span></label>
       <div className='flex flex-row gap-2.5'>
        <SelectBlock errors={errors} register={register} name='startAt'  placeholder='2001' isMultiple={false} options={years} />
        <SelectBlock errors={errors} register={register} name='endAt'  placeholder='Atual' isMultiple={false} options={yearsOrCurrent} />
       </div>
     </div>
     <ButtonsContainer>
        <ButtonBack back={() => onBack(0)} />
        <ButtonNext type='button'  next={onNextS}/>
     </ButtonsContainer>
       
    </div>
  )
}

export default Education