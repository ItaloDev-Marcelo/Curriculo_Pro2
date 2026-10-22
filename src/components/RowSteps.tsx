import { stepsData } from "../consts/steps"

export const RowSteps = ({step}:{step: number}) => {

  return (
  <ul className=" w-[60%] xl:w-full flex flex-row">
  {
    stepsData.map((item,index) => (
         <li key={index} className="flex  flex-row items-center pr-4.5 xl:pr-4.5" >
            <div className={`w-[35px]  h-[35px]  flex flex-col text-center font-bold items-center justify-center  rounded-full  ${step === item.num ? 'bg-[#1061de] text-white' : 'bg-[#e7edf4] text-[#8391a8]'} mr-3.5`} ><span className='-mt-[2px]'>{item.num}</span></div>
            <span className={`hidden xl:block font-bold text-[#1061de]
             ${step === item.num ? 'text-[#1061de]' : 'text-[#8391a8]'}`}>{item.title}</span></li>
    ))
  }
</ul>
  )
}