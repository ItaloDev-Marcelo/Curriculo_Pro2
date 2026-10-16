import { useFormContext } from "react-hook-form"
import InputBlock from "../../components/InputBlock"
import SelectBlock from "../../components/SelectBlock"
import { years } from "../../consts/years"
import TextareaBlock from "../../components/TextareaBlock"
import type { Both } from "../types/MultiStepType"
import ButtonBack from "../ui/ButtonBack"
import ButtonNext from "../ui/ButtonNext"
import ButtonsContainer from "../ui/ButtonsContainer"
import type { MultiStepFormData} from '../../lib/SchemaMultStepForm';

const Experience = ({onNextS,onBack}:Both) => {
    const {register, formState: {errors}} = useFormContext<MultiStepFormData>()
    

  return (
    <div className=' p-2 w-full  xl:w-150'>
      <InputBlock errors={errors} register={register} title='Cargo'  name='position'  placeholder='Desenvolvedor Front-end, jr'  type='text'  />

      <InputBlock errors={errors} register={register} title='Empresa'  name='company'  placeholder='Empresa: exemplo'  type='text'  />

      <div className="flex flex-col my-2">
              <label className='py-2 text-[#58667a]'>Periodo <span className='text-red-700'>*</span></label>
              <div className='flex flex-row gap-2.5'>
                <SelectBlock errors={errors} register={register} name='startAt1'  placeholder='2001' isMultiple={false} options={years} />
                <SelectBlock errors={errors} register={register} name='endAt1'  placeholder='2026' isMultiple={false} options={years} />
              </div>
      </div>

      <TextareaBlock errors={errors} register={register} title='Descrição'  name='description'  placeholder='Bio:' />
      <ButtonsContainer>
      <ButtonBack back={() => onBack(1)} />
      <ButtonNext type='button'  next={onNextS}/>
      </ButtonsContainer>
    </div>
  )
}

export default Experience