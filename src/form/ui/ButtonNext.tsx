
import { IoIosArrowRoundForward } from "react-icons/io";
const ButtonNext = ({next, type}: {next: () => void | Promise<void>, type: "button" | "submit" }) => {
  return (
    <button type={type} onClick={type === "button" ? next : undefined} className='btn bg-blue-400 text-white w-30 h-12.5  items-center text-center rounded-lg p-2.5 gap-x-2.5'> Proximo < IoIosArrowRoundForward   size={30} /></button>
  )
}

export default ButtonNext