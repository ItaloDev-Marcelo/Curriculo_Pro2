
export const HeaderBlock = () => {
  return (
    <header className='flex flex-row items-center place-items-center w-full px-2 bg-blue-400 justify-between h-20'>
        <div>
            <h2 className="font-bold text-[1.2em]">Gerador de Currículo</h2>
            <p>Preencha os dados. veja o resultado em tempo real e faça o download em PDF.</p>
        </div>
        <button className='btn btn-blue rounded-md'>Baixar PDF</button>
    </header>
  )
}
