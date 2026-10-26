import { FaFileAlt } from "react-icons/fa";
import { PiFiles } from "react-icons/pi";
import { RiFileEditFill } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LuRocket } from "react-icons/lu";
const Nav = () => {
  return (
      <header className='w-[20%] bg-blue-500 px-5 h-screen pt-10'>
        <a href='#' className='flex flex-row items-center'> <FaFileAlt size={30} className="mr-3"/> Currículo</a>
       <h1 className="my-6">Seu future Profissional <br/> começa com um bom currículo. </h1>

       <nav className="mt-20">
          <ul className='font-semibold '>
             <li className="flex flex-row items-center my-3.5"><PiFiles size={28} /><span className='ml-2.5'>Criar Currículo</span></li>
             <li className="flex flex-row items-center my-3.5"><FaFileAlt size={28} /><span className='ml-2.5'>Meus Currículo</span></li>
             <li className="flex flex-row items-center my-3.5"><RiFileEditFill size={28} /><span className='ml-2.5'>Modelos</span></li>
             <li className="flex flex-row items-center my-3.5"><IoMdHelpCircleOutline size={28} /><span className='ml-2.5'>Ajudar</span></li>
          </ul>
       </nav>


       <div className="border rounded-md border-gray-400 relative top-[25%] text-gray-800 w-[80%] p-2.5">
           <LuRocket size={20} />
           <p>Destaque o que te torna <br/>
           único. Um bom Currículo <br />
           abre portas!
           </p>
       </div>
    </header>
  )
}

export default Nav