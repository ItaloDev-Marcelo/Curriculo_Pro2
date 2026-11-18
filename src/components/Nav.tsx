import { FaFileAlt } from "react-icons/fa";
import { PiFiles } from "react-icons/pi";
import { RiFileEditFill } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuRocket } from "react-icons/lu";
const Nav = () => {
  return (
      <header className='w-[20%] bg-[#0a1625] text-[#7ea5c0] px-5  py-10'>
        <a href='#' className='flex flex-row items-center text-[1.3em] font-bold tracking-[4px]'> <FaFileAlt size={30} className="mr-3 text-blue-500"/> Currículo</a>
       <h1 className="my-6 font-simbold text-[1em]">Seu future Profissional <br/> começa com um bom currículo. </h1>

       <nav className="mt-14">
          <ul className='font-semibold'>
             <li className="flex flex-row items-center my-5 cursor-pointer hover:opacity-70 active:opacity-70"><PiFiles size={25} /><span className='ml-2.5'>Criar Currículo</span></li>
             <li className="flex flex-row items-center my-5 cursor-pointer hover:opacity-70 active:opacity-70"><FaFileAlt size={25} /><span className='ml-2.5'>Meus Currículo</span></li>
             <li className="flex flex-row items-center my-5 cursor-pointer hover:opacity-70 active:opacity-70"><RiFileEditFill size={25} /><span className='ml-2.5'>Modelos</span></li>
             <li className="flex flex-row items-center my-5 cursor-pointer hover:opacity-70 active:opacity-70"><IoMdHelpCircleOutline size={25} /><span className='ml-2.5'>Ajudar</span></li>
          </ul>
       </nav>


       <div className="border rounded-md border-gray-400 relative top-[20%]  w-full p-3.5">
           <LuRocket size={20} className='my-2.5' />
           <p>Destaque o que te torna <br/>
           único. Um bom Currículo <br />
           abre portas!
           </p>
       </div>
    </header>
  )
}

export default Nav