

export const Bubble = ({title}: {title: string}) => {
  return (
    <div className='w-auto h-10 flex flex-row items-center rounded-full mx-1.5 p-5 bg-green-300 text-green-800'>
        <p>{title}</p>
    </div>
  )
}
