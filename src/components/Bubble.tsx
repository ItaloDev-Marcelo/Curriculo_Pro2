

export const Bubble = ({title}: {title: string}) => {
  return (
    <div className='w-auto h-10 flex flex-row items-center rounded-full mx-1.5 p-5 bg-[#0a1625] text-white'>
        <p>{title}</p>
    </div>
  )
}
