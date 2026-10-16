import React from 'react'

const ButtonsContainer = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="flex flex-row-reverse w-full justify-between px-3.5 xl:px-0 my-2.5 ">{children}</div>
  )
}

export default ButtonsContainer