import React from 'react'

type PropsType = {
  children:React.JSX.Element,
  title:string
}

const CommingSoon:React.FC<PropsType> = (props) => {
  return (
    <div className='flex flex-col justify-center items-center w-full poppins h-full'>
      {props.children}
      <h3 className='text-3xl'>{props.title}</h3>
      <h3 className='text-sm tracking-[5px]'>COMMING SOON</h3>
    </div>
  )
}

export default CommingSoon