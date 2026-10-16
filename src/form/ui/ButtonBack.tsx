import { IoIosArrowRoundBack } from "react-icons/io";

const ButtonBack = ({back}: {back: () => void}) => {
  return (
          <button type="button" onClick={back} className='btn w-30 h-12.5  text-gray-700  items-center text-center rounded-lg p-2.5 bg-[#f2f5f7] gap-x-2.5'> <IoIosArrowRoundBack size={30} />Voltar</button>
  )
}

export default ButtonBack