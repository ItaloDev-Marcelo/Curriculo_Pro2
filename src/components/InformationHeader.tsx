
type inforType = {
    title: string,
    text: string
}

export const InformationHeader = ({title,text}:inforType) => {
  return (
      <header className={`px-2 relative ${title !== 'Dados Pessoais' ? 'top-2 py-2' : 'top-2.5 py-4'}`}>
                 <h5 className='text-[#273449] font-bold xl:text-[1.4rem]'>{title}</h5>
                 <p className='text-[17px] my-2 text-[#58667a]'>{text}</p>
      </header>
  )
}
